import { ctx, cw, ch, brick, paddle } from './main';
import PowerUp from './powerUp';

class PowerUp_2 extends PowerUp {

    draw() {
        if (this.hit==1) {
            // rysowanie powerup
            const x = brick.allBricks[this.n][0] + 30;
            let y = brick.allBricks[this.n][1] + 10;
            ctx.fillStyle = 'black';
            ctx.beginPath();
            ctx.arc(x, y+this.ySpeed, 7, 0, 2 * Math.PI);
            ctx.fill();

            // let gradient = ctx.createRadialGradient(x, y, 0, x, y, 7);
            // gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0)');
            // gradient.addColorStop(0.5, 'rgba(33, 33, 33, 1)');
            // gradient.addColorStop(0.6, 'rgba(10, 12, 100, 1)');
            // gradient.addColorStop(1.000, 'rgba(0, 0, 0, 0)');

            // ctx.fillStyle = gradient;
            // ctx.beginPath();
            // ctx.arc(x, y+this.ySpeed, 7, 0, 2 * Math.PI);
            // ctx.fill(); 

            this.ySpeed +=2;

            if (y+this.ySpeed >= ch) {
                this.hit = 0;
                this.ySpeed = 1;
                this.n = 0;
            }

            if (y+this.ySpeed >= ch-paddle.height && x > paddle.x && x < paddle.x+paddle.length) {
                
                //co ma robic powerup
            }
        }
    }
}
export default PowerUp_2
