import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class ParseMidi extends Component {

  state = {
    iframeRef: React.createRef()
  }



  render(){
    return(
      <div>
        <iframe id="toneParseMidi"
            title="Tone Parse Midi"
            width="500"
            height="500"
            src="https://tonejs.github.io/Midi/"
            ref={this.state.iframeRef}/>
          <Button variant="primary" type="submit" onClick={event => this.handleOnClick(event)}>
            Save Melody
          </Button>
      </div>
    )
  }
}
