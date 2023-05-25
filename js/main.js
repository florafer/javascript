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
let pregunta= prompt("¿Desea comprar algo?");
    console.log(pregunta);

if (pregunta === "si") {
        let eleccion = prompt ("Por favor seleccione uno  \n 1. manzanas \n 2. peras \n 3. ciruelas");

switch (eleccion) {
    case "1":
        alert("Manzanas rojas o verdes");
    break;
    case "2": 
        alert("Blanquilla o william");
    break;
    case "3":
        alert("Disculpe, no hay stock")
    break;
    default:
        alert("No se reconoce el producto")
        }

} else {
        let respuesta = alert ("¡Gracias por visitarnos!");
    console.log(respuesta);
}

// IDEA PARA OBJETOS Y FUNCIONES

let continuar = prompt ("¿Desea ver los productos que se incorporarán pronto?")
console.log(continuar); 

if (continuar === "si") {

// uso de clases
class Extra {
    constructor (nombre, precio){
        this.nombre = nombre.toUpperCase ();
        this.precio = parseFloat (precio);
        this.sinStock = false;
    }
    sumaImpuesto () {
        this.precio = this.precio * 0.8;
    }
    vender () {
        this.vendido = true;
    }
}
const producto1 = new Extra ("frutillas", "1000");
const producto2 = new Extra ("limones", "700");
producto1.sumaImpuesto ();
producto2.sumaImpuesto ();
producto1.sinStock ();

console.log(producto1.nombre);
console.log(producto1.precio);
console.log(producto2.nombre);
console.log(producto2.precio);

} else {
        let respuesta1 = alert ("¡Hasta luego!");
    console.log(respuesta1);
} 

// IDEA ARRAY

let ensalada1 = {
    nombre: "Wardolf",
    ingredientes: "Manzana y apio",
    origen: "USA",
};

let nombre = ensalada1 ["nombre"]; 
let ingredientes = ensalada1 ["ingredientes"];
let origen = ensalada1 ["origen"];

let frase = "El nombre de la ensalada es: <b> ${nombre} </b> <br>";
let frase1 = "Los ingredientes son: <b> ${ingredientes} </b> <br>";
let frase2 = "Proviene de: <b> ${origen} </b> <br> ";

document.write(frase, frase1, frase2);