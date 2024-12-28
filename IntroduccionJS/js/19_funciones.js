// return

function sumar(n1, n2) {
    return n1 + n2;
};

const resultado = sumar(2, 3);
console.log(resultado);


// ejemplo


let total = 0;

function carrito(precio) {
    return total += precio;
};

function igv(total) {
    return 1.75 * total;
};

total = carrito(100);
total = carrito(13);
total = carrito(0);

console.log(total);

const pago = igv(total);

console.log(`El total a pagar con impuestos es de: ${pago}`);





