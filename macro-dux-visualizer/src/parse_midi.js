import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class ParseMidi extends Component {

  constructor(props){
    super(props)
    this.iframeRef = React.createRef()
  }

  getParsedMidi = () => {
    // console.log(this.iframeRef.contentWindow.document.getElementById("ResultsText"))
    console.log(this.iframeRef)
  }

  handleOnClick = (event) => {
    event.preventDefault()
    this.props.collectNotes(this.props.voiceName, this.getParsedMidi())
  }

  render(){
    return(
      <div>
        <iframe id="toneParseMidi"
            title="Tone Parse Midi"
            width="500"
            height="500"
            src="https://tonejs.github.io/Midi/"
            ref={this.iframeRef}/>
          <Button variant="primary" type="submit" onClick={event => this.handleOnClick(event)}>
            Save {this.props.voiceName}
          </Button>
      </div>
    )
  }
}
