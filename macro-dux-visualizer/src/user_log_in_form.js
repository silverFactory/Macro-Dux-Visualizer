import React, { Component } from 'react'
import { connect } from 'react-redux'
import {logIn} from './actions/logIn'
import { Form, Button, Card} from 'react-bootstrap'

class UserLogInForm extends Component {

  state = {
    username: "",
    password: ""
  }

  handleOnClick = (event) => {
    event.preventDefault()
    //console.log(this.state)
    this.props.logIn(this.state)
  }

  render(){
    return(
      <Form>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control value={this.state.username}
            onChange={e => this.setState({username: e.target.value})}/>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control value={this.state.password}
            onChange={e => this.setState({password: e.target.value})}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={event => this.handleOnClick(event)}>
          Log In
        </Button>
      </Form>
    )
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logIn: (user) => dispatch(logIn(user))
  }
}

export default connect(null, mapDispatchToProps)(UserLogInForm)
