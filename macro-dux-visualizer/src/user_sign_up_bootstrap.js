import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

export default function UserSignUpBootstrap() {

    return (
      <Card>
        <Card.Body>
          <Card.Title>User Sign Up</Card.Title>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="Password Confirmation" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    )
}
