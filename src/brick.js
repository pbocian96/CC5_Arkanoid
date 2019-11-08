import { ctx, cw, ch } from './main';

class Brick {
    constructor(rows,columns) {
        this.rows=rows;
        this.columns=columns;
        this.width=70;
        this.height=25;
        this.allBricks=[];
    }
    /*
    drawOne(x,y) {
        ctx.fillStyle = 'red';
        ctx.fillRect(x, y, this.width, this.height);
        }*/

    createBricks(){
        const space=10;
        let a=10;

        for (let i=1; i<=this.columns; i++) {
            //drawOne(a, 20);
            this.allBricks.push([a,20]);
            let b = 30+this.height;

            for (let j=2; j<=this.rows; j++) {
                //drawOne(a,b);
                this.allBricks.push([a,b]);
                b += (this.height+space);
            }
            a += (this.width+space);
        }
    }
    draw(){
        this.allBricks.forEach(one=>{
            ctx.fillStyle = 'red';
            ctx.fillRect(one[0], one[1], this.width, this.height);
        })
    }
    
    delete(n) {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.allBricks[n][0], this.allBricks[n][1], this.width, this.height);
        this.allBricks.splice(n,1);
    }
}
export default Brick


