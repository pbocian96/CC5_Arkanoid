import { ctx, cw, ch, brick, paddle, ball, score } from './main';
import PowerUp from './powerUp';

class PowerUp_4 extends PowerUp {

    draw() {
        if (this.hit==1) {
            const x = brick.allBricks[this.n][0]+30;
            let y = brick.allBricks[this.n][1]+10;
            
            this.gradient = ctx.createRadialGradient(x, y + this.ySpeed, 0, x, y + this.ySpeed, this.size*2 );
            this.gradient.addColorStop(0.2, 'rgba(255, 255, 255, 0)');
            this.gradient.addColorStop(0.5, 'rgba(255, 30, 30, 1)');
            this.gradient.addColorStop(0.6, 'rgba(255, 126, 0, 1)');
            this.gradient.addColorStop(1.000, 'rgba(0, 0, 0, 0)');

            ctx.fillStyle = this.gradient;
            ctx.beginPath();
            ctx.arc(x, y + this.ySpeed, this.size*2, 0, 2 * Math.PI);
            ctx.fill();    
            
            ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(x - this.size, y + this.ySpeed + this.size);
            ctx.lineTo(x - this.size, y + this.ySpeed - this.size);
            ctx.lineTo(x + this.size, y + this.ySpeed);
            ctx.closePath();
            ctx.stroke();

            this.ySpeed +=2;

            if (y+this.ySpeed >= ch) {
                this.reset();
            }
            if (y+this.ySpeed >= ch-paddle.height && x > paddle.x && x < paddle.x+paddle.length) {
                this.reset();
                score.scoreCount += 2000;   // punkty za złapanie powerUpa
                ball.xSpeed *= 1.2;
                ball.ySpeed *= 1.2;
                setTimeout( ()=> {
                    ball.xSpeed /= 1.2;
                    ball.ySpeed /= 1.2;
                },8000);
            }
        }
    }
}
export default PowerUp_4
