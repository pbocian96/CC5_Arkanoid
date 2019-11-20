import { ctx, cw} from './main';

class Lives {
    constructor() {
        this.livesCount = 3;
        this.fontSize = 10;
    }

    draw() {
        ctx.font = `${this.fontSize}px PressStart2PRegular`;
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.fillText(`LIVES: ${this.livesCount}`, cw-85, this.fontSize+5);
    }
}

export default Lives;