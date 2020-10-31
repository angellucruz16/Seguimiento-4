class Modelo {

constructor (tamArregloCuadrados, app){

    this.app = app;
    this.cuadrados = [tamArregloCuadrados];  
    this.circulos = [tamArregloCuadrados];

    this.posXs = [10];
    this.posYCuadrados=200;
    this.widthHeightCuadrados=50;
    this.posYCirculos=400;
    this.widthHeightCirculos=50;

    for (let i = 0; i < this.posXs.length ; i++) {

        this.posXs [i] = 150 + 70*i;

    } //FOR


} //CONSTRUCTOR



agregarFigura () {
    let cuadradoFinal = this.cuadrados[this.cuadrados.length -1].posX; 
    let cuadrado = new Cuadrado (cuadradoFinal+70,this.posYCuadrados,this.widthHeightCuadrados,this.widthHeightCuadrados);
    this.cuadrados.push(cuadrado);

    } //AGREGAR FIGURA

eliminarFigura (){
    this.cuadrados.pop();

    } //ELIMINAR FIGURA

duplicarTam () {
    this.cuadrados.forEach(cuadrado => {
        cuadrado.duplicarTam()
    });

    this.circulos.forEach( circulo => {
        circulo.duplicarTam()
    });

    } //DUPLICAR TAM
    compareNumbers(a, b) {
        return a.numRandom - b.numRandom;
      }

ordenarFiguras () {

    this.cuadrados.sort(compareNumbers);

    } //ORDENAR FIGURAS

agregarCirculos() {


} //AGREGARCIRCULOS


} // CLASS MODELO