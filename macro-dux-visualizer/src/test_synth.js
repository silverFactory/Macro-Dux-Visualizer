import React, { Component } from 'react'
import * as Tone from 'tone'

//should it be component or functional??
export default class TestSynth extends Component{

  constructor(props){
    super(props)
    this.synth = new Tone.Synth().toDestination()
    this.playing = false
    this.loopA = new Tone.Loop(time => {
      this.synth.triggerAttackRelease("C2", "8n", time)
    }, "4n").start(0)
    this.loopB = new Tone.Loop(time => {
      this.synth.triggerAttackRelease("Eb2", "8n", time)
    }, "4n").start("8n")
  }

  handleOnClick = () => {
    if (!this.playing){
      Tone.Transport.start()
      this.playing = true
    } else {
      Tone.Transport.stop()
      this.playing = false
    }
  }

  render(){
    return <button onClick={this.handleOnClick}>Synth Trigger</button>
  }
}
