import { ctx, cw, ch, paddle, brick, allPowerUps, score} from './main';

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
    //BALL STYLE -
    this.gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size );
    this.gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0)');
    //this.gradient.addColorStop(0.3, 'rgba(0, 0, 0, 1)');
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
  
  start() {
    this.started = true;
    this.xSpeed =  Math.random() > 0.5 ? Math.random()*3 : -Math.random()*3;
    this.ySpeed = -5; 
  }

  stop() { //powrót piłki do pozycji startowej
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
    
    // ballCollision
      // for (let i=0; i < bricksArray.length; i++){
      //   if ((Math.abs(bricksArray[i][1] + brickHeight - this.y) <= this.size) //bottom
      //   && ((Math.abs(bricksArray[i][0] + brickWidth - this.x) <= brickWidth) 
      //   && ((Math.abs(bricksArray[i][0] - this.x) <= brickWidth)))){
      //     this.ySpeed *= -1;
      //     if (bricksArray[i][3]==2){
      //       allPowerUps[Math.floor(Math.random()*allPowerUps.length)].hit=1;
      //       allPowerUps[Math.floor(Math.random()*allPowerUps.length)].n=i;
      //     }
      //     brick.delete(i);
      //   }
      //   if ((Math.abs(bricksArray[i][1] - this.y) <= this.size) //top
      //   && ((Math.abs(bricksArray[i][0] + brickWidth - this.x) <= brickWidth) 
      //   && ((Math.abs(bricksArray[i][0] - this.x) <= brickWidth)))){
      //     this.ySpeed *= -1;
      //     if (bricksArray[i][3]==2){
      //       allPowerUps[Math.floor(Math.random()*allPowerUps.length)].hit=1;
      //       allPowerUps[Math.floor(Math.random()*allPowerUps.length)].n=i;
      //     }
      //     brick.delete(i);
      //   }
      //   if ((Math.abs(bricksArray[i][0] - this.x) <= this.size) //left
      //   && ((Math.abs(bricksArray[i][1] + brickHeight - this.y) <= brickHeight) 
      //   && ((Math.abs(bricksArray[i][1] - this.y) <= brickHeight)))){
      //     this.xSpeed *= -1;
      //     if (bricksArray[i][3]==2){
      //       allPowerUps[Math.floor(Math.random()*allPowerUps.length)].hit=1;
      //       allPowerUps[Math.floor(Math.random()*allPowerUps.length)].n=i;
      //     }
      //     brick.delete(i);
      //   }
      //   if ((Math.abs(bricksArray[i][0] + brickWidth - this.x) <= this.size) //right
      //   && ((Math.abs(bricksArray[i][1] + brickHeight - this.y) <= brickHeight) 
      //   && ((Math.abs(bricksArray[i][1] - this.y) <= brickHeight)))){
      //     this.xSpeed *= -1;
      //     if (bricksArray[i][3]==2){
      //       allPowerUps[Math.floor(Math.random()*allPowerUps.length)].hit=1;
      //       allPowerUps[Math.floor(Math.random()*allPowerUps.length)].n=i;
      //     }
      //     brick.delete(i);
      //   }
      // }
    
   // ballCollision - wektorowo
   for (let i=0; i < bricksArray.length; i++){

    if((this.x + this.xSpeed + this.size >= bricksArray[i][0])
    && (this.x + this.xSpeed - this.size <= bricksArray[i][0] + brickWidth)
    && (this.y + this.ySpeed + this.size >= bricksArray[i][1])
    && (this.y + this.ySpeed - this.size <= bricksArray[i][1] + brickHeight)){

     if ((this.x + this.size < bricksArray[i][0]) //left
     && (this.x + this.xSpeed + this.size >= bricksArray[i][0])){
      this.xSpeed *= -1;
      if (bricksArray[i][3]==2){
        allPowerUps[Math.floor(Math.random()*allPowerUps.length)].hit=1;
        allPowerUps[Math.floor(Math.random()*allPowerUps.length)].n=i;
      }
      brick.delete(i);
      }
      if ((this.x - this.size > bricksArray[i][0] + brickWidth) //right
      && (this.x + this.xSpeed - this.size <= bricksArray[i][0] + brickWidth)){
        this.xSpeed *= -1;
        if (bricksArray[i][3]==2){
          allPowerUps[Math.floor(Math.random()*allPowerUps.length)].hit=1;
          allPowerUps[Math.floor(Math.random()*allPowerUps.length)].n=i;
        }
        brick.delete(i);
      }
      if ((this.y + this.size < bricksArray[i][1]) //top
      && (this.y - this.ySpeed + this.size >= bricksArray[i][1])){
        this.ySpeed *= -1;
        if (bricksArray[i][3]==2){
          allPowerUps[Math.floor(Math.random()*allPowerUps.length)].hit=1;
          allPowerUps[Math.floor(Math.random()*allPowerUps.length)].n=i;
        }
        brick.delete(i);
      }
      if ((this.y - this.size > bricksArray[i][1] + brickHeight) //bottom
      && (this.y + this.ySpeed - this.size <= bricksArray[i][1] + brickHeight)){
        this.ySpeed *= -1;
        if (bricksArray[i][3]==2){
          allPowerUps[Math.floor(Math.random()*allPowerUps.length)].hit=1;
          allPowerUps[Math.floor(Math.random()*allPowerUps.length)].n=i;
        }
        brick.delete(i);
      }
    }
    if (bricksArray.length === 0) { // Wygrana jeśli wzystkie bricki zostaną usunięte
      alert('Wygrałeś!');
      this.xSpeed = 0;
      this.ySpeed = 0;
      window.setInterval(location.reload(true), s);
    }
  }

    if (this.y + this.size >= ch){ // warunek przegranej
      alert('Przegrałeś!'); 
      this.stop();
      window.setInterval(location.reload(true), s); // odświezenie strony 
    } else if (this.y - this.size <= 0){ // odbijanie od sufitu
      this.ySpeed *= -1;
    }

    // odbijanie od ścian
    if ((this.x + this.size >= cw) || (this.x - this.size <= 0)){
      this.xSpeed *= -1;
    }

    // odbijanie od paddle
    if ((this.y + this.size === ch - paddleHeight) 
      && (this.x + this.size > paddleX)
      && (this.x - this.size < paddleX + paddleLength)
      && this.started){
      this.ySpeed *= -1;
      this.xSpeed += Math.random() > 0.5 ? -Math.random() : Math.random(); // rotacja piłki 
      score.scoreCount += 10;
    }
  }
}
export default Ball;