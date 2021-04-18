import React, { Component} from 'react'
import BassSynth from './bass_synth_2'
import KeysSynth from './keys_synth'
import LeadSynth from './lead_synth'

export default class SynthsContainer extends Component {

  state = {
    playing: false,
    melodyNotes: [
    {
        "duration": 0.24895833333333428,
        "durationTicks": 239,
        "midi": 84,
        "name": "C6",
        "ticks": 61440,
        "time": 64,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.203125,
        "durationTicks": 195,
        "midi": 72,
        "name": "C5",
        "ticks": 61680,
        "time": 64.25,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.22499999999999432,
        "durationTicks": 216,
        "midi": 79,
        "name": "G5",
        "ticks": 61920,
        "time": 64.5,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.2697916666666629,
        "durationTicks": 259,
        "midi": 79,
        "name": "G5",
        "ticks": 62400,
        "time": 65,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.29375000000000284,
        "durationTicks": 282,
        "midi": 79,
        "name": "G5",
        "ticks": 62880,
        "time": 65.5,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.24791666666666856,
        "durationTicks": 238,
        "midi": 79,
        "name": "G5",
        "ticks": 63360,
        "time": 66,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.2718749999999943,
        "durationTicks": 261,
        "midi": 72,
        "name": "C5",
        "ticks": 63600,
        "time": 66.25,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.24791666666666856,
        "durationTicks": 238,
        "midi": 79,
        "name": "G5",
        "ticks": 63840,
        "time": 66.5,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.22499999999999432,
        "durationTicks": 216,
        "midi": 74,
        "name": "D5",
        "ticks": 64080,
        "time": 66.75,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.25,
        "durationTicks": 240,
        "midi": 79,
        "name": "G5",
        "ticks": 64320,
        "time": 67,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.24791666666666856,
        "durationTicks": 238,
        "midi": 75,
        "name": "D#5",
        "ticks": 64560,
        "time": 67.25,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.2697916666666629,
        "durationTicks": 259,
        "midi": 79,
        "name": "G5",
        "ticks": 64800,
        "time": 67.5,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.26874999999999716,
        "durationTicks": 258,
        "midi": 74,
        "name": "D5",
        "ticks": 65040,
        "time": 67.75,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.24791666666666856,
        "durationTicks": 238,
        "midi": 84,
        "name": "C6",
        "ticks": 65280,
        "time": 68,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.2697916666666629,
        "durationTicks": 259,
        "midi": 72,
        "name": "C5",
        "ticks": 65520,
        "time": 68.25,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.22499999999999432,
        "durationTicks": 216,
        "midi": 75,
        "name": "D#5",
        "ticks": 65760,
        "time": 68.5,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.24791666666666856,
        "durationTicks": 238,
        "midi": 75,
        "name": "D#5",
        "ticks": 66240,
        "time": 69,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.2697916666666629,
        "durationTicks": 259,
        "midi": 75,
        "name": "D#5",
        "ticks": 66720,
        "time": 69.5,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.1354166666666714,
        "durationTicks": 130,
        "midi": 74,
        "name": "D5",
        "ticks": 66960,
        "time": 69.75,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.24791666666666856,
        "durationTicks": 238,
        "midi": 75,
        "name": "D#5",
        "ticks": 67200,
        "time": 70,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.2697916666666629,
        "durationTicks": 259,
        "midi": 75,
        "name": "D#5",
        "ticks": 67680,
        "time": 70.5,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.2927083333333371,
        "durationTicks": 281,
        "midi": 82,
        "name": "A#5",
        "ticks": 68160,
        "time": 71,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.24895833333333428,
        "durationTicks": 239,
        "midi": 82,
        "name": "A#5",
        "ticks": 68640,
        "time": 71.5,
        "velocity": 0.7322834645669292
    },
    {
        "duration": 0.15833333333333144,
        "durationTicks": 152,
        "midi": 84,
        "name": "C6",
        "ticks": 68880,
        "time": 71.75,
        "velocity": 0.7322834645669292
    }
],
    harmonyNotes: [
    {
        "duration": 2.5666666666666664,
        "durationTicks": 2464,
        "midi": 60,
        "name": "C4",
        "ticks": 1920,
        "time": 2,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 2.5427083333333336,
        "durationTicks": 2441,
        "midi": 63,
        "name": "D#4",
        "ticks": 1920,
        "time": 2,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 2.0010416666666675,
        "durationTicks": 1921,
        "midi": 62,
        "name": "D4",
        "ticks": 5760,
        "time": 6,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 2.0041666666666664,
        "durationTicks": 1924,
        "midi": 65,
        "name": "F4",
        "ticks": 5760,
        "time": 6,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 2.451041666666667,
        "durationTicks": 2353,
        "midi": 60,
        "name": "C4",
        "ticks": 9600,
        "time": 10,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 2.4520833333333325,
        "durationTicks": 2354,
        "midi": 63,
        "name": "D#4",
        "ticks": 9600,
        "time": 10,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 1.8739583333333325,
        "durationTicks": 1799,
        "midi": 65,
        "name": "F4",
        "ticks": 13440,
        "time": 14,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 1.875,
        "durationTicks": 1800,
        "midi": 70,
        "name": "A#4",
        "ticks": 13440,
        "time": 14,
        "velocity": 0.7716535433070866
    }
],
    bassNotes: [
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 50,
        "name": "D3",
        "ticks": 720,
        "time": 0.75,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 50,
        "name": "D3",
        "ticks": 960,
        "time": 1,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 48,
        "name": "C3",
        "ticks": 1200,
        "time": 1.25,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.125,
        "durationTicks": 120,
        "midi": 48,
        "name": "C3",
        "ticks": 1440,
        "time": 1.5,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 50,
        "name": "D3",
        "ticks": 2160,
        "time": 2.25,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 50,
        "name": "D3",
        "ticks": 2400,
        "time": 2.5,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 48,
        "name": "C3",
        "ticks": 2640,
        "time": 2.75,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.125,
        "durationTicks": 120,
        "midi": 48,
        "name": "C3",
        "ticks": 2880,
        "time": 3,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.125,
        "durationTicks": 120,
        "midi": 48,
        "name": "C3",
        "ticks": 3360,
        "time": 3.5,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 50,
        "name": "D3",
        "ticks": 3840,
        "time": 4,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 51,
        "name": "D#3",
        "ticks": 4560,
        "time": 4.75,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 51,
        "name": "D#3",
        "ticks": 4800,
        "time": 5,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 50,
        "name": "D3",
        "ticks": 5040,
        "time": 5.25,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.125,
        "durationTicks": 120,
        "midi": 50,
        "name": "D3",
        "ticks": 5280,
        "time": 5.5,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 51,
        "name": "D#3",
        "ticks": 6000,
        "time": 6.25,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 51,
        "name": "D#3",
        "ticks": 6240,
        "time": 6.5,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.15625,
        "durationTicks": 150,
        "midi": 50,
        "name": "D3",
        "ticks": 6480,
        "time": 6.75,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.125,
        "durationTicks": 120,
        "midi": 50,
        "name": "D3",
        "ticks": 6720,
        "time": 7,
        "velocity": 0.7716535433070866
    },
    {
        "duration": 0.21875,
        "durationTicks": 210,
        "midi": 46,
        "name": "A#2",
        "ticks": 7200,
        "time": 7.5,
        "velocity": 0.7716535433070866
    }
]
  }

  // handleOnClick = (e) => {
  //   e.preventDefault()
  //
  // }
  startSong = () => {
    this.setState({
      playing: true
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.startSong}>Start Demo Song</button>
        <BassSynth
          macro7={this.props.macro7}
          macro8={this.props.macro8}
          macro9={this.props.macro9}
          notes={this.state.bassNotes}
          playing={this.state.playing}
          getWaveformArray={this.props.getWaveformArray}
          scale={this.props.scale}
          />
        <KeysSynth
          macro4={this.props.macro4}
          macro5={this.props.macro5}
          macro6={this.props.macro6}
          notes={this.state.harmonyNotes}
          playing={this.state.playing}
          getWaveformArray={this.props.getWaveformArray}
          scale={this.props.scale}
          />
        <LeadSynth
          macro1={this.props.macro1}
          macro2={this.props.macro2}
          macro3={this.props.macro3}
          notes={this.state.melodyNotes}
          playing={this.state.playing}
          getWaveformArray={this.props.getWaveformArray}
          scale={this.props.scale}
          />
      </div>
    )
  }
}
