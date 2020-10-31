

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");


output.innerHTML = slider.value; //VALOR DE LA BARRITA

slider.oninput = function() {  

    output.innerHTML = this.value;

}

function botonContinuar (){

    window.location.href="animation.html"; 

} //FUNCION BOTON CONTINUAR