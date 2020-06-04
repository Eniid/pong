
import Vector from './Vector';

export default class Bal {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx;

        this.color = "#fff";
        this.widht = 10;
        this.height = 10;
        this.speed = 5; 
        this.acceleration = 0.2;
        this.angleDeg = Math.random() * 45 + 345; 
        this.angle = this.angleDeg * (Math.PI/180);

        const x = this.canvas.width/2 - this.widht/2; 
        const y = (this.canvas.height/2)-(this.height/2); 
        this.location = new Vector(x, y)
    }


    draw(){         
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.location.x, this.location.y, this.widht, this.height);
        this.ctx.fill();
    }; 

    update(){
        //* Déplacement
        const x = this.speed * Math.cos(this.angle)
        const y = this.speed * Math.sin(this.angle)
        const newCoo = new Vector(x, y)
        this.location.add(newCoo); 

        if(this.location.y > this.canvas.height){
            this.angle = -this.angle; 
        }
        if(this.location.y < 0){
            this.angle = -this.angle; 
        }


        this.draw();
    }
}