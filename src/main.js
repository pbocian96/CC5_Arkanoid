import Paddle from './paddle';
import Ball from './ball';
import Brick from './brick';

export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');
export const cw = canvas.width;
export const ch = canvas.height;

export const paddle = new Paddle(cw / 2);
const ball = new Ball(paddle.x + paddle.length / 2, paddle.height);
const brick = new Brick(4,7);

const gameLoop = () => {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, cw, ch); //tło
  ball.move(0, 0);
  ball.onHit();
  paddle.draw();
  ball.draw();
  brick.createBricks();
  brick.draw();
  requestAnimationFrame(gameLoop);
};

document.addEventListener('click', e => {
  console.log(e);
  ball.start();
  ball.move();
});

requestAnimationFrame(gameLoop);
