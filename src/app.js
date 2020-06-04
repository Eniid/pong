import { controleur } from "./controleur";
import Blocr from "./Blocr";
import Blocl from "./Blocl";
import Bal from "./Bal"


const animation = {
    canvasElt: undefined, 
    ctx: undefined, 
    controleur,

    init(){
        this.canvasElt = document.createElement("canvas")
        document.body.insertAdjacentElement("beforeend", this.canvasElt);
        this.canvasElt.height = 600;
        this.canvasElt.width = 800;
        this.ctx = this.canvasElt.getContext('2d'); 

        //* Ajoute les blocs
        this.bal = new Bal(this)
        this.blocr = new Blocr(this)
        this.blocl = new Blocl(this)


        

        //* initialiser mon controleur 
        this.controleur.init(this);
        
        this.animate();
    },

    draw(){
        this.bal.update();
        this.blocr.update(); 
        this.blocl.update();
        
    },

    animate(){ 
        this.ctx.clearRect(0, 0, this.canvasElt.width, this.canvasElt.height);
        this.draw()
        window.requestAnimationFrame( ()=> {
            this.animate(); 
        });
    },
}

animation.init() 