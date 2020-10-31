class Main {

constructor (estadoPantalla) {
let controlador; //Esta variable me permite pasar por controles y manejar los metodos de aquí

} //CONSTRUCTOR

setup () {

    createCanvas (1024,768);
    controlador = new controlador (this); //Inicializo mi variable

} //SETUP

draw () {

    background (0);
    controlador.draw();

} //DRAW

mousePressed (){
    
    controlador.mousePressed();


} //MOUSEPRESSED

keypressed () {
    controlador.keypressed ();
} //KEYPRESSED

} //MAIN