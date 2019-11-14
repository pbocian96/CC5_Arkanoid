import { ctx, cw, ch, brick, paddle, ball } from './main';
import PowerUp from './powerUp';

//catch
class PowerUp_2 extends PowerUp { 

    draw() {
        if (this.hit==1) {
            // rysowanie powerup
            const x = brick.allBricks[this.n][0] + 30;
            let y = brick.allBricks[this.n][1] + 10;
            ctx.font = '20px Arial';
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.fillText('C', x, y+this.ySpeed);

            this.ySpeed +=2;

            if (y+this.ySpeed >= ch) {
                this.hit = 0;
                this.ySpeed = 1;
                this.n = 0;
            }

            if (y+this.ySpeed >= ch-paddle.height && x > paddle.x && x < paddle.x+paddle.length) {
                ball.stop()
            }
        }
    }
}
export default PowerUp_2
