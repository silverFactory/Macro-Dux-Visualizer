import React, { Component } from 'react'
import * as Tone from 'tone'

export default class BassSynth2 extends Component{

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
    })
  }

  componentDidMount = () => {
    this.analyserTime = Tone.getContext().rawContext.createAnalyser()
    this.timeDataArray = new Uint8Array(this.analyserTime.frequencyBinCount)
    this.state.finalGain.connect(this.analyserTime)

    this.state.finalGain.connect(this.state.limiter)
    this.state.limiter.toDestination()

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
  }

  tick = () => {
    this.analyserTime.getByteTimeDomainData(this.timeDataArray)
    this.props.getWaveformArray("bassSynthWaveform", this.timeDataArray)
    if (this.props.playing === true){
      this.rafId = requestAnimationFrame(this.tick)
    }
  }

  componentDidUpdate = () => {
    //conditional keeps notes from scheduling every update
    if (this.props.playing === true && this.state.started === false){
      this.setState({
        started: true
      })
      console.log('triggering')
      this.rafId = requestAnimationFrame(this.tick)
      this.now = Tone.now()
      console.log(this.props.notes)
      this.props.notes.forEach(note => {
        this.state.synth.triggerAttackRelease(note.name,
          parseFloat(note.duration, 10),
          this.now + parseFloat(note.time, 10))
      })
    }
    this.state.filter.frequency.rampTo(this.props.scale(this.props.macro7, 0, 100, 50, 1000), 1)
    this.state.bitCrushGain.gain.rampTo(this.props.scale(this.props.macro7, 0, 100, 0, 0.5), 1)
    this.state.filterGain.gain.rampTo(this.props.scale(this.props.macro7, 0, 100, 1, 0), 1)
    this.state.spaceEffectsGain.gain.rampTo(this.props.scale(this.props.macro8, 0, 100, 0, 0.5), 1)
    this.state.modulationEffectsGain.gain.rampTo(this.props.scale(this.props.macro9, 0, 100, 0, 0.5), 1)
  }

  render(){
    return <div></div>
  }
}
