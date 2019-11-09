import Paddle from './paddle';
import Ball from './ball';
import Brick from './brick';

export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');
export const cw = canvas.width;
export const ch = canvas.height;

export const paddle = new Paddle(cw / 2);
const ball = new Ball(paddle.x + paddle.length / 2, paddle.height);
export const brick = new Brick(4,7);
// background img
const image = new Image(); 
image.src = "src/img/bg.jpg";

brick.createBricks();
const gameLoop = () => {
  /* ctx.fillStyle = '#555';
  ctx.fillRect(0, 0, cw, ch); //tło */
  ctx.drawImage(image, 0, 0, image.width, image.height, 0 ,0, cw, ch);
  ball.move(0, 0);
  ball.onHit();
  paddle.draw();
  ball.draw();
  brick.draw();
  requestAnimationFrame(gameLoop);
};

document.addEventListener('click', e => {
  console.log(e);
  if(ball.started === false)  // START tylko raz
  {
    ball.start();
    ball.move();
  }
});

requestAnimationFrame(gameLoop);
