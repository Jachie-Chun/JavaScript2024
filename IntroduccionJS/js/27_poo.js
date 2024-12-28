// programacion en orientacion a objetos (POO) 

// object literal

const usuario = {
    nombre: 'Laura',
    precio: 13
};
console.log(usuario);

// object constructor ( function )

// function

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto01 = new Producto('Monitor LG', 250);

console.log(producto01);

//

const cliente = {
    nombre: 'Gonzalo Martin',
    edad: 31,
    signo: 'Libra',
    celular: 925484762,
    ubicacion: function (gps) {
        return `Su ubicacion es ${gps}`
    },
    seguro: function (afp) {
        if(afp) {
            return `Tiene seguro: ${afp}`;
        } else {
            return `No tiene seguro registrado`;
        }
    },
    estudios: null,
    salario: 1499
};

console.log(cliente.seguro(''));


const ubicacionGps = cliente.ubicacion("Tamblo real 325-A");
console.log(ubicacionGps);

const verificacion = cliente.nombre === 'Gonzalo Martin';
console.log(verificacion);

cliente.estudios = 'Secundaria Completa';
console.log(cliente);
console.log(cliente.estudios);




