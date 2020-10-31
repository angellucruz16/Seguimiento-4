var figura = require("Figura")
class Cuadrado extends figura.FiguraClass {
constructor(posX, posY, height, width, ) {  
    
    super(height, width, posX, posY);   

} //CONSTRUCTOR

renderFigura (){

    let svg = document.createElementNS ("http://www.w3.org/2000/svg", "rect");
    let elDiv = document.getElementById ("cuadrados");

    svg.x = posX;
    svg.y = posY;
    svg.height = this.height;
    svg.width = this.width;

    svg.style.fill = "blue";

    svg.id = "testId";

    elDiv.appendChild (svg); //APPENDCHILD LE AGREGA UN NUEVO HIJO A ELDIV


} //RENDERFIGURA

moverFigura ( ) {


} //MOVERFIGURA

} //CLASS

let c = new Cuadrado(100,100,1000,100);
console.log(c.width);
function render()
{
    c.renderFigura();
}