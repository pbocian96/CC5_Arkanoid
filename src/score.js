import { ctx, cw, ch, paddle, brick, allPowerUps} from './main';

class Score {
    constructor(){
        this.scoreCount = 0;
        this.fontSize = 10;
    }

    draw() {
        ctx.font = `${this.fontSize}px PressStart2PRegular`;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.fillText(`SCORE: ${this.scoreCount}`, this.fontSize/2, this.fontSize+5);
    }
}

export default Score;