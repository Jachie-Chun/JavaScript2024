// Arrow " => "

// sintaxis

const sumar = (a, b) => a + b;
console.log(sumar(3, 4));

// sin parametros

const saludar = () => "Hola Mariwanos!";
console.log(saludar());

//  multiples

const calcular = (base, altura) => {
    const area = base * altura;
    return area;
};
console.log(calcular(5, 10));

// array

const numeros = [1, 2, 3, 4, 5];
const operecion = numeros.map(n => n * 2);
console.log(operecion);

// this

const persona = {
    nombre: "Laura",
    saludar: function() {
        const mostrar = () => {
            console.log(`Hola, soy ${this.nombre}`);
        };
        mostrar();
    }
};

persona.saludar();

//  forEach

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

meses.forEach( mes => {
    if(mes == 'Marzo') {
        console.log('Hola')
    }
});

// mas metodos

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

// some

resultado = carrito.some(producto => producto.nombre === 'Monitor LG');
console.log(resultado);

// reduce

resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado);

// filter

resultado = carrito.filter( producto => producto.precio < 100);
console.log(resultado);

resultado = carrito.filter( producto => producto.nombre !== 'XXX');
console.log(resultado);
