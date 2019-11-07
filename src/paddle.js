import { ctx, cw, ch } from './main';

class Paddle {
  constructor(x) {
    this.x = x;
    this.length = 100;
    this.height = 30;
    this.spaceFromBorder = 10;
    this.xSpeed = 10;

    this.rightPressed = false;
    this.leftPressed = false;

    window.addEventListener("keydown", (e) => {
      if(e.keyCode === 37 || e.keyCode === 65) {
        this.rightPressed = true;
      }
      if(e.keyCode === 39 || e.keyCode === 68) {
        this.leftPressed = true;
      }
    });

    window.addEventListener("keyup", (e) => {
      if(e.keyCode === 37 || e.keyCode === 65) {
        this.rightPressed = false;
      }
      if(e.keyCode === 39 || e.keyCode === 68) {
        this.leftPressed = false;
      }
     });
  }

  draw() {
    ctx.fillStyle = 'white';
    ctx.fillRect(this.x, ch - this.height, this.length, this.height - this.spaceFromBorder);

    if(this.rightPressed && this.x > 0) {
      this.x -= this.xSpeed;
    }

    if(this.leftPressed && this.x < cw - this.length) {
      this.x += this.xSpeed;
    }
  }
}




export default Paddle;