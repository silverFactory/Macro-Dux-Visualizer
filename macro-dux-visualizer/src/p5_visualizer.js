import React, {Component} from 'react'
import p5 from 'p5'
// import 'p5/lib/addons/p5.sound';

export default class P5Visualizer extends Component {

  constructor(props){
    super(props)
    this.canvasRef = React.createRef()
    this.melodyParticles = []
    this.harmonyParticles = []
    this.bassParticles = []
  }

  Canvas = (p) => {

    p.setup = () => {
      this.width = 800
      this.height = 800
      p.createCanvas(this.width, this.height, p.WEBGL)
      p.angleMode(p.DEGREES)
    }

    p.draw = () => {
      p.background(0)
      p.stroke(50)
      p.fill('rgb(69%, 9%, 5%)')
      //p.filter(p.BLUR, 3)
      //p.blendMode(p.MULITPLY)
      DrawBarVisualizer(p, this.props.audioDataFreq, this.width, this.height)

      p.stroke(255)
      p.rotateX(35)
      p.noFill()
      p.strokeWeight(3)
      p.scale(0.5)
      //
      //MELODY ORB AND PARTICLES
      p.push()
      p.translate(0, -700)
      DrawOrb(p, this.props.audioDataTime)
      let melodyDensity = Math.floor(p.map(this.props.macros.macro2, 0, 100, 10, 1))
      if (p.frameCount % melodyDensity === 0) {
        let melodyParticle = new Particle()
        melodyParticle.acc = melodyParticle.pos.copy().mult(
          p.map(this.props.macros.macro2, 0, 100, 0.00001, 0.001))
          this.melodyParticles.push(melodyParticle)
        }

      p.strokeWeight(0.5)
      DrawAllLightning(p, this.props.audioDataTime, this.width)

      let melodyRed = 100
      let melodyGreen = 100 - this.props.macros.macro1
      let melodyBlue = 100 - this.props.macros.macro1
      p.fill(`rgb(${melodyRed}%, ${melodyGreen}%, ${melodyBlue}%)`)
      DrawParticles(this.melodyParticles)
      p.pop()

      //HARMONY ORB AND PARTICLES
      p.push()
      p.translate(0, -100)
      DrawOrb(p, this.props.audioDataTime)
      let harmonyDensity = Math.floor(p.map(this.props.macros.macro5, 0, 100, 10, 1))
      if (p.frameCount % harmonyDensity === 0){
        let harmonyParticle = new Particle()
        harmonyParticle.acc = harmonyParticle.pos.copy().mult(
          p.map(this.props.macros.macro5, 0, 100, 0.00001, 0.001))
        this.harmonyParticles.push(harmonyParticle)
      }

      p.strokeWeight(0.5)
      DrawAllLightning(p, this.props.audioDataTime, this.width)

      let harmonyRed = 100
      let harmonyGreen = 100 - this.props.macros.macro4
      let harmonyBlue = 100 - this.props.macros.macro4
      p.fill(`rgb(${harmonyRed}%, ${harmonyGreen}%, ${harmonyBlue}%)`)
      DrawParticles(this.harmonyParticles)
      p.pop()

      //BASS ORB AND PARTICLES
      p.push()
      p.translate(0, 400)
      DrawOrb(p, this.props.audioDataTime)
      let bassDensity = Math.floor(p.map(this.props.macros.macro8, 0, 100, 10, 1))
      if (p.frameCount % bassDensity === 0){
        let bassParticle = new Particle()
        bassParticle.acc = bassParticle.pos.copy().mult(
          p.map(this.props.macros.macro8, 0, 100, 0.00001, 0.001))
        this.bassParticles.push(bassParticle)
      }

      p.strokeWeight(0.5)
      DrawAllLightning(p, this.props.audioDataTime, this.width)

      let bassRed = 100
      let bassGreen = 100 - this.props.macros.macro7
      let bassBlue = 100 - this.props.macros.macro7
      p.fill(`rgb(${bassRed}%, ${bassGreen}%, ${bassBlue}%)`)
      DrawParticles(this.bassParticles)
      p.pop()
    }

    class Particle {
      constructor(){
        //the mult() at end is the circle width that the particles generate from
        this.pos = p5.Vector.random2D().mult(160)
        //can't get to instantiate a vector with specific x, y
        //so make a random then set to desired
        this.vel = p5.Vector.random2D()
        this.vel.set(0,0)
        // same direction as pos vector, scaled down to move slow
        // this.acc = this.pos.copy().mult(p.random(0.00015, 0.001))
        //this.acc = this.pos.copy().mult(p.map(acc, 0, 100, 0.000015, 0.00001))
        // let mac = acc / 1000
        // this.acc = this.pos.copy().mult(mac)
        this.acc = this.pos.copy().mult(0.0001)
        //radmonize particle width
        this.w = p.random(1, 5)

      }
      //MACRO CONTROLLED
      //TO INCREASE SPEED, JUST ADD VEL TO POS A FEW MORE TIMES
      update(){
         this.vel.add(this.acc)
         this.pos.add(this.vel)
      }
      show(){
        p.noStroke()
      //  p.fill(`rgb(0,255,0)`)
        p.ellipse(this.pos.x, this.pos.y, this.w)
      }
      edges(){
        if (this.pos.x < -this.width / 2 || this.pos.x > this.width / 2 ||
        this.pos.y < -this.height / 2 || this.pos.y > this.height / 2) {
          return true
        } else {
          return false
        }
      }
    }
  }

  componentDidMount() {
    this.p5 = new p5(this.Canvas, this.canvasRef.current)
  }

  render(){
    return(
      <div ref={this.canvasRef}></div>
    )
  }
}

const DrawOrb = (p, audioDataTime) => {
  // j variable used to create circle within a circle
  for (let j = 3; j <= 9; j += 3){
    // t variable used to make a second pass and draw mirrored half of circle
    for (let t = -1; t <= 1; t += 2){
      p.beginShape()
      // the value that i is incremented by increases the drawn waveform complexity
      for (let i = 0; i <= 180; i += 0.5){
        let index = Math.floor(p.map(i, 0, 180, 0, audioDataTime.length - 1))

        //map radius of circle to waveform ->last two params affect the circle size
        let r = p.map(audioDataTime[index], 0, 255, j * 7, j * 17.5)

        let x = r * p.sin(i) * t
        let y = r * p.cos(i)
        let z = p.sin(p.frameCount + j ) * 50
        p.vertex(x, y, z)
      }
      p.endShape()
    }
  }
}

const DrawParticles = (particles) => {
  // let particle = new Particle()
  // this.particles.push(particle)

  //go through particles array backwards to eliminate flicker when splice occurs
  for (let i = particles.length - 1; i >= 0; i--){
    //if the particle is not off the canvas
    if (!particles[i].edges()){
      particles[i].update()
      particles[i].show()
    } else {
      particles.splice(i, 1)
    }

  }
}

const DrawLightning = (p, audioDataTime, canvasWidth, xVar, yVar) => {
  p.beginShape()
  for (let i = 0; i < canvasWidth / 2; i++){
    let index = Math.floor(p.map(i, 0, canvasWidth / 2, 0, audioDataTime.length - 1))
    let x = (i - canvasWidth / 2) + xVar
    let y = audioDataTime[index] + yVar
    p.vertex(x, y)
  }
  p.endShape()
}

const DrawAllLightning = (p, audioDataTime, canvasWidth) => {
  p.push()
  p.rotateY(30)
  DrawLightning(p, audioDataTime, canvasWidth, -150, -150)
  p.pop()

  p.push()
  p.rotateZ(-10)
  DrawLightning(p, audioDataTime, canvasWidth, -150, -100)
  p.pop()

  p.push()
  p.rotateY(150)
  DrawLightning(p, audioDataTime, canvasWidth, -150, -150)
  p.pop()

  p.push()
  p.rotateZ(10)
  p.rotateY(190)
  DrawLightning(p, audioDataTime, canvasWidth, -150, -100)
  p.pop()
}

const DrawBarVisualizer = (p, audioDataFreq, canvasWidth, canvasHeight) => {
  if (audioDataFreq.length > 0){
    //divide up FreqArray into 8 slices, average the amplitude, and map to rect height
    let barStepX = -400
    for (let i = 0; i < 8; i ++){
      let sliceSize = audioDataFreq.length / 32
      let sliceStart = i * sliceSize
      let sliceEnd = (i + 1) * sliceSize
      let slice = audioDataFreq.slice(sliceStart, sliceEnd)

      //average the amplitude values in the array slice
      let averageAmplitude = slice.reduce((a, b) => (a + b)) / slice.length
      let barHeight = p.map(averageAmplitude, 0, 255, 0, canvasHeight + 200)

      //draw rect
      p.rect(barStepX, canvasHeight - barHeight, canvasWidth / 8, barHeight)

      barStepX += 100
    }
  }
}
