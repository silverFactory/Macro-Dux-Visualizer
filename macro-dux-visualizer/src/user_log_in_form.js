import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import { Form, Button, Card} from 'react-bootstrap'


export default class UserLogInForm extends Component {

  state = {
    username: "",
    password: ""
  }

  handleOnClick = (event) => {
    event.preventDefault()
    //console.log(this.state)
    this.props.logIn(this.state)
    this.setState({
      username: "",
      password: "",
      passwordConfirmation: "",
    })
  }

  render(){
    return this.props.currentUser ? (
      <Redirect to="/songs"/>
    ) : (
      <Card style={{ height: '355px'}}>
        <Card.Body>
          <Card.Title>User Log In</Card.Title>
            <Form>
              <Form.Group controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control value={this.state.username}
                  onChange={e => this.setState({username: e.target.value})}/>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={this.state.password}
                  onChange={e => this.setState({password: e.target.value})}/>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={event => this.handleOnClick(event)}>
                Log In
              </Button>
            </Form>
        </Card.Body>
      </Card>
    )
  }
}
