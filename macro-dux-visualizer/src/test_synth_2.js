import React, { Component } from 'react'
import * as Tone from 'tone'

//should it be component or functional??
export default class TestSynth2 extends Component{

  constructor(props){
    super(props)
    this.filterGain = new Tone.Gain(1).toDestination()
    this.filter = new Tone.Filter(50, "lowpass").connect(this.filterGain)

    this.spaceEffectsGain = new Tone.Gain(0).toDestination()
    this.pingPong = new Tone.PingPongDelay("16n", 0.5).connect(this.spaceEffectsGain)
    this.reverb = new Tone.Reverb(4).connect(this.spaceEffectsGain)

    this.modulationEffectsGain = new Tone.Gain(0).toDestination()
    this.shift1 = new Tone.FrequencyShifter(7).connect(this.modulationEffectsGain)
    this.shift2 = new Tone.FrequencyShifter(5).connect(this.modulationEffectsGain)
    this.phaser = new Tone.Phaser({
                  	frequency: 20,
                  	octaves: 5,
                  	baseFrequency: 1000
                  }).connect(this.modulationEffectsGain)
    // this.chorus = new Tone.Chorus(4, 0.5, 0.9).toDestination()

    //bitCrush gain increases as cutoff increases to accentuate changes
    //separate signal flow KEEP THAT WAY
    this.bitCrushGain = new Tone.Gain(0).toDestination()
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


    this.playing = false
    this.loopA = new Tone.Loop(time => {
      this.synth.triggerAttackRelease("C2", "8n", time)
    }, "4n").start(0)
    this.loopB = new Tone.Loop(time => {
      this.synth.triggerAttackRelease("Eb2", "8n", time)
    }, "4n").start("8n")
  }

  handleOnClick = () => {
    if (!this.playing){
      //Tone.Transport.start()
      this.playing = true
      this.now = Tone.now()
      Tone.Transport.bpm.value = 140
      this.synth.triggerAttackRelease("C4", "1n", this.now)
      this.synth.triggerAttackRelease("E4", "1n", this.now)
      this.synth.triggerAttackRelease("G4", "1n", this.now)
      this.synth.triggerAttackRelease("C4", "1n", this.now + 3)
      this.synth.triggerAttackRelease("E4", "1n", this.now + 3)
      this.synth.triggerAttackRelease("G4", "1n", this.now + 3)
      this.synth.triggerAttackRelease("C4", "1n", this.now + 6)
      this.synth.triggerAttackRelease("E4", "1n", this.now + 6)
      this.synth.triggerAttackRelease("G4", "1n", this.now + 6)
      this.synth.triggerAttackRelease("C4", "1n", this.now + 9)
      this.synth.triggerAttackRelease("E4", "1n", this.now + 9)
      this.synth.triggerAttackRelease("G4", "1n", this.now + 9)
      // this.synth.triggerAttackRelease("C2", "8n", this.now)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 0.5)
      // this.synth.triggerAttackRelease("C2", "8n", this.now + 1)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 1.5)
      // this.synth.triggerAttackRelease("C2", "8n", this.now + 2)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 2.5)
      // this.synth.triggerAttackRelease("C2", "8n", this.now + 3)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 3.5)
      // this.synth.triggerAttackRelease("C2", "8n", this.now + 4)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 4.5)
      // this.synth.triggerAttackRelease("C2", "8n", this.now + 5)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 5.5)
      // this.synth.triggerAttackRelease("C2", "8n", this.now + 6)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 6.5)
      // this.synth.triggerAttackRelease("C2", "8n", this.now + 7)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 7.5)
      // this.synth.triggerAttackRelease("C2", "8n", this.now + 8)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 8.5)
      // this.synth.triggerAttackRelease("C2", "8n", this.now + 9)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 9.5)
      // this.synth.triggerAttackRelease("C2", "8n", this.now + 10)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 10.5)
      // this.synth.triggerAttackRelease("C2", "8n", this.now + 11)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 11.5)
      // this.synth.triggerAttackRelease("C2", "8n", this.now + 12)
      // this.synth.triggerAttackRelease("Eb2", "8n", this.now + 12.5)

    } else {
      //Tone.Transport.stop()
      this.playing = false
    }
  }

  componentDidUpdate = () => {
    this.filter.frequency.rampTo(scale(this.props.macro1, 0, 100, 50, 1000), 1)
    //this.distortion.wet.rampTo(scale(this.props.macro1, 0, 100, 0.01, 0.99))
    this.bitCrushGain.gain.rampTo(scale(this.props.macro1, 0, 100, 0, 1), 1)
    this.filterGain.gain.rampTo(scale(this.props.macro1, 0, 100, 1, 0), 1)
    this.spaceEffectsGain.gain.rampTo(scale(this.props.macro2, 0, 100, 0, 1), 1)
    this.modulationEffectsGain.gain.rampTo(scale(this.props.macro3, 0, 100, 0, 1), 1)
    //console.log(this.bitCrush)
  }


  render(){
    return <button onClick={this.handleOnClick}>Synth Trigger</button>
  }
}

  //maps a number in one range to another range
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
  }
