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
producto1.sinStock;

console.log(producto1.nombre);
console.log(producto1.precio);
console.log(producto2.nombre);
console.log(producto2.precio);

} else {
        let respuesta1 = alert ("¡Hasta luego!");
    console.log(respuesta1);
} 

// IDEA ARRAY 
const fruta = { id:1,
    nombre: "frutilla camarosa",
    precio: 2000,
    stock: 5,
};

function Fruta (nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

const fruta1 = { id:2,
    nombre: "limon persa",
    precio: 1500,
    stock: 8,
};

const fruta2 = { id:3, 
    nombre: "uva verde",
    precio: 1750,
    stock: 10,
};

libreria.push(fruta)

//recorrido array
const mercaderia = []

console.log(mercaderia);

let limite = 2;
do {
let nombre = prompt("Ingresa nombre de la fruta")
let precio = prompt("Ingresa el precio de la fruta")
let stock = prompt("Ingresar la cantidad de cajones de fruta")

mercaderia.push(new Fruta (nombre, precio, stock))

} while (mercaderia.length != limite)
console.log(mercaderia.length);

// funciones de orden superior

let total = 0;

//abstraccion
function sumaRango (inicio, fin) {}
let rango = sumaRango(1,10)

//find
let encontrado = mercaderia.find((el)=>{
    return el.nombre.includes("frutillas")
})

console.log(encontrado);

//filter 1
let accesibles = mercaderia.filter(el=>{
    return el.precio <= 1500
})

console.log(accesibles);

//filter 2
let caros = mercaderia.filter(el=>{
    return el.precio >= 1500
})

//some que devuelve valores booleanos, true or false, en este caso true
let existe = mercaderia.some(el=>{
    return el.nombre == "limones"
})

console.log(existe);

// precios con descuento del 15%
var porcentaje = 15; 
const precioDescuento = mercaderia.map(nuevoPrecio=>{
    return {
        id: nuevoPrecio.id,
        nombre: nuevoPrecio.nombre,
        precio: ((nuevoPrecio * porcentaje)/100).toFixed(2),
        stock: nuevoPrecio.stock,
    }
})

console.log(precioDescuento);