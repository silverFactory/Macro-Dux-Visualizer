import React, { Component } from 'react'
import * as Tone from 'tone'

//should it be component or functional??
export default class TestSynth extends Component{

  constructor(props){
    super(props)
    this.synth = new Tone.Synth().toDestination()
  }

  handleOnClick = () => {
    this.synth.triggerAttackRelease("C4", "4n")
  }

  render(){
    return <button onClick={this.handleOnClick}>Synth Trigger</button>
  }
}
