import React, { Component } from 'react'
import * as Tone from 'tone'

export default class KeysSynth extends Component{

  state = {
    playing: false,
    started: false,
    finalGain: new Tone.Gain(0.5),
    limiter: new Tone.Limiter(-10),
    filterGain: new Tone.Gain(0.8),
    filter: new Tone.Filter(50, "lowpass"),
    spaceEffectsGain: new Tone.Gain(0),
    pingPong: new Tone.PingPongDelay("16n", 0.5),
    reverb: new Tone.Reverb(4),
    modulationEffectsGain: new Tone.Gain(0),
    phaser: new Tone.Phaser({
                  	frequency: 1,
                  	octaves: 1,
                  	baseFrequency: 500
                  }),
    synth: new Tone.PolySynth(Tone.Synth, {
      envelope: {
        attack: 0.02,
        decay: 0.1,
        sustain: 0.9,
        release: 0.1
      }
    })
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

    this.state.spaceEffectsGain.connect(this.state.finalGain)
    this.state.pingPong.connect(this.state.spaceEffectsGain)
    this.state.reverb.connect(this.state.spaceEffectsGain)

    this.state.modulationEffectsGain.connect(this.state.finalGain)
    this.state.phaser.connect(this.state.modulationEffectsGain)


    this.state.synth.connect(this.state.bitCrush)
                    .connect(this.state.filter)
                    .connect(this.state.pingPong)
                    .connect(this.state.reverb)
                    .connect(this.state.phaser)


  }


  tick = () => {
    this.analyserTime.getByteTimeDomainData(this.timeDataArray)
    this.props.getWaveformArray("keysSynthWaveform", this.timeDataArray)
    if (this.props.playing === true){
      this.rafId = requestAnimationFrame(this.tick)
    }
  }


  handleOnClick = () => {
    if (!this.state.playing){
      this.setState({
        playing: true
      })
      this.rafId = requestAnimationFrame(this.tick)
      this.now = Tone.now()
      Tone.Transport.bpm.value = 120
      this.state.synth.triggerAttackRelease("A4", "8n", this.now)
      this.state.synth.triggerAttackRelease("C5", "8n", this.now)
      this.state.synth.triggerAttackRelease("E5", "8n", this.now)
      this.state.synth.triggerAttackRelease("A4", "8n", this.now + 0.675)
      this.state.synth.triggerAttackRelease("C5", "8n", this.now + 0.675)
      this.state.synth.triggerAttackRelease("E5", "8n", this.now + 0.675)
      this.state.synth.triggerAttackRelease("A4", "8n", this.now + 1)
      this.state.synth.triggerAttackRelease("C5", "8n", this.now + 1)
      this.state.synth.triggerAttackRelease("E5", "8n", this.now + 1)
      this.state.synth.triggerAttackRelease("A4", "8n", this.now + 1.675)
      this.state.synth.triggerAttackRelease("C5", "8n", this.now + 1.675)
      this.state.synth.triggerAttackRelease("E5", "8n", this.now + 1.675)
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
        this.state.synth.triggerAttackRelease(note.name, note.duration, this.now + note.time)
      })
    }
    this.state.filter.frequency.rampTo(this.props.scale(this.props.macro4, 0, 100, 50, 1000), 1)
    this.state.bitCrushGain.gain.rampTo(this.props.scale(this.props.macro4, 0, 100, 0, 0.5), 1)
    this.state.filterGain.gain.rampTo(this.props.scale(this.props.macro4, 0, 100, 0.8, 0), 1)
    this.state.spaceEffectsGain.gain.rampTo(this.props.scale(this.props.macro5, 0, 100, 0, 0.5), 1)
    this.state.modulationEffectsGain.gain.rampTo(this.props.scale(this.props.macro6, 0, 100, 0, 0.5), 1)
  }


  render(){
    return <button onClick={this.handleOnClick}>Keys Synth Trigger</button>
  }
}
