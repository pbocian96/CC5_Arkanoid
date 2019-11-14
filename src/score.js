import { ctx, cw, ch, paddle, brick, allPowerUps} from './main';

class Score {
    constructor(){
        this.scoreCount = 0;
        this.fontSize = 15;
    }

    draw() {
        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.fillText(`SCORE: ${this.scoreCount}`, 0, this.fontSize);
    }


}

export default Score;