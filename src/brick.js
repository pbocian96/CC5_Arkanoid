import { ctx, cw, ch } from './main';
class Brick{
    constructor(rows,columns) {
        this.rows=rows;
        this.columns=columns;
        this.width=100;
        this.height=35;
    }
    drawOne(x,y) {
        ctx.fillStyle = 'red';
        ctx.fillRect(x, y, this.width, this.height);
        }

    draw(){
        const space=10;
        let a=10;

        for (let i=1; i<=this.columns; i++) {
            draw.one(a, 20);
            let b=30+this.height;

            for (let j=2; j<=this.rows; j++) {
                draw.one(a,b);
                b += this.height+space;
            }
            a +=this.width+space;
        }
    }
}


