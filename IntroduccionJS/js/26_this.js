// this

/**
 
"this"  es una palabra clave especial  que hace referencia al "contexto" en el cual se está ejecutando  una 'función o un bloque de código'. El valor "this" puede variar dependiendo de cómo y dónde se use en el código.

*/

const cliente = {
    nombre: 'Gonzalo',
    apellido: 'Delfín Yataco',
    total: 73.4,
    tarjeta: false,
    voleta: function() {
        console.log(`El cliente ${this.nombre} tiene que pagar ${this.total}`);
    }
}

cliente.voleta();


// Ejemplos 1

class usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona = new usuario('Juan', 30);

persona.saludar();


// Ejemplo 2

const cuenta = {
    numero: "1000334913",
    cantidad: 100,
    deposito(send) {
        this.cantidad = this.cantidad + send
    },
    retiro(send) {
        this.cantidad = this.cantidad - send
    }
}

cuenta.deposito(100);
console.log(cuenta);

cuenta.retiro(13);
console.log(cuenta);

