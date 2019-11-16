import { ctx, cw, ch, brick, paddle, score } from './main';

class PowerUp {
    constructor(){
        this.ySpeed = 1;
        this.hit = 0;
        this.n = 0; 
        this.size = 7;
    }

    reset() 
    {
        this.hit = 0;
        this.ySpeed = 1;
        this.n = 0;
    }
    
}
export default PowerUp
