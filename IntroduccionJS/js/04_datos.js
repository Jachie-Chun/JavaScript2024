// string o cadena de texto
const producto = "Monitor de 24 pulgadas";
console.log(producto);
console.log(typeof producto);

// constructor String
const genero = String('Masculino'); 
console.log(genero);
console.log(typeof genero);

const marca = new String('Nike');
console.log(marca);
console.log(typeof marca);

// metodos
const frase = 'Primero resuleve el problema, después escribe el código';  

// length cuenta el número de elementos en un array o el número de caracteres en una cadena.
console.log(frase.length);

// IndexOf se utiliza para buscar la primera posición
console.log(frase.indexOf('problema'));
console.log(frase.indexOf('Cocoa')); // -1

// Includes (retorna true o false)
console.log(frase.includes('problema'));
console.log(frase.includes('Cocoa'));

