import { ctx, cw, ch, brick, paddle, ball, score } from './main';
import PowerUp from './powerUp';
import Ball from './ball';

//catch
class PowerUp_2 extends PowerUp { 

    draw() {
        if (this.hit == 1) {
            // rysowanie powerup
            const x = brick.allBricks[this.n][0] + 30;
            let y = brick.allBricks[this.n][1] + 10;
            
            this.gradient = ctx.createRadialGradient(x, y + this.ySpeed, 0, x, y + this.ySpeed, this.size*2 );
            this.gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0)');
            this.gradient.addColorStop(0.5, 'rgba(10, 150, 50, 1)');
            this.gradient.addColorStop(0.6, 'rgba(10, 100, 0, 1)');
            this.gradient.addColorStop(1.000, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = this.gradient;
            ctx.beginPath();
            ctx.arc(x, y + this.ySpeed, this.size*2, 0, 2 * Math.PI);
            ctx.fill(); 

            this.ySpeed += 2;

            if (y + this.ySpeed >= ch) {
                this.reset();
            }

            if (y+this.ySpeed >= ch-paddle.height && x > paddle.x && x < paddle.x+paddle.length) {
                score.scoreCount += 500; // punkty za złapanie powerUpa
                this.reset();
                ball.stop()
            }
        }
    }
}
export default PowerUp_2
