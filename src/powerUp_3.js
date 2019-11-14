import { ctx, cw, ch, brick, paddle } from './main';
import PowerUp from './powerUp';

class PowerUp_3 extends PowerUp {

    draw() {
        if (this.hit==1) {

            //rysowanie powerup

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
export default PowerUp_3
