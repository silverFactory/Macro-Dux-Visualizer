import React, { Component } from 'react'
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
      //console.log(this.props.currentUser)
      console.log({
          melody: JSON.parse(this.state.melody).tracks[0].notes,
          harmony: JSON.parse(this.state.harmony).tracks[0].notes,
          bass: JSON.parse(this.state.bass).tracks[0].notes
      })
      // this.props.saveSong({
      //     username: this.props.currentUser,
      //     title: this.state.title,
      //     melody: JSON.parse(this.state.melody).tracks[0].notes,
      //     harmony: JSON.parse(this.state.harmony).tracks[0].notes,
      //     bass: JSON.parse(this.state.bass).tracks[0].notes
      // })
      this.setState({
        title: "",
        melody: "",
        harmony: "",
        bass: ""
      })
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
