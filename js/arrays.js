console.log ('Arrays');

// A diferencia de una variable, que sólo puede guardar un dato a la vez, los Arrays o 'arreglos'son variables multidimensionales, es decir, que podemos almacenar datos en ellas en varias dimensiones, como si se tratase de una estantería, con varias baldas y varios niveles.

//Arrays bidimensionales

let arrayEjemplo=[ 'uno', 'dos', 'tres','cuatro'];
//Para acceder a los datos de un array, tenemos que indicar la posición del elemento al que queremos acceder

let texto= arrayEjemplo [3];
console.log(texto);

//crear arrays

//manualmente 
const alumnas= ['Arantxa', 'Aleja', ' Nicole'];
// Al declarar con 'Const' el array se hará constante y no se podra modificar, es una buena practica de programación trabajar con arrays constantes.


// a partir de variables
//Por qué usar arrays?
//Imaginemos que tenemos una lista de cualquier tipo de items (coches, personas, animales...)

let alumna1='Cristina';
let alumna2= ' Zaloa';
let alumna3= ' Susana';
let alumna4= ' Natalia';

//Ahora imagina , que tienes que recorrer la lista para encontrar una alumna en específico, pero en vez de unas pocas, tuvieras 300

// La solución es un array

// Un array puede guardar muchos valores usando un solo nombre, y puedes acceder a estos valores mediante una referencia al índice de éstos



const listaAlumnas= [ alumna1, alumna2, alumna3, alumna4];
console.log(listaAlumnas);

//Imprimir sólo un elemento del array:
console.log (listaAlumnas [3]);

console.log (listaAlumnas [1]+ " y" + listaAlumnas [2]);

//También podemos crear un array y posterior añadir los ítems:

const coches=[];
coches[0]="Mercedes Benz";
coches [1]="Toyota"
coches[2]="Mitsubishi"

console.log(coches);
coches[0]="Hyundai";

console.log (coches);

console.log (listaAlumnas.toString()); // toString me devuelve el nombre sin ponermelo en rojo

// La propiedad lenght (longitud)
// Se refiere a la longitud de la lista de ítems de un array

console.log( listaAlumnas.length);

// En este caso me imprime el ultimo valor 

//Acceder al primer elemento de un array

console.log (listaAlumnas [0])

//Acceder al ultimo elemento de un array

console.log (listaAlumnas[listaAlumnas.length-1])

//Dentro de los corchetes:
//[ listaAlumnas.length=4]
//Luego le restamos (1) para que el número coincida con el último índice, en este caso sería 3

const paises=[];

paises[0]='Colombia';
paises[1]='España';
paises[2]='Bolivia';
paises[3]='Tailandia';

console.log(paises);





















