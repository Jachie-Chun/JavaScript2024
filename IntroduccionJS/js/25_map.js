// map

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

carrito.map(producto => console.log(`Producto: ${producto.nombre} y su precio es de ${producto.precio}`));

const array = carrito.map(elemento => `${elemento.nombre} - ${elemento.precio}`);
console.log(array);

/** 

el método "map" se utiliza para crear un "nuevo array" a partir de aplicar una función a cada elemento de un array existente. A diferencia de  "forEach", que solo ejecuta una función para cada elemento, "map" devuelve un nuevo array con los resultados de esa función aplicada a cada elemento.

*/

// sintaxis

/** 

const nuevoArray = array.map(function(elemento, indice, array){
    //codigo a ejecutar
    return resultado;
});

1.Elemento: El valor actual del elemento que se está procesando en el array.
2.Indice(opcional): La posición del elemento actual en el array.
3.Array(opcional): El array original que se está recorriendo.
3.Return: Lo que devuelvas en el "return" se convertirá en el valor del nuevo array para esa posición.

*/

// Ejemplo básico

const numero = [1, 2, 3, 4, 5];
const multiplo = numero.map(function(elemento) {
    return elemento * 2;
});
console.log(multiplo);

// usando flecha

const multiplo_1 = numero.map(elemento => elemento * 3);
console.log(multiplo_1);




// convertir un array de objetos

const personas = [
    { nombre: "Juan", edad: 30},
    { nombre: "Ana", edad: 19},
    { nombre: "Luis", edad: 20}
];

const nombres = personas.map(elemento => elemento.nombre);
console.log(nombres);


// consideraciones

/**

1.No midifica el array original: "map" crea un nuevo array sin alterar el original.
2.Debe incluir un "return": si olvidas el "return" dentro de la funcion, el nuevo array tendra valores "undefined".
3.Es útil cuando necesita transformar datos: "map" es ideal cuando quieres aplicar una transformación y obtener un array nuevo, sin moficar el existente.

En resumen, "map" es una herramienta poderosa y común en JavaScript cuando necesitas transformar datos, ya que facilita crear arrys modificados o derivados de los datos originales.

*/