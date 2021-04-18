import React, { Component } from 'react'
import ParseMidiContainer from './parse_midi_container'

import { Form, Button, Card } from 'react-bootstrap'

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
            <Form>
              <Form.Group controlId="songTitle">
                <Form.Label>Song Title</Form.Label>
                <Form.Control type="text" placeholder="Enter song title" />
              </Form.Group>
              <ParseMidiContainer />
              <Button variant="primary" type="submit" onClick={event => this.handleOnClick(event)}>
                Save Song
              </Button>
            </Form>
          </Card.Body>
        </Card>
      )
    }
}
