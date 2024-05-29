console.log('Objetos en JavaScript');

// En el mundo real los objetos son cosas como:casas, coches, personas, animales....

//Por ejemplo una moto. Es un objeto que tiene distintas propiedades. Por ejemplo:marca, color, peso, modelo, potencia...

//Todas las motos tienen el mismo tipo de propiedades, pero el valor de estas varía según la moto.

//Y tambien tienen método. Los métodos son acciones que los objetos pueden ejecutar.

//volviendo al caso de la moto. Una moto puede arrrancar, acelerar, frenar, detenerse.

//Todas las motos tienen los mismos métodos, pero èstos se ejecutan en distintos momentos.

// representación de las propiedades y los métodos:

//moto.peso , moto.color, --------moto.arrancar(), motor.acelerar(), moto.frenar()

//variables.son contenedores para guardar  un valor.

let coche='Fiat';

// Los objetos tambien son variables, pero pueden contener varios valores

//A diferencia de los arrays, que contienen varios valores identificados por un índice númerico , que empieza por 0

//array[0],array[7]....

//Los objetos tienen los índices identificados con un nombre - se declararan con {}

//ejemplo:
const moto= {

    marca:'Yamaha',

    modelo:'Mt-07',

    color:'Blanco',
}

console.log('La marca de la moto es '+ moto.marca)

//crear un objeto y luego asignarle propiedades

const persona={}

persona.nombre='Cristina';
persona.apellido='soba';
persona.edad=35;
persona.colorOjos='Castaño';

console.log (persona);

// Propiedades de un objeto

persona.nombreCompleto=function() {

    return this.nombre + " " + this.apellido
    
}
console.log(persona.nombreCompleto());

// Javascript funciona principalmente con objetos
// Los objetos son contenedores para propiedades y métodos.
// las propiedades son valores con nombre.
// los métodos son funciones guardadas como propiedades.
//Las propiedades pueden ser valores primitivos,funciones o, incluso otros objetos.



