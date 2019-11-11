import { ctx, cw, ch } from './main';

class Brick {
    constructor(rows,columns) {
        this.rows=rows;
        this.columns=columns;
        this.width=60;
        this.height=20;
        this.allBricks=[];
    }

    createBricks(){
        const space=8;
        let a=20;

        for (let i=1; i<=this.columns; i++) {
            this.allBricks.push([a,20,1]);
            let b = 28+this.height;

            for (let j=2; j<=this.rows; j++) {
                this.allBricks.push([a,b,1]);
                b += (this.height+space);
            }
            a += (this.width+space);
        }
        for (let i=1; i<=this.allBricks.length; i=i+2) {
            this.allBricks[i][2]=2;
        }
    }
    draw(){
        this.allBricks.forEach(one=>{
            if (one[2]==2) {
                ctx.fillStyle = 'silver';
                ctx.fillRect(one[0], one[1], this.width, this.height);
                ctx.fillStyle = 'black';
                ctx.strokeRect(one[0], one[1], this.width, this.height);
            }
            else {
                ctx.fillStyle = 'maroon';
                ctx.fillRect(one[0], one[1], this.width, this.height);
                ctx.fillStyle = 'black';
                ctx.strokeRect(one[0], one[1], this.width, this.height);
            }
            
        })
    }
    
    delete(n) {
        if (n != this.allBricks.length - 1){ //zmieniłam, bo nie działa gdy chce usunąć ostatni brick z tablicy
            this.allBricks.splice(n,1);
        }
    }
}
export default Brick


