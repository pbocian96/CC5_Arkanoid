import { ctx, cw, ch } from './main';

class Brick {
    constructor(rows,columns) {
        this.rows=rows;
        this.columns=columns;
        this.width=60;
        this.height=20;
        this.allBricks=[];

        //style
        this.image = new Image(); 
        this.image.src = "src/img/bricks_ani01.png";
        this.cycleLoop = [0, 50, 100, 100, 100, 100, 150, 150, 150, 150, 100, 100, 100, 100, 50, 50, 50, 50, 0, 0, 0, 0];
        this.loopIndex = 0;
    }

    createBricks(){
        const space=8;
        let a=20;

        for (let i=1; i<=this.columns; i++) {
            this.allBricks.push([a,20,1,1]); // allBricks[][4]-bricks z powerup
            let b = 28+this.height;

            for (let j=2; j<=this.rows; j++) {
                this.allBricks.push([a,b,1,1]);
                b += (this.height+space);
            }
            a += (this.width+space);
        }
        for (let i=1; i<this.allBricks.length; i=i+2) {
            this.allBricks[i][2]=2;
        }
        for (let i=0; i<this.allBricks.length; i=i+2) {//bricksy z powerup
            this.allBricks[i][3]=2;
        }
    }
    draw(){
        this.allBricks.forEach(one=>{
            if (one[2]==2) {
                
                ctx.drawImage(
                    this.image,
                    this.image.width/2, 
                    this.cycleLoop[this.loopIndex], 
                    this.image.width/2, 
                    this.image.height/5, 
                    one[0], 
                    one[1], 
                    this.width, 
                    this.height
                  ); 
            }
            else {
                
                ctx.drawImage(
                    this.image,
                    0, 
                    this.cycleLoop[this.loopIndex], 
                    this.image.width/2, 
                    this.image.height/5, 
                    one[0], 
                    one[1], 
                    this.width, 
                    this.height
                  ); 
            }
            
        })
        
        this.loopIndex++;
        if (this.loopIndex >= this.cycleLoop.length){
            this.loopIndex = 0;
        }
    }
    
    delete(n) {
        if (this.allBricks[n][2]==2) {
            ctx.fillStyle = 'silver';
            ctx.fillRect(this.allBricks[n][0], this.allBricks[n][1], this.width, this.height);
            ctx.fillStyle = 'black';
            ctx.strokeRect(this.allBricks[n][0], this.allBricks[n][1], this.width, this.height);
            this.allBricks[n][2]=1;
        }
        else {
            this.allBricks.splice(n,1);
        }
    }

    brickStyle(posX, posY) {
        
    }

}
export default Brick


