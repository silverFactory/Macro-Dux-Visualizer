import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class ParseMidi2 extends Component {

  constructor(props){
    super(props)
    this.inputRef = React.createRef()
  }

  handleOnClick = (event) => {
    event.preventDefault()
    //console.log(this.inputRef.current.files[0])
    this.props.parseFile(this.inputRef.current.files[0])
  }


  render(){
    return(
      <div>
        <h3>Upload {this.props.voiceName}</h3>
        <input type="file" accept="audio/midi" ref={this.inputRef}/>
        <Button onClick={event => this.handleOnClick(event)}>Parse</Button>
      </div>
    )
  }
}
