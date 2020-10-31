class Cuadrado extends Figura {
constructor(posX, posY, height, width ) {  
    
    super(height, width, posX, posY);   

} //CONSTRUCTOR


renderFigura (){

    rect (posX, posY, height, width);
    text (this.numRandom, posX, posY);

} //RENDERFIGURA

moverFigura () {
    
    posX += this.velocidad;
    if (posX > 500 ) {

        this.poX = 100;

    } //IF

} //MOVERFIGURA
 
} //CLASS

