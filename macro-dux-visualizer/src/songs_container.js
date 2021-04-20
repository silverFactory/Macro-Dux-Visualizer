import React, { Component } from 'react'
import { Button, Card} from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


export default class SongsContainer extends Component{

  state = {
    redirect: false
  }

  handleOnClick = () => {
    this.setState({
      redirect: true
    })
  }

  render(){
    return this.state.redirect ? (
      <Redirect to="/player" />
    ) : (
      <Card>
        <Card.Title>{`${this.props.currentUser}'s`} Song Library</Card.Title>
        <Card.Text>
          {this.props.songs.map(song => {
            return <p>{song.title}</p>
          })}
        </Card.Text>
        <Button onClick={this.handleOnClick}>Go to Player</Button>
      </Card>
    )
  }
}
