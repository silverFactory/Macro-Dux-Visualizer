import React, { Component } from 'react'
//import ParseMidiContainer from './parse_midi_container'
import ParseMidi from './parse_midi'
//import * as Tone from 'tone'
import { Form, Button, Card} from 'react-bootstrap'
import InstructionsCard from './instructions_card'

export default class NewSongForm extends Component {

    constructor(props){
      super(props)
      this.state = {
        title: "",
        melody: "",
        harmony: "",
        bass: ""
      }

    }

    handleOnClick = (event) => {
      event.preventDefault()
      //fetch send state to db
      this.configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: this.state
      }
      fetch("http://localhost:3000/songs", this.configObj)
      .then(resp=>resp.json())
      .then(function(object){
        console.log(object)
        //will need to add thunk so that the resp, the song obj returned from RAILS can be added to store
      })
      console.log(JSON.parse(this.state.bass).tracks[0].notes)
      //console.log(this.fullSong)
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
                <Form.Control type="text"
                  placeholder="Enter song title"
                  value={this.state.title}
                  onChange={e => this.setState({title: e.target.value})}/>
              </Form.Group>
              <Form.Group controlId="melodyJSON">
                <Form.Label>Melody JSON</Form.Label>
                <Form.Control as="textarea"
                  rows={3}
                  placeholder="Paste Melody Here"
                  value={this.state.melody}
                  onChange={e => this.setState({melody: e.target.value})}/>
              </Form.Group>
              <Form.Group controlId="harmonyJSON">
                <Form.Label>Harmony JSON</Form.Label>
                <Form.Control as="textarea"
                  rows={3}
                  placeholder="Paste Harmony Here"
                  value={this.state.harmony}
                  onChange={e => this.setState({harmony: e.target.value})}/>
              </Form.Group>
              <Form.Group controlId="bassJSON">
                <Form.Label>Bass JSON</Form.Label>
                <Form.Control as="textarea"
                  rows={3}
                  placeholder="Paste Bass Here"
                  value={this.state.bass}
                  onChange={e => this.setState({bass: e.target.value})}/>
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
