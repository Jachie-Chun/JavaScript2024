// for

/**
 
for (inicialización; condición; incremento) {
    // Código a ejecutar en cada iteración
}

*inicializacion: Es el primer paso y se ejecuta una sola vez antes de que el bucle empiece. Aqui puedes declarar e inicializar una variable, que generalmente se usa como indice o contador.
*condicion: se evalua antes de cada "iteracion" del blucle. Si la condicion es TRUE, el bucle continuará; si es FALSE, se detendrá.
*incremento/decremento: Es el paso que se realiza al final de cada iteración, generalmente para modificar la variable de control(contador y índice) y 

*/

for(let i=1; i <= 10; i++) {
    console.log(i);
}

//

for(let i=1; i <= 10; i++) {
    if(i % 2 === 0) {
        console.log(`El número es ${i} es PAR`);
    } else {
        console.log(`El número es ${i} es IMPAR`);
    }
}

//

let frutas = ["manzana", "banana", "cereza"];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);  // Imprime cada fruta del arreglo
}


// while "tiene que revisar que la condicion se cumpla para que se pueda ejecutar"

let contador = 0;  // inicializamos el contador en 0

while(contador < 5) {  // EL blucle continuará mientras el contador sea menor que 5
    console.log('El contador es: ' + contador); // imprime el valor actual del contador
    contador++;  //  imcrementa el contador de 1 en cada iteración
}

/**
1. El bucle "while" ejecuta código dentro de sus llaves mientras la condicion "(contador < 5)" sea TRUE.
2. Inicializamos la variable "contador" en 0 y luego incrementamos su valor en cada vuelta de bucle.
3.El bucle se detiene cuando el valor de "contador" llega a 5, ya que la condicion "contador < 5" ya no es verdadera.
*/






// do while "la condicion que se ejecuta 1 vez aunque la condicion no se cumpla"

/**

do {
    // código que se ejecuta
} while(condición);

*/

let numero = 0;

do {
    console.log("El número es: " + numero);
    numero++;
} while (numero < 5);

/**

El  bucle "do...while" es útil cuando necesitas ejecutar un bloque de código al menos una vez, sin importar si la condición es verdadera o falsa en le primera evaluación.

*/






