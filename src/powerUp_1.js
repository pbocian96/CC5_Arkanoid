import { ctx, cw, ch, brick, paddle, ball, score } from './main';
import PowerUp from './powerUp';

class PowerUp_1 extends PowerUp {

    draw() {
        if (this.hit==1) {
            const x = brick.allBricks[this.n][0]+30;
            let y = brick.allBricks[this.n][1]+10;
            
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(x, y+this.ySpeed, this.size, 0, 2 * Math.PI);
            ctx.fill(); 

            this.ySpeed +=2;

            if (y+this.ySpeed >= ch) {
                this.reset();
            }
            if (y+this.ySpeed >= ch-paddle.height && x > paddle.x && x < paddle.x+paddle.length) {
                this.reset();

                ball.size *= 1.3;
                ball.ySpeed *= 0.7;
                ball.xSpeed *= 0.7;
                
                score.scoreCount += 1000;
            }
        }
    }
}
export default PowerUp_1
