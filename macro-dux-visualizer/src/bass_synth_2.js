import React, { Component } from 'react'
import * as Tone from 'tone'

export default class BassSynth2 extends Component{

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
    //bitCrush gain increases as cutoff increases to accentuate changes
    //separate signal flow KEEP THAT WAY
    bitCrushGain: new Tone.Gain(0),
    bitCrush: new Tone.BitCrusher(6),
    synth: new Tone.PolySynth(Tone.Synth, {
      envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.03,
        release: 1
      }
    }),
    analyserTime: Tone.getContext().rawContext.createAnalyser(),
    timeDataArray: new Uint8Array(0)

  }

  componentDidMount = () => {
    this.state.finalGain.toDestination()
    this.state.filterGain.connect(this.state.finalGain)
    this.state.filter.connect(this.state.filterGain)
    this.state.spaceEffectsGain.connect(this.state.finalGain)
    this.state.pingPong.connect(this.state.spaceEffectsGain)
    this.state.reverb.connect(this.state.spaceEffectsGain)
    this.state.modulationEffectsGain.connect(this.state.finalGain)
    this.state.shift1.connect(this.state.modulationEffectsGain)
    this.state.shift2.connect(this.state.modulationEffectsGain)
    this.state.phaser.connect(this.state.modulationEffectsGain)
    this.state.bitCrushGain.connect(this.state.finalGain)
    this.state.bitCrush.connect(this.state.bitCrushGain)
    this.state.synth.connect(this.state.bitCrush)
    .connect(this.state.filter)
    .connect(this.state.pingPong)
    .connect(this.state.reverb)
    .connect(this.state.phaser)
    .connect(this.state.shift1)
    .connect(this.state.shift2)
    //console.log(Tone.getContext().rawContext)
    //use WebAudioAPI analyser node to fill data array
    this.setState({
      timeDataArray: new Uint8Array(this.state.analyserTime.frequencyBinCount)
    })
    this.state.finalGain.connect(this.state.analyserTime)
  }

  tick = () => {
    this.state.analyserTime.getByteTimeDomainData(this.state.timeDataArray)
    this.props.getWaveformArray("bassSynthWaveform", this.state.timeDataArray)
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
      this.state.synth.triggerAttackRelease("A2", "8n", this.now)
      this.state.synth.triggerAttackRelease("A2", "8n", this.now + 0.25)
      this.state.synth.triggerAttackRelease("A2", "8n", this.now + 1)
      this.state.synth.triggerAttackRelease("C3", "8n", this.now + 1.25)
      this.state.synth.triggerAttackRelease("A2", "8n", this.now + 2)
      this.state.synth.triggerAttackRelease("A2", "8n", this.now + 2.25)
      this.state.synth.triggerAttackRelease("A2", "8n", this.now + 3)
      this.state.synth.triggerAttackRelease("C3", "8n", this.now + 3.25)
      this.state.synth.triggerAttackRelease("A2", "8n", this.now + 4)
      this.state.synth.triggerAttackRelease("A2", "8n", this.now + 4.25)
      this.state.synth.triggerAttackRelease("A2", "8n", this.now + 5)
      this.state.synth.triggerAttackRelease("C3", "8n", this.now + 5.25)
    } else {
      this.setState({
        playing: false
      })
    }
  }


  componentDidUpdate = () => {
    this.state.filter.frequency.rampTo(this.props.scale(this.props.macro7, 0, 100, 50, 1000), 1)
    this.state.bitCrushGain.gain.rampTo(this.props.scale(this.props.macro7, 0, 100, 0, 1), 1)
    this.state.filterGain.gain.rampTo(this.props.scale(this.props.macro7, 0, 100, 1, 0), 1)
    this.state.spaceEffectsGain.gain.rampTo(this.props.scale(this.props.macro8, 0, 100, 0, 1), 1)
    this.state.modulationEffectsGain.gain.rampTo(this.props.scale(this.props.macro9, 0, 100, 0, 1), 1)
  }

  render(){
    return <button onClick={this.handleOnClick}>Synth Trigger</button>
  }
}
