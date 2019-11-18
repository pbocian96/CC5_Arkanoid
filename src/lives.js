import { ctx, cw} from './main';

class Lives {
    constructor() {
        this.livesCount = 3;
        this.fontSize = 15;
    }

    draw() {
        ctx.font = `${this.fontSize}px Arial`;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.fillText(`LIVES: ${this.livesCount}`, cw-60, this.fontSize);
    }
}

export default Lives;