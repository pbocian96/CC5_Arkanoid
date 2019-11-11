import { ctx, cw, ch, paddle, brick} from './main';

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
    //this.gradient.addColorStop(0.2, 'rgba(255, 255, 255, 1)');
    //this.gradient.addColorStop(0.3, 'rgba(0, 0, 0, 1)');
    this.gradient.addColorStop(0.5, 'rgba(255, 127, 255, 1)');
    this.gradient.addColorStop(0.6, 'rgba(255, 255, 255, 1)'  );
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
    this.xSpeed =  Math.random() > 0.5 ? Math.random()*3 + 1: -Math.random()*3 + 1;
    this.ySpeed = -5; 
  }

  onHit() {
    let paddleX = paddle.x;
    let paddleLength = paddle.length;
    let paddleHeight = paddle.height; // wysokosc paddle + spaceFromBorder
    
    let bricksArray = brick.allBricks; // [x, y] - lewy górny róg cegły
    let brickWidth = brick.width;
    let brickHeight = brick.height;
    
    // ballCollision - odległości
      // for (let i=0; i < bricksArray.length; i++){

      //   if ((Math.abs(bricksArray[i][1] + brickHeight - this.y) <= this.size) //bottom
      //   && ((Math.abs(bricksArray[i][0] + brickWidth - this.x - this.size) <= brickWidth) 
      //   && ((Math.abs(bricksArray[i][0] - this.x + this.size) <= brickWidth)))){
      //     this.ySpeed *= -1;
      //     brick.delete(i);
      //   }
      //   if ((Math.abs(bricksArray[i][1] - this.y) <= this.size) //top
      //   && ((Math.abs(bricksArray[i][0] + brickWidth - this.x - this.size) <= brickWidth) 
      //   && ((Math.abs(bricksArray[i][0] - this.x + this.size) <= brickWidth)))){
      //     this.ySpeed *= -1;
      //     brick.delete(i);
      //   }
      //   if ((Math.abs(bricksArray[i][0] - this.x) <= this.size) //left
      //   && ((Math.abs(bricksArray[i][1] + brickHeight - this.y + this.size) <= brickHeight) 
      //   && ((Math.abs(bricksArray[i][1] - this.y - this.size) <= brickHeight)))){
      //     this.xSpeed *= -1;
      //     brick.delete(i);
      //   }
      //   if ((Math.abs(bricksArray[i][0] + brickWidth - this.x) <= this.size) //right
      //   && ((Math.abs(bricksArray[i][1] + brickHeight - this.y + this.size) <= brickHeight) 
      //   && ((Math.abs(bricksArray[i][1] - this.y - this.size) <= brickHeight)))){
      //     this.xSpeed *= -1;
      //     brick.delete(i);
      //   }
      // }

    //ballCollision - wektorowo
    for (let i=0; i < bricksArray.length; i++){

       if((this.x + this.xSpeed + this.size >= bricksArray[i][0])
       && (this.x + this.xSpeed - this.size <= bricksArray[i][0] + brickWidth)
       && (this.y + this.ySpeed + this.size >= bricksArray[i][1])
       && (this.y + this.ySpeed - this.size <= bricksArray[i][1] + brickHeight)){

        if ((this.x + this.size < bricksArray[i][0]) //left
        && (this.x + this.xSpeed + this.size >= bricksArray[i][0])){
          this.xSpeed *= -1;
          brick.delete(i);
        }
        if ((this.x - this.size > bricksArray[i][0] + brickWidth) //right
        && (this.x + this.xSpeed - this.size <= bricksArray[i][0] + brickWidth)){
          this.xSpeed *= -1;
          brick.delete(i);
        }
        if ((this.y + this.size < bricksArray[i][1]) //top
        && (this.y - this.ySpeed + this.size >= bricksArray[i][1])){
          this.ySpeed *= -1;
          brick.delete(i);
        }
        if ((this.y - this.size > bricksArray[i][1] + brickHeight) //bottom
        && (this.y + this.ySpeed - this.size <= bricksArray[i][1] + brickHeight)){
          this.ySpeed *= -1;
          brick.delete(i);
        }
      }
    }
    
    if (this.y + this.size >= ch){ // warunek przegranej
      alert('Przegrałeś!'); 
      this.xSpeed = 0;
      this.ySpeed = 0;
      this.x = paddleX + paddleLength/2;
      this.y = ch - paddleHeight - this.size - 1;
      this.started = false;
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
    }
  }
}

export default Ball;
