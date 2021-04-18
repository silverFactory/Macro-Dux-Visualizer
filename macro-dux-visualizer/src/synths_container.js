import React, { Component} from 'react'
import BassSynth from './bass_synth_2'
import KeysSynth from './keys_synth'
import LeadSynth from './lead_synth'

export default class SynthsContainer extends Component {

  state = {
    melodyNotes: [],
    harmonyNOtes: [],
    bassNotes: [
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 50,
            "name": "D3",
            "ticks": 77520,
            "time": 80.75,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 50,
            "name": "D3",
            "ticks": 77760,
            "time": 81,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 48,
            "name": "C3",
            "ticks": 78000,
            "time": 81.25,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.125,
            "durationTicks": 120,
            "midi": 48,
            "name": "C3",
            "ticks": 78240,
            "time": 81.5,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 50,
            "name": "D3",
            "ticks": 78960,
            "time": 82.25,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 50,
            "name": "D3",
            "ticks": 79200,
            "time": 82.5,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 48,
            "name": "C3",
            "ticks": 79440,
            "time": 82.75,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.125,
            "durationTicks": 120,
            "midi": 48,
            "name": "C3",
            "ticks": 79680,
            "time": 83,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.125,
            "durationTicks": 120,
            "midi": 48,
            "name": "C3",
            "ticks": 80160,
            "time": 83.5,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 50,
            "name": "D3",
            "ticks": 80640,
            "time": 84,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 51,
            "name": "D#3",
            "ticks": 81360,
            "time": 84.75,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 51,
            "name": "D#3",
            "ticks": 81600,
            "time": 85,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 50,
            "name": "D3",
            "ticks": 81840,
            "time": 85.25,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.125,
            "durationTicks": 120,
            "midi": 50,
            "name": "D3",
            "ticks": 82080,
            "time": 85.5,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 51,
            "name": "D#3",
            "ticks": 82800,
            "time": 86.25,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 51,
            "name": "D#3",
            "ticks": 83040,
            "time": 86.5,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.15625,
            "durationTicks": 150,
            "midi": 50,
            "name": "D3",
            "ticks": 83280,
            "time": 86.75,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.125,
            "durationTicks": 120,
            "midi": 50,
            "name": "D3",
            "ticks": 83520,
            "time": 87,
            "velocity": 0.7716535433070866
        },
        {
            "duration": 0.21875,
            "durationTicks": 210,
            "midi": 46,
            "name": "A#2",
            "ticks": 84000,
            "time": 87.5,
            "velocity": 0.7716535433070866
        }
    ]
  }

  // handleOnClick = (e) => {
  //   e.preventDefault()
  //
  // }

  render(){
    return(
      <div>
        <BassSynth
          macro7={this.props.macro7}
          macro8={this.props.macro8}
          macro9={this.props.macro9}
          notes={this.state.bassNotes}
          getWaveformArray={this.props.getWaveformArray}
          scale={this.props.scale}
          />
        <KeysSynth
          macro4={this.props.macro4}
          macro5={this.props.macro5}
          macro6={this.props.macro6}
          getWaveformArray={this.props.getWaveformArray}
          scale={this.props.scale}
          />
        <LeadSynth
          macro1={this.props.macro1}
          macro2={this.props.macro2}
          macro3={this.props.macro3}
          getWaveformArray={this.props.getWaveformArray}
          scale={this.props.scale}
          />
      </div>
    )
  }
}
