import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './navbar.css'

class NavBar extends Component{

  render(){

    let lastLink
    if (this.props.currentUser !== null){
      lastLink = <LinkContainer to="/songs"><Nav.Link >Songs</Nav.Link></LinkContainer>
    } else {
      lastLink = <LinkContainer to="/user"><Nav.Link>User</Nav.Link></LinkContainer>
    }

    return (
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand>Macro-Dux</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/demo">
            <Nav.Link>Demo</Nav.Link>
          </LinkContainer>
          {lastLink}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
