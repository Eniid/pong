
import Vector from './Vector';

export default class Blocl {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx;
        this.bal = this.animation.bal;

        this.color = "#fff";
        this.widht = 10;
        this.height = 100;
        this.speed = 3; 
        this.point = 0

        const x = this.canvas.width - (20 + this.widht); 
        const y = (this.canvas.height/2)-(this.height/2); 
        this.location = new Vector(x, y)
    }


    draw(){         
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.location.x, this.location.y, this.widht, this.height);
        this.ctx.fill();

        this.ctx.font = '48px serif';
        this.ctx.textAlign = "center"; 
        this.ctx.fillText(this.point, 20, this.canvas.height -20)

    }; 

    boum(){
        console.log(this.bal.angleDeg);

        if(this.bal.location.x + this.bal.widht > this.location.x - this.widht){
            if(this.bal.location.y < this.location.y || this.bal.location.y > this.location.y + this.height){
                const x = this.canvas.width / 2; 
                const y = this.canvas.height/2; 
                this.bal.location = new Vector(x, y);
                this.point = this.point + 1; 
            }else {
                if(this.bal.location.y < this.location.y + this.height/3){
                    console.log("up");
                    this.bal.speed = this.bal.speed -1; 
                } else if(this.bal.location.y > this.location.y + 2*this.height/3){
                    //console.log("down");
                    this.bal.speed = this.bal.speed -1; 
                } else {
                    //console.log("middle");
                    this.bal.speed = this.bal.speed -1; 
                }
                
            }
        }
    };


    update(){
        
        if(this.animation.controleur.isKeyDown("ArrowUp")){
            if (this.location.y > 0) {
                this.location.y = this.location.y - this.speed;
            }
        }
        if(this.animation.controleur.isKeyDown("ArrowDown")){
            if(this.location.y < this.canvas.height - this.height)
            this.location.y = this.location.y + this.speed;
        }
        this.boum();

        this.draw();
    }
}