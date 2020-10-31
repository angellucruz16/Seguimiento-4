import {Fig} from 'Figura.js';
class Cuadrado extends Figura {
constructor(posX, posY, height, width, ) {  
    
    super(height, width, posX, posY);   

} //CONSTRUCTOR

renderFigura (posX,posY){
    rect (posX, posY, this.height, this.width);
    text (this.value, posX)

} //RENDERFIGURA



} //CLASS