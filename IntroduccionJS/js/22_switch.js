// switch 


/**

switch (expresión) {
  case valor1:
    // Código si la expresión es igual a valor1
    break;
  case valor2:
    // Código si la expresión es igual a valor2
    break;
  default:
    // Código si no coincide con ningún case
}

*expresion: Es el valor que se evalúa.
*case valor1 y case valor2: Son posibles valores que puede tomar la expresión. Si coincide con uno de estos valores, se ejecuta el bloque de codigo correspondiente.
*break: Sirve para salir del "switch" despues de ejecutar el bloque del codigo correspondiente. Si no se pone, el codigo sigue ejecutandose hasta el final del bloque "switch".
*defaul: Es un bloque opcional que ejecuta si ningun "case" coincide el valor de la expresión.

*/

const pago = 'efectivo';

switch (pago) {
    case 'tarjeta':
        console.log('Pagastes con tarjeta.');
        break;
    case 'cheque':
        console.log('El usuario va a pagar con cheque.')
        break;
    case 'efectivo':
        console.log('Pagastes con efectivo');
        break;
    default:
        console.log('Aun no ha pagado');
        break;
};



let dia = 3;
 
switch (dia) {
    case 1:
        console.log("Hoy es lunes");
        break;
    case 2:
        console.log("hoy es martes");
        break;
    case 3:
        console.log("hoy es miercoles");
        break;
    case 4:
        console.log("hoy es jueves");
        break;
    default:
        console.log("dia no valido");
        break;
};