import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

export default function UserLogInBootstrap() {

    return (
      <Card style={{ height: '355px'}}>
        <Card.Body>
          <Card.Title>User Log In</Card.Title>
          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    )
}
