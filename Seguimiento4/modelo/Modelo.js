class Modelo {

constructor (tamArregloCuadrados, app){

    this.app = app;
    this.cuadrados = [tamArregloCuadrados];  
    this.circulos = [tamArregloCuadrados];

    this.posXs = [10];

    for (let i = 0; i < this.posXs.length ; i++) {

        this.posXs [i] = 150 + 70*i;

    } //FOR


} //CONSTRUCTOR



agregarFigura () {
    let cuadradoFinal = this.cuadrados[this.cuadrados.length -1].posX(); 
    let cuadrado = new Cuadrado (

    } //AGREGAR FIGURA

eliminarFigura (){


    } //ELIMINAR FIGURA

duplicarTam () {


    } //DUPLICAR TAM

ordenarFiguras () {


    } //ORDENAR FIGURAS

tamInicialAumentar () {


    } //TAM INICIAL AUMENTAR  

tamInicialDisminuir () {


    } //TAM INICIAL DISMINUIR   
 
} // CLASS MODELO