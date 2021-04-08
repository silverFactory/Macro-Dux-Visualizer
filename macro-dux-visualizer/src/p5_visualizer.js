import React, {Component} from 'react'
import p5 from 'p5'
// import 'p5/lib/addons/p5.sound';

export default class P5Visualizer extends Component {

  constructor(props){
    super(props)
    this.canvasRef = React.createRef()
    this.particles = []
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
      p.stroke(255)
      p.rotateX(35)
      p.noFill()
      p.strokeWeight(3)
      p.scale(0.5)

      let particle = new Particle()
      this.particles.push(particle)

      p.push()
      p.translate(0, -700)
      p.stroke(`rgb(${this.props.color}%, 0%, 0%)`)
      DrawOrb(p, this.props.audioData)
      DrawParticles(this.particles)
      p.pop()
      p.push()
      p.translate(0, -100)
      DrawOrb(p, this.props.audioData)
      DrawParticles(this.particles)
      p.pop()
      p.push()
      p.translate(0, 400)
      DrawOrb(p, this.props.audioData)
      DrawParticles(this.particles)
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
        this.acc = this.pos.copy().mult(p.random(0.00015, 0.001))
        //radmonize particle width
        this.w = p.random(1, 5)

        //ADD A COLOR PROPERTY TO BE CONTROLLED BY MACRO
        //this.color = ....
      }
      //MACRO CONTROLLED
      //TO INCREASE SPEED, JUST ADD VEL TO POS A FEW MORE TIMES
      update(){
         this.vel.add(this.acc)
         this.pos.add(this.vel)
      }
      show(){
        p.noStroke()
        p.fill(255)
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

const DrawOrb = (p, audioData) => {
  // j variable used to create circle within a circle
  for (let j = 3; j <= 9; j += 3){
    // t variable used to make a second pass and draw mirrored half of circle
    for (let t = -1; t <= 1; t += 2){
      p.beginShape()
      // the value that i is incremented by increases the drawn waveform complexity
      for (let i = 0; i <= 180; i += 0.5){
        let index = Math.floor(p.map(i, 0, 180, 0, audioData.length - 1))

        //map radius of circle to waveform ->last two params affect the circle size
        let r = p.map(audioData[index], 0, 255, j * 7, j * 17.5)

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
