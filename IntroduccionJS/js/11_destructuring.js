// forma antigua

const país = {
   nombre : "Perú",
   capital : "Lima",
   ONU : true,
   economia : "nuevo sol",
   habitantes : 3.5e7,
}


const moneda = país.economia;
 console.log(país);
 console.log (moneda);



// destructuring 

 
const distrito = {
    nombre : "Chorrillos",
    fundacion : "2 de enero de 1857",
    alcade: true,
}

const {alcade, nombre } = distrito;


console.log(distrito);
console.log(alcade);
console.log(nombre);
