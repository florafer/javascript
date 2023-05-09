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
    case "manzanas":
        alert("Manzanas rojas o verdes");
    break;
    case "peras": 
        console.log("Blanquilla o william");
    break;
    case "ciruelas":
        console.log("Disculpe, no hay stock")
    break;
    default:
        console.log("No se reconoce el producto")
    }

} else {
        let respuesta = alert ("¡Gracias por visitarnos!");
    console.log(respuesta);
}








