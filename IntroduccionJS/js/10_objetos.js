// objetos

const producto = 'Monitor LG';
const precio = 250;
const disponible = true;

const formulario = {
    producto : "Monitor LG",
    precio : 250,
    disponible : true,
    oferta : false,
    tienda : "Plaza Lima sur",
};

console.log(producto);
console.log(formulario);
console.log(formulario.precio);
console.log(formulario.oferta);
console.log(formulario['disponible']);
console.log(formulario['tienda']);

// modificar objetos 

const delivery = {
    nombre : "Salchipapa El Rey",
    precio : 16,
    disponible : true,
    sede : "Santiago de Surco",
    imagen : "imagen.jpg",
}

delivery.oferta = "Sin Oferta";
delete delivery.imagen;
console.log(delivery);



