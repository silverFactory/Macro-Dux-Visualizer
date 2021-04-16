import React, { Component } from 'react'
import * as Tone from 'tone'

export default class LeadSynth extends Component{

  constructor(props){
    super(props)
    this.finalGain = new Tone.Gain(1)
    this.finalGain.toDestination()

    this.analyser = new Tone.Analyser("waveform", 2048)
    this.finalGain.connect(this.analyser)

    this.filterGain = new Tone.Gain(1).connect(this.finalGain)
    this.filter = new Tone.Filter(50, "lowpass").connect(this.filterGain)

    this.spaceEffectsGain = new Tone.Gain(0).connect(this.finalGain)
    this.pingPong = new Tone.PingPongDelay("16n", 0.5).connect(this.spaceEffectsGain)
    this.reverb = new Tone.Reverb(4).connect(this.spaceEffectsGain)

    this.modulationEffectsGain = new Tone.Gain(0).connect(this.finalGain)
    this.shift1 = new Tone.FrequencyShifter(7).connect(this.modulationEffectsGain)
    this.shift2 = new Tone.FrequencyShifter(5).connect(this.modulationEffectsGain)
    this.phaser = new Tone.Phaser({
                  	frequency: 20,
                  	octaves: 5,
                  	baseFrequency: 1000
                  }).connect(this.modulationEffectsGain)



    this.c3 = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).connect(this.filter)
    this.oscC3 = new Tone.FatOscillator("C3", "sawtooth", 30).connect(this.c3).start()

    this.cSharp3 = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).connect(this.filter)
    this.oscCSharp3 = new Tone.FatOscillator("C#3", "sawtooth", 30).connect(this.cSharp3).start()

    this.d3 = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).connect(this.filter)
    this.oscD3 = new Tone.FatOscillator("D3", "sawtooth", 30).connect(this.d3).start()

    this.dSharp3 = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).connect(this.filter)
    this.oscDSharp3 = new Tone.FatOscillator("D#3", "sawtooth", 30).connect(this.dSharp3).start()

    this.e3 = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).connect(this.filter)
    this.oscE3 = new Tone.FatOscillator("E3", "sawtooth", 30).connect(this.e3).start()

    this.f3 = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).connect(this.filter)
    this.oscF3 = new Tone.FatOscillator("F3", "sawtooth", 30).connect(this.f3).start()

    this.fSharp3 = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).connect(this.filter)
    this.oscFSharp3 = new Tone.FatOscillator("F#3", "sawtooth", 30).connect(this.fSharp3).start()

    this.g3 = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).connect(this.filter)
    this.oscG3 = new Tone.FatOscillator("G3", "sawtooth", 30).connect(this.g3).start()

    this.gSharp3 = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).connect(this.filter)
    this.oscGSharp3 = new Tone.FatOscillator("G#3", "sawtooth", 30).connect(this.gSharp3).start()

    this.a3 = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).connect(this.filter)
    this.oscA3 = new Tone.FatOscillator("A3", "sawtooth", 30).connect(this.a3).start()

    this.aSharp3 = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).connect(this.filter)
    this.oscASharp3 = new Tone.FatOscillator("A#3", "sawtooth", 30).connect(this.aSharp3).start()

    this.b3 = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).connect(this.filter)
    this.oscB3 = new Tone.FatOscillator("B3", "sawtooth", 30).connect(this.b3).start()

    // this.c4 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscC4 = new Tone.FatOscillator("C4", "sawtooth", 30).connect(this.c4).start()
    //
    // this.cSharp4 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscCSharp4 = new Tone.FatOscillator("C#4", "sawtooth", 30).connect(this.cSharp4).start()
    //
    // this.d4 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscD4 = new Tone.FatOscillator("D4", "sawtooth", 30).connect(this.d4).start()
    //
    // this.dSharp4 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscDSharp4 = new Tone.FatOscillator("D#4", "sawtooth", 30).connect(this.dSharp4).start()
    //
    // this.e4 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscE4 = new Tone.FatOscillator("E4", "sawtooth", 30).connect(this.e4).start()
    //
    // this.f4 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscF4 = new Tone.FatOscillator("F4", "sawtooth", 30).connect(this.f4).start()
    //
    // this.fSharp4 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscFSharp4 = new Tone.FatOscillator("F#4", "sawtooth", 30).connect(this.fSharp4).start()
    //
    // this.g4 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscG4 = new Tone.FatOscillator("G4", "sawtooth", 30).connect(this.g4).start()
    //
    // this.gSharp4 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscGSharp4 = new Tone.FatOscillator("G#4", "sawtooth", 30).connect(this.gSharp4).start()
    //
    // this.a4 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscA4 = new Tone.FatOscillator("A4", "sawtooth", 30).connect(this.a4).start()
    //
    // this.aSharp4 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscASharp4 = new Tone.FatOscillator("A#4", "sawtooth", 30).connect(this.aSharp4).start()
    //
    // this.b4 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscB4 = new Tone.FatOscillator("B4", "sawtooth", 30).connect(this.b4).start()
    //
    // this.c5 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscC5 = new Tone.FatOscillator("C5", "sawtooth", 30).connect(this.c5).start()
    //
    // this.cSharp5 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscCSharp5 = new Tone.FatOscillator("C#5", "sawtooth", 30).connect(this.cSharp5).start()
    //
    // this.d5 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscD5 = new Tone.FatOscillator("D5", "sawtooth", 30).connect(this.d5).start()
    //
    // this.dSharp5 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscDSharp5 = new Tone.FatOscillator("D#5", "sawtooth", 30).connect(this.dSharp5).start()
    //
    // this.e5 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscE5 = new Tone.FatOscillator("E5", "sawtooth", 30).connect(this.e5).start()
    //
    // this.f5 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscF5 = new Tone.FatOscillator("F5", "sawtooth", 30).connect(this.f5).start()
    //
    // this.fSharp5 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscFSharp5 = new Tone.FatOscillator("F#5", "sawtooth", 30).connect(this.fSharp5).start()
    //
    // this.g5 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscG5 = new Tone.FatOscillator("G5", "sawtooth", 30).connect(this.g5).start()
    //
    // this.gSharp5 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscGSharp5 = new Tone.FatOscillator("G#5", "sawtooth", 30).connect(this.gSharp5).start()
    //
    // this.a5 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscA5 = new Tone.FatOscillator("A5", "sawtooth", 30).connect(this.a5).start()
    //
    // this.aSharp5 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscASharp5 = new Tone.FatOscillator("A#5", "sawtooth", 30).connect(this.aSharp5).start()
    //
    // this.b5 = new Tone.AmplitudeEnvelope({
  	// 	attack: 0.1,
  	// 	decay: 0.2,
  	// 	sustain: 1.0,
  	// 	release: 0.8
  	// }).connect(this.filter)
    // this.oscB5 = new Tone.FatOscillator("B5", "sawtooth", 30).connect(this.b5).start()




  }

  state = {
    playing: false,
    audioDataTime: new Uint8Array(0)
  }

  componentDidMount = () => {
    console.log(Tone.getContext().rawContext)
    //use WebAudioAPI analyser node to fill data array
    this.analyserTime = Tone.getContext().rawContext.createAnalyser()
    this.timeDataArray = new Uint8Array(this.analyserTime.frequencyBinCount)
    this.finalGain.connect(this.analyserTime)
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
    this.[noteName].triggerAttackRelease(noteLength, time)
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
     this.filter.frequency.rampTo(this.props.scale(this.props.macro1, 0, 100, 50, 1000), 1)
    // this.bitCrushGain.gain.rampTo(this.props.scale(this.props.macro1, 0, 100, 0, 1), 1)
    // this.filterGain.gain.rampTo(this.props.scale(this.props.macro1, 0, 100, 1, 0), 1)
    // this.spaceEffectsGain.gain.rampTo(this.props.scale(this.props.macro2, 0, 100, 0, 1), 1)
    // this.modulationEffectsGain.gain.rampTo(this.props.scale(this.props.macro3, 0, 100, 0, 1), 1)
  }

  render(){
    return <button onClick={this.handleOnClick}>Lead Synth Trigger</button>
  }
}
