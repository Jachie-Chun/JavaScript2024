// array methods

const carrito = [
    { nombre : 'Monitor LG', precio: 250 },
    { nombre : 'Teclador Razor', precio: 100 },
    { nombre : 'Audifonos Razor', precio:40 },
    { nombre : 'Mouse Sony', precio: 25 },
    { nombre : 'Placa RTX', precio: 600 },
    { nombre : 'Memoria Ram', precio: 125} ,
    { nombre : 'Intel 9', precio: 400},
    { nombre : '', precio: 0}
];

// filter 

const precio_menor = carrito.filter(menor => menor.precio < 100);
console.log(precio_menor);


// forEach 

carrito.forEach(tienda => {
    console.log(tienda);  // todo el array
});


// some antiguo

producto = carrito.some(function(resultado) {
    return resultado.nombre === 'Monitor LG'
});
console.log(producto);  // true


// some con arrow function

const verificacion = carrito.some(buscar => buscar.nombre === 'Intel 9');
console.log(verificacion);  // true
 

// some palabra especifica

const palabra = carrito.some(clave => clave.nombre.includes('Sony'));
console.log(palabra); // true
console.log(typeof carrito);  // object
console.log(typeof { nombre : 'Audifonos Razor', precio:40 });  // object

const vacio = carrito.some(input => input.nombre === '');
console.log(vacio);  // true



// reduce sumar todos los elementos

const suma = carrito.reduce((total, producto) => total + producto.precio, 0 ) ;
console.log(typeof suma);  // number
console.log(suma);     //  1540
 

// Includes

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
const resultado = meses.includes('Octubre');
console.log(resultado); // false

