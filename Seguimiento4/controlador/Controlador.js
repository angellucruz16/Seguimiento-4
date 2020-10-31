//class Controlador {

//constructor () {

//} //CONSTRUCTOR
//}

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");


output.innerHTML = slider.value; //VALOR DE LA BARRITA

slider.oninput = function() {  

    console.log("here");
    output.innerHTML = this.value;

}

function botonContinuar (){

    window.location.href="animation.html"; 

} //FUNCION BOTON CONTINUAR

 //CLASS CONTROLADOR