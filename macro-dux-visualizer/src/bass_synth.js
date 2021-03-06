import React, { Component } from 'react'
import * as Tone from 'tone'

export default class BassSynth extends Component{

  constructor(props){
    super(props)
    this.finalGain = new Tone.Gain(1)
    this.finalGain.toDestination()
    // this.fft = new Tone.FFT(2048)
    // this.finalGain.connect(this.fft)
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

    //bitCrush gain increases as cutoff increases to accentuate changes
    //separate signal flow KEEP THAT WAY
    this.bitCrushGain = new Tone.Gain(0).connect(this.finalGain)
    this.bitCrush = new Tone.BitCrusher(6).connect(this.bitCrushGain)
    this.synth = new Tone.PolySynth(Tone.Synth, {
      envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.03,
        release: 1
      }
    })
    .connect(this.bitCrush)
    .connect(this.filter)
    .connect(this.pingPong)
    .connect(this.reverb)
    .connect(this.phaser)
    .connect(this.shift1)
    .connect(this.shift2)
  }

  state = {
    playing: false
  }

  componentDidMount = () => {
    console.log(Tone.getContext().rawContext)
    //use WebAudioAPI analyser node to fill data array
    this.analyserTime = Tone.getContext().rawContext.createAnalyser()
    this.timeDataArray = new Uint8Array(this.analyserTime.frequencyBinCount)
    this.finalGain.connect(this.analyserTime)

    //connect analyser node in player to this audio context

  }

  tick = () => {
    this.analyserTime.getByteTimeDomainData(this.timeDataArray)
    this.props.getWaveformArray("bassSynthWaveform", this.timeDataArray)
    if (this.state.playing === true){
      this.rafId = requestAnimationFrame(this.tick)
    }
  }


  handleOnClick = () => {
    if (!this.state.playing){
      //console.log(this.fft)
      this.setState({
        playing: true
      })
      this.rafId = requestAnimationFrame(this.tick)
      this.now = Tone.now()
      Tone.Transport.bpm.value = 120
      this.synth.triggerAttackRelease("A2", "8n", this.now)
      this.synth.triggerAttackRelease("A2", "8n", this.now + 0.25)
      this.synth.triggerAttackRelease("A2", "8n", this.now + 1)
      this.synth.triggerAttackRelease("C3", "8n", this.now + 1.25)
      this.synth.triggerAttackRelease("A2", "8n", this.now + 2)
      this.synth.triggerAttackRelease("A2", "8n", this.now + 2.25)
      this.synth.triggerAttackRelease("A2", "8n", this.now + 3)
      this.synth.triggerAttackRelease("C3", "8n", this.now + 3.25)
      this.synth.triggerAttackRelease("A2", "8n", this.now + 4)
      this.synth.triggerAttackRelease("A2", "8n", this.now + 4.25)
      this.synth.triggerAttackRelease("A2", "8n", this.now + 5)
      this.synth.triggerAttackRelease("C3", "8n", this.now + 5.25)
    } else {
      this.setState({
        playing: false
      })
    }
  }


  componentDidUpdate = () => {
    this.filter.frequency.rampTo(this.props.scale(this.props.macro7, 0, 100, 50, 1000), 1)
    this.bitCrushGain.gain.rampTo(this.props.scale(this.props.macro7, 0, 100, 0, 1), 1)
    this.filterGain.gain.rampTo(this.props.scale(this.props.macro7, 0, 100, 1, 0), 1)
    this.spaceEffectsGain.gain.rampTo(this.props.scale(this.props.macro8, 0, 100, 0, 1), 1)
    this.modulationEffectsGain.gain.rampTo(this.props.scale(this.props.macro9, 0, 100, 0, 1), 1)
  }

  render(){
    return <button onClick={this.handleOnClick}>Synth Trigger</button>
  }
}
