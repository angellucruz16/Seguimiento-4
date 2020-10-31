var slider = document.getElementById("myRange");
var output = document.getElementById("demo");


output.innerHTML = slider.value; 

slider.oninput = function() {  

    output.innerHTML = this.value;

}

function botonContinuar (){

    window.location.href="animation.html"; 

} //FUNCION BOTON CONTINUAR