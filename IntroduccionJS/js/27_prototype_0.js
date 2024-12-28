/**

es  un mecanismo  que permite a los objetos y funciones compartir propiedades y métodos.

*/


// object constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Monitor LG', 250);
const producto3 = new Producto('Laptop', 300);

console.log(producto2);
console.log(producto3);


// Evita crear muchas funciones

function formatear(producto) {
    return `El producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}

console.log(formatear(producto2));
console.log(formatear(producto3));

// con 2 objetos

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const cliente = new Cliente('Gonzalo', 'Delfin Yataco');

console.log(cliente);

function ejemplo(datos) {
    return `La persona que buscas es: ${datos.nombre} ${datos.apellido}`;
}

console.log(ejemplo(cliente));


// uso de prototype  <---

function Pais(capital, moneda) {
    this.capital = capital;
    this.moneda = moneda;
}


// new comparte el mismo prototipo, lo q ahorra memoria porque no se copia el metodo en cada instacia 

const america = new Pais('Lima', 'Nuevo Sol');

console.log(america);


// define un método compartido por todas las "instancias" de Pais

Pais.prototype.resultado = function() {
    return `La capital es ${this.capital} y su moneda es ${this.moneda}`;
}

console.log(america.resultado());  // busca el metodo en el objeto Pais en el prototipo

