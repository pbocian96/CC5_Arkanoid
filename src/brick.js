import { ctx, cw, ch } from './main';
class brick{
    constructor(width,posx,posy) {
        this.width=width;
        this.height=width/3;
        this.posx=posx;
        this.posy=posy;

    }
    draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(posx, posy, this.width, this.height);
        }
    
}
const allBricks=[];
const bricksInRow=10;
const bricksInColumn=4;
const space=10;
const bw=cw/bricksInRow-space;
let a=10;
let b=30+bw/3

for (let i=1; i<=bricksInRow; i++) {
    let brick = new brick(bw, a, 20);
    brick.draw();
    allBricks.push(brick);

    for(let j=2; j<=bricksInColumn; j++) {
        let brick = new brick(bw, a, b);
        brick.draw();
        allBricks.push(brick);
        b += b+bw/3+space;
    }
    a += bw+space;
}
