
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

// ForEach

carrito.forEach( producto => console.log(producto.nombre));

/**

sintaxis

array.forEach(function(elemento, indice, array) {
    // código a ejecutar
});

1.Elemento: Representa el elemento actual que se esta procesando en el array.
2.Indice(opcional): Representa el índie del elemento actual.
3.array(opcional): Representa eñ array sobre el cual se esta llamando "forEach".

*/

// Consideraciones

/**

1."forEach" no retorna nada. Si quieres crear un nuevo array basado en los valores, considera usar "map".
2."forEach" no se puede detener o salir antes de recorrer todos los elementos del array.

*/

// ejemplo básico

const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
    console.log(numero);
});

// ejemplo con índice(numeracion)

const frutas = ["manzana", "banana", "naranja"];
frutas.forEach(function(fruta, indice){
    console.log(`indice ${indice}: ${fruta}`);
});

// con flecha

const distrito = ["Chorrillos", "San Luis", "Lurin"];
distrito.forEach((nombre, indice) => console.log(`Lugar ${indice + 1}: ${nombre}`));

