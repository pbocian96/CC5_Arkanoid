import { ctx, cw, ch, brick, paddle } from './main';
import PowerUp from './powerUp';

class PowerUp_1 extends PowerUp {

    draw() {
        if (this.hit==1) {
            const x = brick.allBricks[this.n][0]+30;
            let y = brick.allBricks[this.n][1]+10;
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(x, y+this.ySpeed, 7, 0, 2 * Math.PI);
            ctx.fill(); 
            this.ySpeed +=2;
            if (y+this.ySpeed >= ch) {
                this.hit = 0;
                this.ySpeed = 1;
                this.n = 0;
            }
            if (y+this.ySpeed >= ch-paddle.height && x > paddle.x && x < paddle.x+paddle.length) {
                //tutaj będzie jakas funkcja powerUp
            }
        }
    }
}
export default PowerUp_1
