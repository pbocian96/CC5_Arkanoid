import { ctx, cw, ch } from './main';

class Paddle {
  constructor(x) {
    this.x = x;
    this.length = 100;
    this.height = 20;
    this.spaceFromBorder = 10;
    this.xSpeed = 20;
    this.friction = 0.9;
    this.acceleration = 2;
    this.velocity = 0;

    this.image = new Image(); 
    this.image.src = "src/img/paddle_ani_05.png";
    this.cycleLoop = [0, 0, 30, 30, 60, 60, 90, 90, 120, 120, 90, 90, 60, 60, 30, 30];
    this.loopIndex = 0;

    this.rightPressed = false;
    this.leftPressed = false;

    window.addEventListener("keydown", (e) => {
      if(e.keyCode === 37 || e.keyCode === 65) {
        this.leftPressed = true;
      }
      if(e.keyCode === 39 || e.keyCode === 68) {
        this.rightPressed = true;
      }
    });

    window.addEventListener("keyup", (e) => {
      if(e.keyCode === 37 || e.keyCode === 65) {
        this.leftPressed = false;
      }
      if(e.keyCode === 39 || e.keyCode === 68) {
        this.rightPressed = false;
      }
     });
  }

  draw() {
    this.step();

    // Paddle movement
    if(this.rightPressed && this.velocity < this.xSpeed) {
        this.velocity+= this.acceleration;
    }

    if(this.leftPressed && this.velocity > -this.xSpeed) {
        this.velocity-= this.acceleration;
    }

    // Paddle velocity
    this.velocity *= this.friction;
    this.x += this.velocity;
    
    // Border check
    if (this.x >= cw - this.length){
      this.x = cw - this.length;
    } else if (this.x <= 0) {
      this.x = 0;
    }
  }

  step() {
    ctx.drawImage(
      this.image,
      0, 
      this.cycleLoop[this.loopIndex], 
      this.image.width, 
      this.image.height/5, 
      this.x, 
      ch - this.height, 
      this.length, 
      this.height
    ); 
    this.loopIndex++;
    if (this.loopIndex >= this.cycleLoop.length){
      this.loopIndex = 0;
    } 
  }
}

export default Paddle;