// "use strict";


// Methods

// Object.freeze()  *Congela la instancia*

const producto_1 = {
    nombre : "Pollo Oferta",
    precio : 73,
    disponible : true,
}

Object.freeze(producto_1);

producto_1.precio = 50;
delete producto_1.precio;

console.log(producto_1);  // instancia
console.log(typeof producto_1);   // object
console.log(Object.isFrozen(producto_1));  // true


// Object.seal()   *Modifica*

const producto_2 = {
    nombre : "Anticuchos",
    precio : 30,
    disponible : true,
}

Object.seal(producto_2);

producto_2.nombre = "Salchipapa";
delete producto_2.precio;

console.log(producto_2);
console.log(typeof producto_2);
console.log(Object.isSealed(producto_2));




