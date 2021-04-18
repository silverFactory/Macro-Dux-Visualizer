import React, { Component } from 'react'
import * as Tone from 'tone'

export default class LeadSynth extends Component{

  state = {
    playing: false,
    started: false,
    finalGain: new Tone.Gain(1),
    filterGain: new Tone.Gain(1),
    filter: new Tone.Filter(50, "lowpass"),
    spaceEffectsGain: new Tone.Gain(0),
    pingPong: new Tone.PingPongDelay("16n", 0.5),
    reverb: new Tone.Reverb(4),
    modulationEffectsGain: new Tone.Gain(0),
    shift1: new Tone.FrequencyShifter(7),
    shift2: new Tone.FrequencyShifter(5),
    phaser: new Tone.Phaser({
                  	frequency: 20,
                  	octaves: 5,
                  	baseFrequency: 1000
                  }),
    "C3": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscC3: new Tone.FatOscillator("C3", "sawtooth", 30),

    "C#3": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscCSharp3: new Tone.FatOscillator("C#3", "sawtooth", 30),

    "D3": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscD3: new Tone.FatOscillator("D3", "sawtooth", 30),

    "D#3": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscDSharp3: new Tone.FatOscillator("D#3", "sawtooth", 30),

    "E3": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscE3: new Tone.FatOscillator("E3", "sawtooth", 30),

    "F3": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscF3: new Tone.FatOscillator("F3", "sawtooth", 30),

    "F#3": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscFSharp3: new Tone.FatOscillator("F#3", "sawtooth", 30),

    "G3": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscG3: new Tone.FatOscillator("G3", "sawtooth", 30),

    "G#3": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscGSharp3: new Tone.FatOscillator("G#3", "sawtooth", 30),

    "A3": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscA3: new Tone.FatOscillator("A3", "sawtooth", 30),

    "A#3": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscASharp3: new Tone.FatOscillator("A#3", "sawtooth", 30),

    "B3": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscB3: new Tone.FatOscillator("B3", "sawtooth", 30),

    "C4": new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscC4: new Tone.FatOscillator("C4", "sawtooth", 30)


  }

  componentDidMount = () => {
    console.log(Tone.getContext().rawContext)
    //use WebAudioAPI analyser node to fill data array
    this.analyserTime = Tone.getContext().rawContext.createAnalyser()
    this.timeDataArray = new Uint8Array(this.analyserTime.frequencyBinCount)
    this.state.finalGain.connect(this.analyserTime)

    this.state.finalGain.toDestination()
    this.state.filterGain.connect(this.state.finalGain)
    this.state.filter.connect(this.state.filterGain)
    this.state.spaceEffectsGain.connect(this.state.filter)
    this.state.pingPong.connect(this.state.spaceEffectsGain)
    this.state.reverb.connect(this.state.spaceEffectsGain)
    this.state.modulationEffectsGain.connect(this.state.filter)
    this.state.shift1.connect(this.state.modulationEffectsGain)
    this.state.shift2.connect(this.state.modulationEffectsGain)
    this.state.phaser.connect(this.state.modulationEffectsGain)

    this.state["C3"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscC3.connect(this.state["C3"]).start()

    this.state["C#3"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscCSharp3.connect(this.state["C#3"]).start()

    this.state["D3"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscD3.connect(this.state["D3"]).start()

    this.state["D#3"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscDSharp3.connect(this.state["D#3"]).start()

    this.state["E3"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscE3.connect(this.state["E3"]).start()

    this.state["F3"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscF3.connect(this.state["F3"]).start()

    this.state["F#3"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscFSharp3.connect(this.state["F#3"]).start()

    this.state["G3"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscG3.connect(this.state["G3"]).start()

    this.state["G#3"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscGSharp3.connect(this.state["G#3"]).start()

    this.state["A3"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscA3.connect(this.state["A3"]).start()

    this.state["A#3"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscASharp3.connect(this.state["A#3"]).start()

    this.state["B3"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscB3.connect(this.state["B3"]).start()

    this.state["C4"].connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscC4.connect(this.state["C4"]).start()

  }

  tick = () => {
    this.analyserTime.getByteTimeDomainData(this.timeDataArray)
    //WHY SET STATE IF ONLY SENDING IT UP THE CHAIN???
    // this.setState({
    //    audioDataTime: this.timeDataArray
    //  })
    this.props.getWaveformArray("leadSynthWaveform", this.timeDataArray)
    if (this.state.playing === true){
      this.rafId = requestAnimationFrame(this.tick)
    }
  }


  triggerNote = (noteName, noteLength, time) => {

    this.state.[noteName].triggerAttackRelease(noteLength, time)
  }

  handleOnClick = () => {
    if (!this.state.playing){
      this.setState({
        playing: true
      })
      this.rafId = requestAnimationFrame(this.tick)
      this.now = Tone.now()
      this.triggerNote("c3", "8n", this.now)
      this.triggerNote("cSharp3", "8n", this.now + 0.5)
      this.triggerNote("d3", "8n", this.now + 1)
      this.triggerNote("dSharp3", "8n", this.now + 1.5)
      this.triggerNote("e3", "8n", this.now + 2)
      this.triggerNote("f3", "8n", this.now + 2.5)
      this.triggerNote("fSharp3", "8n", this.now + 3)
      this.triggerNote("g3", "8n", this.now + 3.5)
      this.triggerNote("gSharp3", "8n", this.now + 4)
      this.triggerNote("a3", "8n", this.now + 4.5)
      this.triggerNote("aSharp3", "8n", this.now + 5)
      this.triggerNote("b3", "8n", this.now + 5.5)
      //Tone.Transport.bpm.value = 120
      // this.adsr.triggerAttackRelease("8n", this.now)
      // this.osc.frequency.rampTo("C4", 0.0001, this.now + 0.99)
      // this.adsr.triggerAttackRelease("8n", this.now + 1)

    } else {
      this.setState({
        playing: false
      })
    }
  }


  componentDidUpdate = () => {
    if (this.props.playing === true && this.state.started === false){
      this.setState({
        started: true
      })
      this.rafId = requestAnimationFrame(this.tick)
      this.now = Tone.now()
      this.props.notes.forEach(note => {
        this.triggerNote(note.name, note.duration, this.now + note.time)
      })
    }
     this.state.filter.frequency.rampTo(this.props.scale(this.props.macro1, 0, 100, 50, 1000), 1)
    // this.bitCrushGain.gain.rampTo(this.props.scale(this.props.macro1, 0, 100, 0, 1), 1)
    // this.filterGain.gain.rampTo(this.props.scale(this.props.macro1, 0, 100, 1, 0), 1)
     this.state.spaceEffectsGain.gain.rampTo(this.props.scale(this.props.macro2, 0, 100, 0, 1), 1)
     this.state.modulationEffectsGain.gain.rampTo(this.props.scale(this.props.macro3, 0, 100, 0, 1), 1)
  }

  render(){
    return <button onClick={this.handleOnClick}>Lead Synth Trigger</button>
  }
}
