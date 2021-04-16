import React from 'react'

import { Form, Button, Card } from 'react-bootstrap'

export default function NewSongForm() {

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
            <div>[insert harmony drag and drop parse component here]</div>
            <div>[insert bass drag and drop parse component here]</div>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    )
}
