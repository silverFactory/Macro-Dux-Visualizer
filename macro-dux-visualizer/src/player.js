import React, {Component} from 'react'
import { connect } from 'react-redux'
import Remember from './Remember.mp3'
import P5Visualizer from './p5_visualizer'
import MacroCardContainer from './macro_card_container'
import SynthsContainer from './synths_container'


class Player extends Component {

  state = {
    playing: false,
    audioDemo: false,
    audioDataTime: new Uint8Array(0),
    audioDataFreq: new Uint8Array(0),
    bassSynthWaveform: new Uint8Array(0),
    keysSynthWaveform: new Uint8Array(0),
    leadSynthWaveform: new Uint8Array(0),
    melodyNotes: [],
    harmonyNotes: [],
    bassNotes: []
  }

  componentDidMount() {
    // Initialize an audio context
    this.audioContext = new AudioContext()
    this.audioElement = new Audio(Remember)
    this.track = this.audioContext.createMediaElementSource(this.audioElement)
    this.track.connect(this.audioContext.destination)

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
    if (this.audioContext.state === 'suspended'){
      this.audioContext.resume()
    }
    if (this.state.playing === false){
      this.audioElement.play()
      this.rafId = requestAnimationFrame(this.tick)

      this.setState({
        playing: true,
        audioDemo: true
      })

    } else {
      this.audioElement.pause()
      this.setState({
        playing: false
      })
    }
  }

  stateClick = () => {
    console.log(this.props.songs)
  }

  startSong = (e) => {
    this.currentSong = this.props.songs.find(song => song.title === e.target.id)
    this.setState({
      melodyNotes: this.currentSong.melody,
      harmonyNotes: this.currentSong.harmony,
      bassNotes: this.currentSong.bass,
    })
     setTimeout(this.setState({playing: true}), 1000)
    //setTimeout(console.log(this.state), 1000)
  }

  render(){

    let visualizer
    if (this.state.audioDemo === true) {
      visualizer = <P5Visualizer
        audioDataFreq={this.state.audioDataFreq}
        bassSynthWaveform={this.state.audioDataTime}
        keysSynthWaveform={this.state.audioDataTime}
        leadSynthWaveform={this.state.audioDataTime}
        playing={this.state.playing}
        macros={this.props.macros}/>
    } else {
      visualizer = <P5Visualizer
        audioDataFreq={this.state.audioDataFreq}
        bassSynthWaveform={this.state.bassSynthWaveform}
        keysSynthWaveform={this.state.keysSynthWaveform}
        leadSynthWaveform={this.state.leadSynthWaveform}
        playing={this.state.playing}
        macros={this.props.macros}/>
    }

    return (
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg">
            <button onClick={this.stateClick}>Print State</button>
            <button onClick={this.handleOnClick}>Start Visualizer</button>
            {this.props.songs.map(song => {
               return <button
                          id={song.title}
                          onClick={e => this.startSong(e)}>
                          Play {song.title}</button>
            })}
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
              melodyNotes={this.state.melodyNotes}
              harmonyNotes={this.state.harmonyNotes}
              bassNotes={this.state.bassNotes}
              playing={this.state.playing}
              getWaveformArray={this.getWaveformArray}
              scale={scale}/>
            {visualizer}
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
    macros: state.macros,
    songs: state.songs.songs,
    state: state
  }
}

export default connect(mapStateToProps)(Player)

//MOVE TO HELPER FUNCTIONS FILE?
  //maps a number in one range to another range
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
  }
