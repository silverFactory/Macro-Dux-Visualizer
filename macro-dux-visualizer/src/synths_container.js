import React, { Component} from 'react'
import BassSynth from './bass_synth_2'
import KeysSynth from './keys_synth'
import LeadSynth from './lead_synth_2'

export default class SynthsContainer extends Component {

  state = {
    playing: false
  }

  startSong = () => {
    this.setState({
      playing: true
    })
  }

  render(){
    return(
      <div>
        <BassSynth
          macro7={this.props.macro7}
          macro8={this.props.macro8}
          macro9={this.props.macro9}
          notes={this.props.bassNotes}
          playing={this.props.playing}
          getWaveformArray={this.props.getWaveformArray}
          scale={this.props.scale}
          />
        <KeysSynth
          macro4={this.props.macro4}
          macro5={this.props.macro5}
          macro6={this.props.macro6}
          notes={this.props.harmonyNotes}
          playing={this.props.playing}
          getWaveformArray={this.props.getWaveformArray}
          scale={this.props.scale}
          />
        <LeadSynth
          macro1={this.props.macro1}
          macro2={this.props.macro2}
          macro3={this.props.macro3}
          notes={this.props.melodyNotes}
          playing={this.props.playing}
          getWaveformArray={this.props.getWaveformArray}
          scale={this.props.scale}
          />
      </div>
    )
  }
}
