import React, { Component } from 'react'

export default class ParseMidi2 extends Component {

  constructor(props){
    super(props)
  }


  render(){
    return(
      <div>
        <h3>Upload {this.props.voiceName}</h3>
        <input type="file" accept="audio/midi" />
      </div>
    )
  }
}
