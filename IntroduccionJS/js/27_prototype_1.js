
// Ejercicio_1

// bibleoteca de libros 

/*

Crear un constructor llamado "Libro" que tenga las siguientes propiedades:

titulo(título de libro),
autor(autor del libro),
año(año de publicación).

*/

// Luego, has lo siguiente:

/*

1.Usa "prototype" para agregar un método llamado "detalles" que muestre un mensaje como:

"EL libro 'Ciene años de soledad' fue escrito por Gabriel García Márquez en 1967 "

2.Crea varios objetos del tipo "Libro" y llama al método "detalles" para verificar que funciona correctamente.

3.Agregar otro método al prototipo llamado "edad" que calcule y devuela cuántos años han pasado desde que el libro fue publicado.

*/

function Libro(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
}


// Método para mostrar los detalles del libro

Libro.prototype.detalles = function() {
   console.log(`El libro ${this.titulo} fue escrito por ${this.autor} en ${this.año}`);
}

// Método para calcular la edad del libro

Libro.prototype.edad = function() {
    const actualAño = new Date().getFullYear();
    // new Date() Crea un nuevo objeto Date que representa la fecha y hora actuales
    // .getFullYear() Este método del objeto Date extrae el año de la fecha actual y lo asigna a const = actualAño 
    return actualAño - this.año;
}

// instancias 

const libro1 = new Libro('Cien años de soledad', 'Gabriel García', 1967);

const libro2 = new Libro('1984', 'George Orwell', 1949);

// Uso de métodos

libro1.detalles();
// El libro 'Cien años de soledad' fue escrito por Gabriel García Márquez en 1967.

console.log(`El libro tiene ${libro1.edad()} años`);
// El libro tiene 57 años.

libro2.detalles();
// El libro '1984' fue escrito por George Orwell en 1949

console.log(`El libro tiene ${libro2.edad()} años.`);
// El libro tiene 75 años.



// Ejercicio_2

// Sistema de cuentas bancarias

/*

Crea un constructor llamado CuentaBancaria con las siguientes propiedades:

titular(nombre del titual de la cuenta),
saldo(saldo inicial de la cuenta).

*/

// Usar prototype para hacer lo siguiente:

/*

1.Agregar un método llamado "depositar" que reciba un "monto" y lo sume al saldo de la cuenta. Además, debe mostrar un mensaje como:

"Depósito exsitoso. Nuevo saldo: $1000."

2.Agregar un método llamado "retirar" que reciba un monto y lo reste del saldo. Si el monto es mayor que el saldo, muestra un mensaje como:

"Fondos insuficientes. Saldo disponible: $500."

3.Agregar un método llamado "consultar" que simplemente muestre el saldo actual de la cuenta en un mensaje como:

"El saldo actual es: $800."

*/


// Definir la función constructora CuentaBancaria
function CuentaBancaria(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
}

// Agregar el método depositar al prototipo
CuentaBancaria.prototype.depositar = function(monto) {
    this.saldo += monto;
    console.log(`Deposito exsitoso. Nuevo saldo: $${this.saldo}.`)
};

// Agregar el método retirar al prototipo
CuentaBancaria.prototype.retirar = function(monto) {
    //  El método tomo un paramentro "monto", qure representa a la cantidad de dinero que desea retirar
    if(monto > this.saldo) {
        // Si el "monto" es mayor(>) que el "saldo" actual de la cuenta
        console.log(`Fondo insuficientes. Saldo disponible: $${this.saldo}.`)
    } else {
        this.saldo -= monto;
        // Si el "monto" es menor o igual al "saldo" actual, se resta el "monto" del "saldo"
        console.log(`Retiro exitoso. Nuevo saldo: $${this.saldo}.`)
    }
};

// Agregar el método consultar al prototipo
CuentaBancaria.prototype.consultar = function() {
    console.log(`El saldo actual es: $${this.saldo}.`)
};

// Instancia
const cuenta1 = new CuentaBancaria('Gonzalo', 500);

// metodos
cuenta1.depositar(300);
// Depósito exitoso. Nuevo saldo: $800

cuenta1.retirar(100);
// Retiro exitoso. Nuevo saldo: $700

cuenta1.retirar(900);
// Fondos insuficientes. Saldo disponible: $200

cuenta1.consultar();
// El saldo actual es: $200


// Ejercicio_3

/*

Crear un constructor llamado "Productor" que tenga las siguientes propiedades:

nombre(nombre del producto),
precio(precio del producto),
cantidad(cantidad disponible en el inventario).

1.Usar "prototype" para agregar un método llamado "comprar", que que reciba un cantidad como argumento:
     a.Si hay suficiente inventario, debe descontar esa cantidad y mostrar un mensaje como:
     "Has comprado 3 unidades de 'Laptop'. Quedan 7 unidades en invetario."
     b.Si no hay suficiente invetario,  debe mostrar un mensaje como:
     "No hay suficente inventario. Solo queda 2 unidades de 'Laptop'."

2.Agregar otro método llamado "suplir", que reciba una cantidad y la suma al inventario, mostrando un mensaje como:
"Se han añadido 10 unidades de 'Laptop'. Nuevo inventario: 20 unidades."

3.Agrega un método llamdo "verificar", que indique si el producto esta diponible(cantidad mayor a 0) agotado.
*/

// Definir la funcion constructora Producto
function Producto(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
}

// Agregar el método comprar
Producto.prototype.comprar = function(total) {
    // total representa la cantidad de unidades que se desea comprar
    if(total <= this.cantidad) {
        // Verifica(v o f) si la cantidad solicitada(total) es menor o igual(<=) a la cantidad disponible en el inventario(this.cantidad)
        this.cantidad -= total;
        /*
        this.cantidad = this.cantidad - total
        */
        console.log(`Has comprado ${total} de '${this.nombre}'. Quedan ${this.cantidad} unidades en inventario.`)
    } else {
        console.log(`No hay suficiente inventario. Solo quedan ${this.cantidad} unidades de '${this.nombre}'.`)
    }
}

// Agrega método suplir
Producto.prototype.suplir = function(total) {
    // total representa la cantidad de unidades que se desea reabastecer a inventario
    this.cantidad += total;
    console.log(`Se han añadido ${total} unidades de '${this.nombre}'. Nuevo inventario: ${this.cantidad} unidades.`)
}

// Agregar método verificar
Producto.prototype.verificar = function() {
    
}

// Instancia
const producto1 = new Producto('Laptop', 1000, 10);
const producto2 = new Producto('Celular', 500, 0);

// Intentar comprar productos
producto1.comprar(9);
// Has comprado 9 unidades de 'Laptop'. Quedan 1 unidades en inventario.

producto1.comprar(8);
// No hay suficiente inventario. Solo quedan 1 unidades de 'Laptop'.

// producto2.verificar();
// Producto 'Celular' está agotado.

// Reabastecer y verificar stock
producto1.suplir(15);
// Se han añadido 15 unidades de 'Celular'. Nuevo inventario: 15 unidades.

// producto2.verificar();
// // Producto 'Celular' está disponible.


