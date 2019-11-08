import { ctx, cw, ch } from './main';

class Brick {
    constructor(rows,columns) {
        this.rows=rows;
        this.columns=columns;
        this.width=70;
        this.height=25;
    }
    /*
    drawOne(x,y) {
        ctx.fillStyle = 'red';
        ctx.fillRect(x, y, this.width, this.height);
        }
*/
    draw(){
        const space=10;
        let a=10;

        for (let i=1; i<=this.columns; i++) {
            //drawOne(a, 20);
            ctx.fillStyle = 'red';
            ctx.fillRect(a, 20, this.width, this.height);
            let b = 30+this.height;

            for (let j=2; j<=this.rows; j++) {
                //drawOne(a,b);
                ctx.fillStyle = 'red';
                ctx.fillRect(a, b, this.width, this.height);
                b += (this.height+space);
            }
            a += (this.width+space);
        }
    }
}
export default Brick


