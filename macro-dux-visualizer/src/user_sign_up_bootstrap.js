import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import { Form, Button, Card, Modal} from 'react-bootstrap'

export default class UserSignUpForm extends Component {

  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    showModal: false
  }

  handleOnClick = (event) => {
    event.preventDefault()
    if (this.state.password === this.state.passwordConfirmation){
      this.props.signUp(this.state)
      this.setState({
        username: "",
        password: "",
        passwordConfirmation: "",
      })
    } else {
      this.setState({
        showModal: true
      })
    }
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  render(){
    return this.props.currentUser ? (
      <Redirect to="/songs"/>
    ) : (
      <div>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Passwords Don't Match</Modal.Title>
          </Modal.Header>
        </Modal>
        <Card style={{ height: '355px'}}>
          <Card.Body>
            <Card.Title>User Sign Up</Card.Title>
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
                <Form.Group controlId="passwordConfirmation">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    value={this.state.passwordConfirmation}
                    onChange={e => this.setState({passwordConfirmation: e.target.value})}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={event => this.handleOnClick(event)}>
                  Log In
                </Button>
              </Form>
          </Card.Body>
        </Card>
      </div>

    )
  }
}
