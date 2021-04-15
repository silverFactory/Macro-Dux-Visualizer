import React, {Component} from 'react'
import { connect } from 'react-redux'
import Remember from './Remember.mp3'
import P5Visualizer from './p5_visualizer'
import MacroCardContainer from './macro_card_container'
import TestSynth from './test_synth'
import TestSynth2 from './test_synth_2'
import BassSynth from './bass_synth'


class Player extends Component {

  state = {
    playing: false,
    audioDataTime: new Uint8Array(0),
    audioDataFreq: new Uint8Array(0),
    bassSynthWaveform: new Uint8Array(0)
  }

  componentDidMount() {
    // Initialize an audio context
    this.audioContext = new AudioContext()
    this.audioElement = new Audio(Remember)
    this.track = this.audioContext.createMediaElementSource(this.audioElement)
    this.track.connect(this.audioContext.destination)

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

  //callback to be based as prop that connects bass_synth to bassTrack GainNode
  //bringing it into this audio context and "visible" to both analyser nodes
  //DOESN'T SEEM TO WORK, I THINK BECAUSE THE AUDIO CONTEXTS ARE SEPARATE
  //YOU CAN'T CONNECT NODES, EVEN THOUGH IT'S JUST AN AUDIO SIGNAL
  //NEED TO ANALYSE WITHIN THE TONE CONTEXT THEN SEND DATA TO VISUALIZER
  // connectSignalToAnalysers = (gainNode) => {
  //   this.bassTrack = this.audioContext.createMediaElementSource(gainNode)
  //   this.bassTrack.connect(this.audioContext.destination)
  // }


  fillFFTTimeDataArray = () => {

  }

  // connectSignalToAnalysers = (message) => {
  //   console.log(message)
  // }

  connectAnalyserToToneAudioContext = () => {

  }

  getWaveformArray = (array) => {
    //break conversion into separate function
    // let uint8 = new Uint8Array(1024)
    // uint8 = Uint8Array.from(array)
    this.setState({
      // bassSynthWaveform: uint8
      bassSynthWaveform: array
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
      this.rafId = requestAnimationFrame(this.tick)
      this.setState({
        playing: true
      })
    } else {
      this.audioElement.pause()
      this.setState({
        playing: false
      })
    }

  }

  render(){
    return (
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg">
            {/*}<TestSynth />*/}
            {/*}<TestSynth2
              macro1={this.props.macros.macro1}
              macro2={this.props.macros.macro2}
              macro3={this.props.macros.macro3}/>*/}
              <BassSynth
                macro7={this.props.macros.macro7}
                macro8={this.props.macros.macro8}
                macro9={this.props.macros.macro9}
                getWaveformArray={this.getWaveformArray}
                />
            <button onClick={this.handleOnClick}>Play/Pause</button>
            <P5Visualizer
              audioDataTime={this.state.audioDataTime}
              audioDataFreq={this.state.audioDataFreq}
              bassSynthWaveform={this.state.bassSynthWaveform}
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
