import React, { Component } from 'react'
import * as Tone from 'tone'

export default class LeadSynth extends Component{

  state = {
    playing: false,
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
    c3: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscC3: new Tone.FatOscillator("C3", "sawtooth", 30),

    cSharp3: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscCSharp3: new Tone.FatOscillator("C#3", "sawtooth", 30),

    d3: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscD3: new Tone.FatOscillator("D3", "sawtooth", 30),

    dSharp3: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscDSharp3: new Tone.FatOscillator("D#3", "sawtooth", 30),

    e3: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscE3: new Tone.FatOscillator("E3", "sawtooth", 30),

    f3: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscF3: new Tone.FatOscillator("F3", "sawtooth", 30),

    fSharp3: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscFSharp3: new Tone.FatOscillator("F#3", "sawtooth", 30),

    g3: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscG3: new Tone.FatOscillator("G3", "sawtooth", 30),

    gSharp3: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscGSharp3: new Tone.FatOscillator("G#3", "sawtooth", 30),

    a3: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscA3: new Tone.FatOscillator("A3", "sawtooth", 30),

    aSharp3: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscASharp3: new Tone.FatOscillator("A#3", "sawtooth", 30),

    b3: new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}),
    oscB3: new Tone.FatOscillator("B3", "sawtooth", 30),


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

    this.state.c3.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscC3.connect(this.state.c3).start()

    this.state.cSharp3.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscCSharp3.connect(this.state.cSharp3).start()

    this.state.d3.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscD3.connect(this.state.d3).start()

    this.state.dSharp3.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscDSharp3.connect(this.state.dSharp3).start()

    this.state.e3.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscE3.connect(this.state.e3).start()

    this.state.f3.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscF3.connect(this.state.f3).start()

    this.state.fSharp3.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscFSharp3.connect(this.state.fSharp3).start()

    this.state.g3.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscG3.connect(this.state.g3).start()

    this.state.gSharp3.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscGSharp3.connect(this.state.gSharp3).start()

    this.state.a3.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscA3.connect(this.state.a3).start()

    this.state.aSharp3.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscASharp3.connect(this.state.aSharp3).start()

    this.state.b3.connect(this.state.pingPong).connect(this.state.reverb).connect(this.state.phaser).connect(this.state.filter)
    this.state.oscB3.connect(this.state.b3).start()

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
