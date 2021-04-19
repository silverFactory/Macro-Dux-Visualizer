import React, { Component } from 'react'
import * as Tone from 'tone'

export default class LeadSynth2 extends Component{

  state = {
    playing: false,
    started: false,
    finalGain: new Tone.Gain(0.5),
    filterGain: new Tone.Gain(1),
    filter: new Tone.Filter(50, "lowpass"),
    spaceEffectsGain: new Tone.Gain(0),
    pingPong: new Tone.PingPongDelay("16n", 0.5),
    reverb: new Tone.Reverb(4),
    modulationEffectsGain: new Tone.Gain(0),
    phaser: new Tone.Phaser({
                  	frequency: 20,
                  	octaves: 5,
                  	baseFrequency: 1000
                  }),
    envelope: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    osc: new Tone.FatOscillator("C3", "sawtooth", 30)

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

    this.state.phaser.connect(this.state.modulationEffectsGain)

    this.state.envelope.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.osc.connect(this.state.envelope).start()

  }

  tick = () => {
    this.analyserTime.getByteTimeDomainData(this.timeDataArray)
    this.props.getWaveformArray("leadSynthWaveform", this.timeDataArray)
    if (this.props.playing === true){
      this.rafId = requestAnimationFrame(this.tick)
    }
  }


  triggerNote = (noteName, noteLength, time) => {
    this.changeFrequency(noteName, time)
    //console.log(this.state.osc.frequency)
    this.state.envelope.triggerAttackRelease(noteLength, time)
  }

  changeFrequency = (noteName, time) => {
    //console.log("before switch")
    switch (noteName) {
      case "C3":
      console.log("shifting C3")
        this.state.osc.frequency.rampTo("C3", 0, time)
        break;
      case "C#3":
      console.log("shifting C#3")
        this.state.osc.frequency.rampTo("C#3", 0.1, time)
        break;
      case "D3":
      console.log("shifting D3")
        this.state.osc.frequency.rampTo("D3", 0.1, time)
        break;
      case "D#3":
      console.log("shifting D#3")
        this.state.osc.frequency.rampTo("D#3", 0.1, time)
        break;
      case "E3":
      console.log("shifting E3")
        this.state.osc.frequency.rampTo("E3", 0.1, time)
        break;
      case "F3":
      console.log("shifting F3")
        this.state.osc.frequency.rampTo("F3", 0.1, time)
        break;
      case "F#3":
      console.log("shifting F#3")
        this.state.osc.frequency.rampTo("F#3", 0.1, time)
        break;
      case "G3":
      console.log("shifting G3")
        this.state.osc.frequency.rampTo("G3", 0.1, time)
        break;
      case "G#3":
        this.state.osc.frequency.rampTo("G#3", 0.1, time)
        break;
      case "A3":
        this.state.osc.frequency.rampTo("A3", 0.1, time)
        break;
      case "A#3":
        this.state.osc.frequency.rampTo("A#3", 0.1, time)
        break;
      case "B3":
        this.state.osc.frequency.rampTo("B3", 0.1, time)
        break;
      case "C4":
        this.state.osc.frequency.rampTo("C4", 0, time)
        break;
      case "C#4":
        this.state.osc.frequency.rampTo("C#4", 0.1, time)
        break;
      case "D4":
        this.state.osc.frequency.rampTo("D4", 0.1, time)
        break;
      case "D#4":
        this.state.osc.frequency.rampTo("D#4", 0.1, time)
        break;
      case "E4":
        this.state.osc.frequency.rampTo("E4", 0.1, time)
        break;
      case "F4":
        this.state.osc.frequency.rampTo("F4", 0.1, time)
        break;
      case "F#4":
        this.state.osc.frequency.rampTo("F#4", 0.1, time)
        break;
      case "G4":
        this.state.osc.frequency.rampTo("G4", 0.1, time)
        break;
      case "G#4":
        this.state.osc.frequency.rampTo("G#4", 0.1, time)
        break;
      case "A4":
        this.state.osc.frequency.rampTo("A4", 0.1, time)
        break;
      case "A#4":
        this.state.osc.frequency.rampTo("A#4", 0.1, time)
        break;
      case "B4":
        this.state.osc.frequency.rampTo("B4", 0.1, time)
        break;
      case "C5":
        this.state.osc.frequency.rampTo("C5", 0, time)
        break;
      case "C#5":
        this.state.osc.frequency.rampTo("C#5", 0.1, time)
        break;
      case "D5":
        this.state.osc.frequency.rampTo("D5", 0.1, time)
        break;
      case "D#5":
        this.state.osc.frequency.rampTo("D#5", 0.1, time)
        break;
      case "E5":
        this.state.osc.frequency.rampTo("E5", 0.1, time)
        break;
      case "F5":
        this.state.osc.frequency.rampTo("F5", 0.1, time)
        break;
      case "F#5":
        this.state.osc.frequency.rampTo("F#5", 0.1, time)
        break;
      case "G5":
        this.state.osc.frequency.rampTo("G5", 0.1, time)
        break;
      case "G#5":
        this.state.osc.frequency.rampTo("G#5", 0.1, time)
        break;
      case "A5":
        this.state.osc.frequency.rampTo("A5", 0.1, time)
        break;
      case "A#5":
        this.state.osc.frequency.rampTo("A#5", 0.1, time)
        break;
      case "B5":
        this.state.osc.frequency.rampTo("B5", 0.1, time)
        break;


      default:
        this.state.osc.frequency.rampTo("C3", 0.1, time)
    }
  }

  handleOnClick = () => {
    if (!this.state.playing){
      this.setState({
        playing: true
      })
      this.rafId = requestAnimationFrame(this.tick)
      this.now = Tone.now()
      // this.triggerNote("C3", "8n", this.now)
      // this.triggerNote("D3", "8n", this.now + 1)
      this.triggerNote("C3", "8n", this.now)
      this.triggerNote("C#3", "8n", this.now + 0.5)
      this.triggerNote("D3", "8n", this.now + 1)
      this.triggerNote("D#3", "8n", this.now + 1.5)
      this.triggerNote("E3", "8n", this.now + 2)
      this.triggerNote("F3", "8n", this.now + 2.5)
      this.triggerNote("F#3", "8n", this.now + 3)
      this.triggerNote("G3", "8n", this.now + 3.5)
      this.triggerNote("G#3", "8n", this.now + 4)
      this.triggerNote("A3", "8n", this.now + 4.5)
      this.triggerNote("A#3", "8n", this.now + 5)
      this.triggerNote("B3", "8n", this.now + 5.5)

    } else {
      this.setState({
        playing: false
      })
    }
  }


  componentDidUpdate = () => {
    if (this.props.playing === true && this.state.
      started === false){
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
