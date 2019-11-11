import { ctx, cw, ch } from './main';

class Paddle {
  constructor(x) {
    this.x = x;
    this.length = 100;
    this.height = 30;
    this.spaceFromBorder = 10;
    this.xSpeed = 20;
    this.image = new Image(); 
    this.image.src = "src/img/paddle_ani_04.png";
    this.cycleLoop = [0, 0, 30, 30, 60, 60, 90, 90, 120, 120, 150, 150, 180, 180, 150, 150, 120, 90, 90, 60, 60, 30, 30];
    this.loopIndex = 0;

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
    // Paddle style
    /* ctx.fillStyle = 'white';
    ctx.fillRect(this.x, ch - this.height, this.length, this.height - this.spaceFromBorder);
    
    for (let i = 1; i <= 10; i++)
    {
      ctx.fillStyle = `rgb(${i*5},${i*15},${i*25})`;
      ctx.fillRect(this.x + i, ch - this.height + i, this.length - i*2, this.height - this.spaceFromBorder - i*2);
    } */

    //SPRITE TEST
    //ctx.drawImage(this.image, this.x,ch - this.height); 
    this.step();
    

    // Paddle movement
    if(this.rightPressed && this.x > 0) {
      this.x -= this.xSpeed;
    }

    if(this.leftPressed && this.x < cw - this.length) {
      this.x += this.xSpeed;
    }
  }

  step() {
    
    ctx.drawImage(
      this.image,
      0, 
      this.cycleLoop[this.loopIndex], 
      this.length, 
      this.height, 
      this.x, 
      ch - this.height, 
      this.length, 
      this.height
    ); 
    this.loopIndex++;
    if (this.loopIndex >= this.cycleLoop.length){
      this.loopIndex = 0;
    }
    //console.log(this.loopIndex);

    
  }

}




export default Paddle;