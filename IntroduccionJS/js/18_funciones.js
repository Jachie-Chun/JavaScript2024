// parametros y arguementos

function sumar(parametro_1, parametro_2) {
    console.log(parametro_1 + parametro_2);
};

sumar(13, 7);  // argumento


// declaracion con const

const restar = function(n1, n2) {
    console.log(n1 - n2);
};

restar(100, 50);


// parametros por defaul

const saludar = function( nombre = 'Invitado') {
    console.log(`Hola, ${nombre}`);
}

saludar();
saludar("Mayra");


// con arrow

const total = (precio = 100, descuento = 0.1) => {
    console.log( precio - ( precio * descuento ));
}

total();    // por defecto  90
total(200);  // por defecto 180
total(200, 0.2);  // 160


