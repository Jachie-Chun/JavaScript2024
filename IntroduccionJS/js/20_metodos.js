// metodos de propiedad

const play = {
    cancion : function(id) {
        console.log(`Repoduciendo cancion ID: ${id}`)
    },
    crear : function(nombre) {
        console.log(`Creando playlist: ${nombre}`)
    }
}
play.cancion(2001);
play.crear(`Mas alla del sol`);

// ejmeplo

const persona = {
    nombre: "Gonzalo",
    edad: 30,
    saludar: function() {
        return `Ingrese su DNI: ${this.nombre}`;
    },
    sumar: function() {
        this.edad += 1;
        return `Su edad es de: ${this.edad} años`;
    }
};

console.log(persona.saludar());
console.log(persona.sumar());