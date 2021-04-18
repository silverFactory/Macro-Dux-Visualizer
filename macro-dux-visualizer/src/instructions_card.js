import React, { Component } from 'react'
import { Form, Button, Card} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import instructions from './ToneJs_Instructions.png'

export default class InstructionsCard extends Component {

    render(){
      return (
        <Card>
          <Card.Body>
            <Card.Title>Midi Formatting Instructions</Card.Title>
            <p>In your DAW, export a midi file for the three voices of your song</p>
            <Image src={instructions} rounded />
          </Card.Body>
        </Card>
      )
    }
}
