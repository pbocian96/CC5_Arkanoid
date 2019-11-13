import { ctx, cw, ch, brick, paddle } from './main';

class PowerUp {
    constructor(){
        this.ySpeed = 1;
        this.hit = 0;
        this.n = 0;
    }

    draw() {
        if (this.hit==1) {
            const x = brick.allBricks[this.n][0];
            let y = brick.allBricks[this.n][1];
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
export default PowerUp
