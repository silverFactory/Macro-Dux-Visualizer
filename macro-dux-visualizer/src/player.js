import React, {Component} from 'react'
import { connect } from 'react-redux'
import Remember from './Remember.mp3'
import Drums from './Macro_dux_drums.mp3'
import P5Visualizer from './p5_visualizer'
import MacroCardContainer from './macro_card_container'
import SynthsContainer from './synths_container'


class Player extends Component {

  state = {
    playing: false,
    audioDataTime: new Uint8Array(0),
    audioDataFreq: new Uint8Array(0),
    bassSynthWaveform: new Uint8Array(0),
    keysSynthWaveform: new Uint8Array(0),
    leadSynthWaveform: new Uint8Array(0),
  }

  componentDidMount() {
    // Initialize an audio context
    this.audioContext = new AudioContext()
    this.audioElement = new Audio(Remember)
    this.track = this.audioContext.createMediaElementSource(this.audioElement)
    this.track.connect(this.audioContext.destination)

    this.demoDrums = new Audio(Drums)
    this.drumTrack = this.audioContext.createMediaElementSource(this.demoDrums)
    this.drumTrack.connect(this.audioContext.destination)

    this.bassTrackGain = new GainNode(this.audioContext)

    this.analyserTime = this.audioContext.createAnalyser()
    this.analyserFreq = this.audioContext.createAnalyser()
    this.analyserFreq.fftsize = 256
    this.timeDataArray = new Uint8Array(this.analyserTime.frequencyBinCount)
    this.freqDataArray = new Uint8Array(this.analyserFreq.frequencyBinCount)
    this.track.connect(this.analyserTime)
    this.track.connect(this.analyserFreq)
    //this.rafId = requestAnimationFrame(this.tick)
  }
  tick = () => {
    //console.log(this.analyserTime.frequencyBinCount)
    this.analyserTime.getByteTimeDomainData(this.timeDataArray)
    this.analyserFreq.getByteFrequencyData(this.freqDataArray)
    this.setState({
      audioDataTime: this.timeDataArray,
      audioDataFreq: this.freqDataArray
    })
    //console.log(this.state.audioDataTime)
    if (this.state.playing === true){
      this.rafId = requestAnimationFrame(this.tick)
    }

  }

  getWaveformArray = (voice, array) => {
    this.setState({
      [voice]: array
    })
  }

  handleOnClick = event => {
    event.preventDefault()
    //console.log(this.audioContext.state)
    if (this.audioContext.state === 'suspended'){
      this.audioContext.resume()
    }
    if (this.state.playing === false){
      this.audioElement.play()
      //this.rafId = requestAnimationFrame(this.tick)

      this.setState({
        playing: true
      })
      //adjust start time to line up with the synths
      //setTimeout(this.demoDrums.play(), 600)
    } else {
      this.audioElement.pause()
      //this.demoDrums.pause()
      this.setState({
        playing: false
      })
    }
  }

  stateClick = () => {
    console.log(this.props.macros)
  }

  render(){
    return (
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg">
            <button onClick={this.stateClick}>Print State</button>
            <SynthsContainer
              macro1={this.props.macros.macro1}
              macro2={this.props.macros.macro2}
              macro3={this.props.macros.macro3}
              macro4={this.props.macros.macro4}
              macro5={this.props.macros.macro5}
              macro6={this.props.macros.macro6}
              macro7={this.props.macros.macro7}
              macro8={this.props.macros.macro8}
              macro9={this.props.macros.macro9}
              playing={this.state.playing}
              getWaveformArray={this.getWaveformArray}
              scale={scale}/>
            <button onClick={this.handleOnClick}>Play/Pause</button>
            <P5Visualizer
              audioDataTime={this.state.audioDataTime}
              audioDataFreq={this.state.audioDataFreq}
              bassSynthWaveform={this.state.bassSynthWaveform}
              keysSynthWaveform={this.state.keysSynthWaveform}
              leadSynthWaveform={this.state.leadSynthWaveform}
              playing={this.state.playing}
              macros={this.props.macros}/>
          </div>
          <div class="col-md">
            <MacroCardContainer />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    macros: state
  }
}

export default connect(mapStateToProps)(Player)

//MOVE TO HELPER FUNCTIONS FILE?
  //maps a number in one range to another range
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
  }
