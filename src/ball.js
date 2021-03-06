import { ctx, cw, ch, paddle, brick, allPowerUps, allPowerUps2, score, lives, ball} from './main';

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
    // BALL STYLE
    this.gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size );
    this.gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0)');
    this.gradient.addColorStop(0.5, 'rgba(255, 127, 255, 1)');
    this.gradient.addColorStop(0.6, 'rgba(0, 255, 255, 1)');
    this.gradient.addColorStop(1.000, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = this.gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();    

    if (!this.started) {
      this.x = paddle.x + paddle.length/2;
    }
  }
  
  start() { // startowanie piłki 
    this.move(0, 0);
    this.started = true;
    this.xSpeed =  Math.random() > 0.5 ? Math.random()*3 : -Math.random()*3;
    if (this.size === 10) {
      this.ySpeed = -5; 
    } else {
      this.ySpeed = -2.5;
      this.y -= 10;
    }
  }

  stop() { // powrót piłki do pozycji startowej
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.x = paddle.x + paddle.length/2;
    this.y = ch - paddle.height - this.size;
    this.started = false;
  }

  onHit() {
    let paddleX = paddle.x;
    let paddleLength = paddle.length;
    let paddleHeight = paddle.height; // wysokosc paddle + spaceFromBorder
    
    let bricksArray = brick.allBricks; // [x, y] - lewy górny róg cegły
    let brickWidth = brick.width;
    let brickHeight = brick.height;
    
    // ballCollision - wektorowo
    for (let i=0; i < bricksArray.length; i++) {

      if((this.x + this.xSpeed + this.size >= bricksArray[i][0])
      && (this.x + this.xSpeed - this.size <= bricksArray[i][0] + brickWidth)
      && (this.y + this.ySpeed + this.size >= bricksArray[i][1])
      && (this.y + this.ySpeed - this.size <= bricksArray[i][1] + brickHeight)){

        if ((this.x + this.size < bricksArray[i][0]) //left
        && (this.x + this.xSpeed + this.size >= bricksArray[i][0])) {
          this.xSpeed *= -1;
          if (bricksArray[i][3]==2) {
            const a = Math.floor(Math.random()*allPowerUps.length);
            const b = new allPowerUps[a]();
            b.n=i-1;
            b.hit=1;
            allPowerUps2.push(b);
          }
          brick.delete(i);
          break;
        }
        if ((this.x - this.size > bricksArray[i][0] + brickWidth) //right
        && (this.x + this.xSpeed - this.size <= bricksArray[i][0] + brickWidth)) {
          this.xSpeed *= -1;
          if (bricksArray[i][3]==2) {
            const a = Math.floor(Math.random()*allPowerUps.length);
            const b = new allPowerUps[a]();
            b.n=i-1;
            b.hit=1;
            allPowerUps2.push(b);
          }
          brick.delete(i);
          break;
        }
        if ((this.y + this.size < bricksArray[i][1]) //top
        && (this.y + this.ySpeed + this.size >= bricksArray[i][1])) {
          this.ySpeed *= -1;
          if (bricksArray[i][3]==2) {
            const a = Math.floor(Math.random()*allPowerUps.length);
            const b = new allPowerUps[a]();
            b.n=i-1;
            b.hit=1;
            allPowerUps2.push(b);
          }
          brick.delete(i);
          break;
        }
        if ((this.y - this.size > bricksArray[i][1] + brickHeight) //bottom
        && (this.y + this.ySpeed - this.size <= bricksArray[i][1] + brickHeight)) {
          this.ySpeed *= -1;
          if (bricksArray[i][3]==2) {
            const a = Math.floor(Math.random()*allPowerUps.length);
            const b = new allPowerUps[a]();
            b.n=i-1;
            b.hit=1;
            allPowerUps2.push(b);
          }
          brick.delete(i);
          break;
        }
      }
      if (bricksArray.length === 0) { // Wygrana jeśli wzystkie bricki zostaną usunięte
        alert('Wygrałeś!');
        window.setInterval(location.reload(true), s); // reload gry
      }
    }

    if (this.y + this.size >= ch) { // warunek przegranej
      lives.livesCount -= 1;
      ball.stop();
      if (lives.livesCount === 0) {
        alert('Przegrałeś!');
        window.setInterval(location.reload(true), s); // reload gry 
      }
    } else if (this.y - this.size <= 0) { // odbijanie od sufitu
      this.ySpeed *= -1;
    }

    if ((this.x + this.size >= cw) || (this.x - this.size <= 0)) { // odbijanie od ścian
      this.xSpeed *= -1;
    }

    //odbijanie od paddle - wektorowo
    if((this.x + this.xSpeed + this.size >= paddleX)
    && (this.x + this.xSpeed - this.size <= paddleX + paddleLength)
    && (this.y + this.ySpeed + this.size >= ch - paddleHeight)
    && (this.y + this.ySpeed - this.size <= ch - paddleHeight)
    && this.started) {

      if ((this.x + this.size < paddleX) //left
      && (this.x + this.xSpeed + this.size >= paddleX)) {
        this.xSpeed *= -1;
      }
      if ((this.x - this.size > paddleX + paddleLength) //right
      && (this.x + this.xSpeed - this.size <= paddleX + paddleLength)){
        this.xSpeed *= -1;
      }
      if ((this.y + this.size < ch - paddleHeight) //top
      && (this.y + this.ySpeed + this.size >= ch - paddleHeight)){
        this.ySpeed *= -1;
      }
    }
  }
}
export default Ball;