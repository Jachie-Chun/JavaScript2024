// arrays

const numeros = [10,20,30,40,50];
console.log(numeros);
console.log(typeof numeros);
console.log(numeros[3]);  // acceder al valor
console.log(numeros[2]);

numeros.forEach(numero => {
    console.log(numero);
});

// ejmplo 1

const array = ["hola", 10, true, "si", null, {nombre: "Programador"}, [1,2,3]];
console.log(array);


// constructor

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');

meses.pop();  // elimina el final
meses.shift();  // elimina el inicio

console.log(meses);

console.log(meses.length);  // 5

// metodos

const días = ['Martes', 'Miercoles', 'Jueves'];


días.unshift('Lunes');  // agrega al inicio
días.push('Viernes');  // agrega  al final
días.splice(0, 2);  // elimina en un rango lunes al martes 

const extra = [...días, 'Sabado']; // agrega al final 
const extra_1 = ['Domingo', ...días];  // agrega al inicio

console.log(días);
console.log(typeof días);
console.log(extra);
console.log(extra_1);

