import { ctx, cw, ch, paddle} from './main';

class Ball {
  constructor(x, height) {
    this.size = 10;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.x = x;
    this.y = ch - height - this.size;
    this.started = false;
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

  start() {
    this.started = true;
    this.xSpeed = Math.random() > 0.5 ? Math.random()*3 : -Math.random()*3;
    this.ySpeed = -5; 
  }

  onHit() {
    let paddleX = paddle.x;
    let paddleLength = paddle.length;
    let paddleHeight = paddle.height; // wysokosc paddle + spaceFromBorder

    if (this.y + this.size >= ch){ //warunek przegranej
      alert('Przegrałeś!'); // do poprawy !
      this.xSpeed = 0;
      this.ySpeed = 0;
      this.x = paddleX + paddleLength/2;
      this.y = ch - paddleHeight - this.size - 1;
    } else if (this.y - this.size <= 0){ // odbijanie od sufitu
      this.ySpeed *= -1;
    }

    // odbijanie od ścian
    if ((this.x + this.size >= cw) || (this.x - this.size <= 0)){
      this.xSpeed *= -1;
    }

    // odbijanie od paddle
    if ((this.y + this.size === ch - paddleHeight) 
      && (this.x+this.size > paddleX)
      && (this.x-this.size < paddleX+paddleLength)
      && this.started){
      this.ySpeed *= -1;

      if ((this.x > paddleX) && (this.x < paddleLength/2)){
        this.xSpeed -= 0.5; 
      } else if ((this.x > paddleLength/2) && (this.x < paddleX+paddleLength)){
        this.xSpeed += 0.5;
      }

    }
  }
}
export default Ball;
