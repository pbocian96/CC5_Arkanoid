import { ctx, cw, ch, brick, paddle, score } from './main';
import PowerUp from './powerUp';

class PowerUp_3 extends PowerUp {

    draw() {
        if (this.hit==1) {
            const x = brick.allBricks[this.n][0]+30;
            const y = brick.allBricks[this.n][1]+35;
            
            this.gradient = ctx.createRadialGradient(x, y+this.ySpeed, 0, x, y+this.ySpeed, 20);
            this.gradient.addColorStop(0.1, 'rgba(25, 25, 25, 0)');
            this.gradient.addColorStop(0.3, 'rgba(250, 250, 2, 1)');
            this.gradient.addColorStop(1, 'rgba(0,0,0, 1)');
            ctx.fillStyle = this.gradient;
            ctx.beginPath();
            ctx.arc(x, y+this.ySpeed, 7, 0, 2 * Math.PI);
            ctx.fill(); 

            this.ySpeed +=2;
            
            if (y+this.ySpeed >= ch) {
                this.reset();
            }
            if (y+this.ySpeed >= ch-paddle.height && x > paddle.x && x < paddle.x+paddle.length) {
                this.reset();
                score.scoreCount += 750;   // punkty za złapanie powerUpa

                if (paddle.length==100) {
                    paddle.length +=50;
                    paddle.x -= 25;

                    setTimeout( ()=> {
                        paddle.length -= 50;
                        paddle.x += 25;
                    },7000);
                }
                else {
                    setTimeout( ()=> {
                        paddle.length -= 50;
                        paddle.x += 25;
                    },7000);
                }

            }
        }
    }
}
export default PowerUp_3