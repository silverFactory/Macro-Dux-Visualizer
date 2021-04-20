import React, { Component } from 'react'
import * as Tone from 'tone'

export default class LeadSynth2 extends Component{

  state = {
    started: false,
    finalGain: new Tone.Gain(0.5),
    limiter: new Tone.Limiter(-10),
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

    this.state.finalGain.connect(this.state.limiter)
    this.state.limiter.toDestination()


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
    this.state.envelope.triggerAttackRelease(noteLength, time)
  }

  changeFrequency = (noteName, time) => {
    switch (noteName) {
      case "C3":
        this.state.osc.frequency.rampTo("C3", 0, time)
        break;
      case "C#3":
        this.state.osc.frequency.rampTo("C#3", 0.1, time)
        break;
      case "D3":
        this.state.osc.frequency.rampTo("D3", 0.1, time)
        break;
      case "D#3":
        this.state.osc.frequency.rampTo("D#3", 0.1, time)
        break;
      case "E3":
        this.state.osc.frequency.rampTo("E3", 0.1, time)
        break;
      case "F3":
        this.state.osc.frequency.rampTo("F3", 0.1, time)
        break;
      case "F#3":
        this.state.osc.frequency.rampTo("F#3", 0.1, time)
        break;
      case "G3":
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

  componentDidUpdate = () => {
    //conditional keeps notes from scheduling every update
    if (this.props.playing === true && this.state.
      started === false){
      this.setState({
        started: true
      })
      this.rafId = requestAnimationFrame(this.tick)
      this.now = Tone.now()
      //console.log(this.props.notes)
      this.props.notes.forEach(note => {
        this.triggerNote(note.name,
          parseFloat(note.duration, 10),
          this.now + parseFloat(note.time, 10))
      })
    }
     this.state.filter.frequency.rampTo(this.props.scale(this.props.macro1, 0, 100, 50, 1000), 1)
    // this.bitCrushGain.gain.rampTo(this.props.scale(this.props.macro1, 0, 100, 0, 1), 1)
    // this.filterGain.gain.rampTo(this.props.scale(this.props.macro1, 0, 100, 1, 0), 1)
     this.state.spaceEffectsGain.gain.rampTo(this.props.scale(this.props.macro2, 0, 100, 0, 0.5), 1)
     this.state.modulationEffectsGain.gain.rampTo(this.props.scale(this.props.macro3, 0, 100, 0, 0.5), 1)
  }

  render(){
    return <div></div>
  }
}
