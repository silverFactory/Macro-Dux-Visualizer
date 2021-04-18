import React, { Component } from 'react'
import { Form, Button, Card} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import instructions from './ToneJs_Instructions_Small.png'

export default class InstructionsCard extends Component {

    render(){
      return (
        <Card>
          <Card.Body>
            <Card.Title>Midi Formatting Instructions</Card.Title>
            <p>In your DAW, export a midi file for each of the three voices of your song.</p>
            <p>Then follow this <a href="https://tonejs.github.io/Midi/">link</a> to the Tone.js website to parse it into a browser-friendly format.</p>
            <p></p>
            <Image src={instructions} rounded />
          </Card.Body>
        </Card>
      )
    }
}
