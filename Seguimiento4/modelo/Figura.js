class Figura{


    constructor(height, width, posX, posY) {

        this.width = width;
        this.height = height;
        
        this.posX = posX;
        this.posY = posY;

    } // CONSTRUCTOR

    set numRandom (numRandom) {

        this.numRandom = numRandom;

    } //SET NUMRANDOM MÉTODO 1

    duplicarTam (){

        this.width = this.width *2;
        this.height = this.height *2; 

    } //DUPLICAR TAM

    moverFigura (){
        
    }
    renderFigura () {

    } //RENDER FIGURA

    

} //FIGURA
