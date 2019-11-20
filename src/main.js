import Paddle from './paddle';
import Ball from './ball';
import Brick from './brick';
import Score from './score';
import Lives from './lives';
import PowerUp_1 from './powerUp_1';
import PowerUp_2 from './powerUp_2';
import PowerUp_3 from './powerUp_3';
import PowerUp_4 from './powerUp_4';

export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');
export const cw = canvas.width;
export const ch = canvas.height;
export const startBtn = document.getElementById('btn-start');

export const paddle = new Paddle(cw / 2);
export const ball = new Ball(paddle.x + paddle.length / 2, paddle.height);

export const brick = new Brick(5,8);

export const powerUp1 = new PowerUp_1();
export const powerUp2 = new PowerUp_2();
export const powerUp3 = new PowerUp_3();
export const powerUp4 = new PowerUp_4();
export const allPowerUps =[PowerUp_1, PowerUp_2, PowerUp_3, PowerUp_4];
export const allPowerUps2 = [];

export const score = new Score();
export const lives = new Lives();

// background img
const image = new Image(); 
image.src = "src/img/bg.jpg";

brick.createBricks();

const gameLoop = () => {
  ctx.drawImage(image, 0, 0, image.width, image.height, 0 ,0, cw, ch);
  
  ball.onHit();
  ball.move(0, 0);
  paddle.draw();
  ball.draw();
  brick.draw();
  allPowerUps2.forEach(one => {one.draw()});
  score.draw();
  lives.draw();
  requestAnimationFrame(gameLoop);
};

startBtn.addEventListener('click', e => {
  startBtn.style.display = 'none';
  document.addEventListener('click', e => {
    console.log(e);
    if(ball.started === false){
      
      ball.start();
      ball.move();
    }
  });
});


requestAnimationFrame(gameLoop);