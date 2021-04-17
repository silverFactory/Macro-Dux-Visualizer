import React, { Component } from 'react'
import ParseMidi from './parse_midi'

import { Form, Button, Card } from 'react-bootstrap'

export default class NewSongForm extends Component {

    state = {
      melodyNotes: [],
      harmonyNotes: [],
      bassNotes: []
    }

    collectNotes = (voice, notes) => {
      this.setState({
        [voice]: notes
      })
    }

    handleOnClick = (event) => {
      event.preventDefault()
      //grab notes from ParseMidi components and store them in state

      //fetch to db
    }

    render(){
      return (
        <Card>
          <Card.Body>
            <Card.Title>Make A New Song</Card.Title>
            <Form>
              <Form.Group controlId="songTitle">
                <Form.Label>Song Title</Form.Label>
                <Form.Control type="text" placeholder="Enter song title" />
              </Form.Group>
              <div>[insert melody drag and drop parse component here]</div>
              <ParseMidi collectNotes={this.collectNotes}/>
              <div>[insert harmony drag and drop parse component here]</div>
              <div>[insert bass drag and drop parse component here]</div>

              <Button variant="primary" type="submit" onClick={event => this.handleOnClick(event)}>
                Save Song
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )
    }
}
