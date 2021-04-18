import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import ParseMidi from './parse_midi_2'

export default class ParseMidiContainer extends Component {

  render(){
    return(
      <div>
        <ParseMidi parseFile={this.props.parseFile} voiceName={"melody"}/>
        <ParseMidi parseFile={this.props.parseFile} voiceName={"harmony"}/>
        <ParseMidi parseFile={this.props.parseFile} voiceName={"bass"}/>
      </div>
    )
  }
}
