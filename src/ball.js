import { ctx, cw, ch } from './main';

class Ball {
  constructor(x, height) {
    this.size = 10;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.x = x;
    this.y = ch - height - this.size;
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  draw() {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  onHit() {
    if ((this.x + this.size === cw) || (this.x - this.size === 0)) {
      this.xSpeed *= -1;
    }
    if (( this.y + this.size === ch)){
      alert('Przegrałeś!');
    } else if (this.y - this.size === 0){
      this.ySpeed *= -1;
    }
  }
}
export default Ball;
