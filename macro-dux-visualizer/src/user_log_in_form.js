import React, { Component } from 'react'

export default class UserLogInForm extends Component {

  state = {
    username: "",
    password: ""
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render(){
    return (
      <form onSubmit={event => this.handleOnSubmit(event)}>
        <input type="text" name="username"
          value={this.state.username}
          onChange={event => this.handleOnChange(event)}/>
        <input type="password" name="password"
          value={this.state.password}
          onChange={event => this.handleOnChange(event)}/>
      </form>
    )
  }
}
