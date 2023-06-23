
const btnSearch = document.querySelector("#btnSearch"),
        inputIngreso = document.querySelector("inputIngreso");

inputIngreso.addEventListener("click", ()=> {
    console.log(inputNombre);
});

// Bienvenida  
function bienvenida () {
    console.log("¡Bienvenido/a a nuestra página!");
}
bienvenida ()

// Elegir productos

const inputDatos = document.getElementById("datoSeleccionado");
const btn= document.getElementById("btn");

btn.addEventListener("click", () => {
    switch (inputDatos.value) {
        case "1":
            console.log("Manzanas rojas o verdes");
            break;
        case "2": 
            console.log("Blanquilla o william");
            break;
        case "3":
            console.log("Disculpe, no hay stock")
            break;
        default:
            console.log("No se reconoce el producto")
            }
})

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

//recorrido array
const mercaderia = []

console.log(mercaderia);

let limite = 1;
do {
let nombre = prompt("Ingresa nombre de la fruta")
let precio = parseInt(prompt("Ingresa el precio de la fruta"));
let stock = prompt("Ingresar la cantidad de cajones de fruta")
// PREGUNTAR let calculo =prompt("su total sería de" + (fruta1 precio))

mercaderia.push(new Fruta (nombre, precio, stock))

} while (mercaderia.length != limite)
console.log(mercaderia.length);

// funciones de orden superior

//filter 1 ACCESIBLES
let accesibles = mercaderia.filter(el=>{
    return el.precio <= 1500
})

console.log(accesibles);

//filter 2 CAROS
let caros = mercaderia.filter(el=>{
    return el.precio >= 1500
})

// devuelve valores booleanos, true or false, en este caso true
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
        precio: ((nuevoPrecio.precio * porcentaje)/100).toFixed(2),
        stock: nuevoPrecio.stock,
    }
})

console.log(precioDescuento);

// INTERPOLACION Para Frutillas, Limones y Uvas
let concatenacion = `Producto: ${fruta.nombre}, precio: $ ${fruta.precio}`;
let concatenacion1 = `Producto: ${fruta1.nombre}, precio: $ ${fruta1.precio}`;
let concatenacion2 = `Producto: ${fruta2.nombre}, precio: $ ${fruta2.precio}`;

console.log(concatenacion);
console.log(concatenacion1);
console.log(concatenacion2);