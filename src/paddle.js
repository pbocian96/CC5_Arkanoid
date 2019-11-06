import { ctx, cw, ch } from './main';

class Paddle {
  constructor(x) {
    this.x = x;
    this.length = 100;
    this.height = 30;
    this.spaceFromBorder = 10;
    this.xSpeed = 20;

    this.rightPressed = false;
    this.leftPressed = false;
  }
  draw() {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, ch - this.height, this.length, this.height - this.spaceFromBorder);
    
  }
  move(e) {
    if(this.x > this.spaceFromBorder && (e.keyCode === 37 || e.keyCode === 65)) {
      this.x -= this.xSpeed;
      
    }
    if(this.x < cw - this.length - this.spaceFromBorder && (e.keyCode === 39 || e.keyCode === 68)) {
      this.x += this.xSpeed;
      
    }
  }
  
}


export default Paddle;