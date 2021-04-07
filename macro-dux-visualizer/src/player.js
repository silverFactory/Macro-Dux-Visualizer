import React, {Component} from 'react'
import Remember from './Remember.mp3'
import P5OscBubble from './p5_osc_bubble'

export default class Player extends Component {

  state = {
    playing: false,
    audioDataTime: new Uint8Array(0),
    audioDataFreq: new Uint8Array(0)
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
    this.analyserTime.getByteTimeDomainData(this.timeDataArray)
    this.analyserFreq.getByteFrequencyData(this.freqDataArray)
    this.setState({
      audioDataTime: this.timeDataArray,
      audioDataFreq: this.freqDataArray
    })
    console.log(this.state.audioDataTime)
    if (this.state.playing === true){
      this.rafId = requestAnimationFrame(this.tick)
    }

  }
  handleOnClick = event => {
    event.preventDefault()
    console.log(this.audioContext.state)
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
      <div>
        <button onClick={this.handleOnClick}>Play/Pause</button>
        <P5OscBubble audioData={this.state.audioDataTime}/>
      </div>
    )
  }
}
