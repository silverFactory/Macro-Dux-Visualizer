import React, { Component } from 'react'
import * as Tone from 'tone'

export default class TestSynth2 extends Component{

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

    //bitCrush gain increases as cutoff increases to accentuate changes
    //separate signal flow KEEP THAT WAY
    // this.bitCrushGain = new Tone.Gain(0).connect(this.finalGain)
    // this.bitCrush = new Tone.BitCrusher(6).connect(this.bitCrushGain)
    this.adsr = new Tone.AmplitudeEnvelope({
  		attack: 0.1,
  		decay: 0.2,
  		sustain: 1.0,
  		release: 0.8
  	}).toDestination()
    this.osc = new Tone.FatOscillator("A3", "sawtooth", 30).connect(this.adsr).start()
    //.connect(this.adsr)
    // .connect(this.pingPong)
    // .connect(this.reverb)
    // .connect(this.phaser)
    // .connect(this.shift1)
    // .connect(this.shift2)
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
    this.setState({
       audioDataTime: this.timeDataArray
     })
    this.props.getWaveformArray("leadSynthWaveform", this.state.audioDataTime)
    if (this.state.playing === true){
      this.rafId = requestAnimationFrame(this.tick)
    }
  }


  handleOnClick = () => {
    if (!this.state.playing){
      this.setState({
        playing: true
      })
      this.rafId = requestAnimationFrame(this.tick)
      //this.now = Tone.now()
      //Tone.Transport.bpm.value = 120
      this.adsr.triggerAttackRelease("8n")

    } else {
      this.setState({
        playing: false
      })
    }
  }


  componentDidUpdate = () => {
    // this.filter.frequency.rampTo(this.props.scale(this.props.macro1, 0, 100, 50, 1000), 1)
    // this.bitCrushGain.gain.rampTo(this.props.scale(this.props.macro1, 0, 100, 0, 1), 1)
    // this.filterGain.gain.rampTo(this.props.scale(this.props.macro1, 0, 100, 1, 0), 1)
    // this.spaceEffectsGain.gain.rampTo(this.props.scale(this.props.macro2, 0, 100, 0, 1), 1)
    // this.modulationEffectsGain.gain.rampTo(this.props.scale(this.props.macro3, 0, 100, 0, 1), 1)
  }

  render(){
    return <button onClick={this.handleOnClick}>Lead Synth Trigger</button>
  }
}
