// funcion

// declaracion de la funcion


function sumar(a, b) {
    return a + b;
}
let resultado = sumar(3, 5);
console.log(resultado);


function restar() {
    console.log(3 - 4);
}
restar()

// Ejemplo #1

const carro = {
    marca : "Toyota",
    modelo : "GTX",
    año : 1993,
    color : null,
};

console.log(carro);
console.log(carro.marca);
console.log(carro.color);

function actulizar(cambiar) {
    cambiar.marca = "Subaru";
    cambiar = null;
}

actulizar(carro);
console.log(carro.marca);
delete carro.color;
console.log(carro);


// declaracion de fuciones

 function multiplicar() {
     console.log(3 * 2)
}
multiplicar()

// expresion de la funcion

const dividir = function() {
    console.log(12 / 3);
}
dividir()

// hosting



