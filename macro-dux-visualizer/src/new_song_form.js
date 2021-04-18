import React, { Component } from 'react'
//import ParseMidiContainer from './parse_midi_container'
import ParseMidi from './parse_midi'
//import * as Tone from 'tone'
import { Form, Button, Card} from 'react-bootstrap'
import InstructionsCard from './instructions_card'

export default class NewSongForm extends Component {

    state = {
      melody: [],
      harmony: [],
      bass: []
    }

    collectNotes = (voice, notes) => {
      this.setState({
        [voice]: notes
      })
    }


    handleOnClick = (event) => {
      event.preventDefault()
      //fetch send state to db
      console.log(this.state)
    }

    render(){
      return (
        <Card>
          <Card.Body>
            <Card.Title>Make A New Song</Card.Title>
            <InstructionsCard />
            <Form>
              <Form.Group controlId="songTitle">
                <Form.Label>Song Title</Form.Label>
                <Form.Control type="text" placeholder="Enter song title" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={event => this.handleOnClick(event)}>
                Save Song
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )
    }
}

function parseFile(file) {
   //instantiate new FileReader
   let reader = new FileReader();
   //define function to be called when reader loads a file
   reader.onload = function (e) {
     //let midi = new Midi(e.target.result);
     console.log(e.target.result)

     //sets text area value to the parsed midi data
     // document.querySelector(
     // 	"#ResultsText"
     // ).value = JSON.stringify(midi, undefined, 2);

     //sets variable in outer scope to be used by other functions
     //currentMidi = midi;
   };
   //read the file
   reader.readAsArrayBuffer(file);
 }
