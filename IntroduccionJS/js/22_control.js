// if

/*

if(condicion) {
   // codigo a ejecutar si la condicion es verdadera 
}

*/

const puntaje = 100;
if(puntaje == 100) {
    console.log('Si');
}

let edad = 18;
if(edad = 19) {
    console.log("eres mayor de edad.");
}

// else  

/*

if(condicion) {
  // condicion verdadera
} else {
  // condicion falsa
}

*/

let año = 1992;
if(año >= 1994) {
    console.log("eres del 1993");
} else {
    console.log("este es del 1994");
}
 
//

const efectivo = 1000;
const carrito =  800;

if(efectivo < carrito) {
    console.log('disponible');
} else {
    console.log('no disponible');
}

// else if

/*

if(condicion) {
  // condicion true
} else if(condicion) {
  // condicion adicional
} else {
  // condicion false
}

*/

let edad_alumno = 20;
if(edad_alumno < 18) {
    console.log('Eres de menor de edad.');
} else  if(edad_alumno === 18) {
    console.log('Tienes 18 años.');
} else {
    console.log('Eres mayor de edad.');
}