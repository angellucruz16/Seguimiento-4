class Modelo {

constructor (tamArregloCuadrados){

    //this.app = app;
    this.cuadrados = [tamArregloCuadrados];  
    llenarCuadrados();
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

llenarCuadrados(){
    for (let index = 0; index < this.cuadrados.length; index++) {
        let cuadrado = new Cuadrado (posXs[index]+70,this.posYCuadrados,this.widthHeightCuadrados,this.widthHeightCuadrados);
        cuadrado.numRandom=rand(1,10);
        this.cuadrados[index]=cuadrado;
    }
}

agregarFigura () {
    let cuadradoFinal = this.cuadrados[this.cuadrados.length -1].posX; 
    let cuadrado = new Cuadrado (cuadradoFinal+70,this.posYCuadrados,this.widthHeightCuadrados,this.widthHeightCuadrados);
    
    cuadrado.numRandom= rand (1,10);

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

this.circulos = this.cuadrados.map (cuadrado => {
    let circulo = new Bolita (posX, this.posYCirculos, this.widthHeightCirculos, this.widthHeightCirculos)

    circulo.numRandom = cuadrado.numRandom;
    return circulo;

});

} //AGREGARCIRCULOS


} // CLASS MODELO