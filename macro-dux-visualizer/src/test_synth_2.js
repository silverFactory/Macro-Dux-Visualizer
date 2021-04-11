import React, { Component } from 'react'
import * as Tone from 'tone'

//should it be component or functional??
export default class TestSynth extends Component{

  constructor(props){
    super(props)
    this.filter = new Tone.Filter(50, "lowpass").toDestination()
    this.distortion = new Tone.Distortion(0.9).connect(this.filter)
    this.synth = new Tone.PolySynth(Tone.Synth, {
      envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.03,
        release: 1
      }
    }).connect(this.distortion)
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

  componentDidUpdate = () => {
    this.filter.frequency.rampTo(scale(this.props.cutoff, 0, 100, 50, 1000), 1)
    this.distortion.wet.rampTo(scale(this.props.cutoff, 0, 100, 0.01, 0.99))
    //console.log(this.distortion)
  }


  render(){
    return <button onClick={this.handleOnClick}>Synth Trigger</button>
  }
}

  //maps a number in one range to another range
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
  }
