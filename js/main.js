// VARIABLES GLOBALES
let manzanas = 0;
let peras = 0;
let ciruelas = 0;

// Bienvenida
function bienvenida () {
    alert ("¡Bienvenido/a a nuestra página!")
}
bienvenida ()

// Elegir productos
let pregunta= prompt("¿Desea comprar algo?")
    console.log(pregunta);

if (pregunta === "si") {
        let eleccion = prompt ("Por favor seleccione uno");
    console.log(eleccion);

switch (eleccion) {
    case "Manzanas":
        alert("manzanas rojas o verdes");
    break;
    case "Peras": 
        console.log("blanquilla o william");
    break;
    case "Ciruelas":
        console.log("disculpe, no hay stock")
    break;
    default:
        console.log("no se reconoce el producto")
    }

} else {
        let respuesta = alert ("¡Gracias por visitarnos!");
    console.log(respuesta);
}








