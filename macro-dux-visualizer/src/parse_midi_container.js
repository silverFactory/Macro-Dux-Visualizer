import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import ParseMidi from './parse_midi_2'

export default class ParseMidiContainer extends Component {

  render(){
    return(
      <div>
        <ParseMidi voiceName={"melody"}/>
        <ParseMidi voiceName={"harmony"}/>
        <ParseMidi voiceName={"bass"}/>
      </div>
    )
  }
}
