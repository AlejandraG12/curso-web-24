// REPASO

//variables

//son contendores para guardar datos y acceder a ellos màs adelante 
//tipos de datos:

//strings -'paquita'
//Números -2.50
//Booleanos-true/false

// Declarar variables 
//Alcance bloque
//let, const
//Alcance global
//var,


let x = 15;
let z = 'zeta'; // cuando declaramos desde fuera adquiere alcance global (se puede utilizar en ambas partes)

{

    let x = 30; // si se declara dentro no se puede acceder desde fuera 
    //Alcance de bloquer, no se puede acceder desde fuera

    console.log('x dentro del bloque: ' + x);
    console.log('z dentro del bloque: ' + z);

    var y = 20; // con esta variable si pùedo acceder desde fuera 
    z = 'equis'; // cambiamos el valor de z 


}

console.log('x fuera del bloque: ' + x);
console.log('y fuera del bloque: ' + y);
console.log('z fuera del bloque: ' + z);

// z continua cambiando 

let = 'uvedoble'; {

    {
        console.log('x: ' + x);
    }
}

{
    var y = 100;
    console.log('x: ' + x);

}

u = 'Roman'
console.log('u: ' + u)

const fija = 'Jonathan';

{

    //fija ='aleja'; -> daria error por intentar cambiar una constante

    const fija = 'Aleja';

    // no daria error por que la estamos declarando a nivel de bloque 
    // y por lo tanto serián dos variables diferentes 
    console.log('var constante: ' + fija);


}
console.log('var constante: ' + fija);

//arrays 

// almacenan más de un dato
// Se accede a los datos mediante un INDICE NUMERADO

const items = [];
// Por buenas practicas se nombra con const y en plural 
//Asignación de los datos :
items[0] = 'arriba';
items[1] = 'abajo';
items[2] = 'centro';

//Acceso a los datos 

console.log(items[0]);

const coches = ['Sedán', 'Berlina', 'Deportivo'];
console.log(coches[1]);

//métodos y propiedades
// Las propiedades son caracteristicas del objeto en cuestión, este caso un array:

console.log(coches.length);// accede a la longitud del array
console.log(coches[2].length);// accede a la longitud del item


//Los métodos son operaciones internas que nos facilitan tareas a la hora de trabajar con los datos/objetos

// método para transformar un array en un string

let listaCoches = coches.toString();
console.log(listaCoches);
listaCoches = coches.join('><');
console.log(listaCoches);





//objetos

let fecha = new Date();

//para trabajar con el objeto Date () es necesario crear una instancia (una copia) para de esta manera poder modificarla- para modificar datos es necesario guardar una copia

//una propiedad del objeto fecha:
console.log(fecha); // Accedemos al objeto entero

console.log(fecha.getDay());//Accedemos sólamente al día de la semana -nos devuelve el 1 por que el día 0 es el domingo 










//Bucles

//Funciones 

// crear una función que al darle un nombre, nos devuelva un saludo con ese nombre 

function saludo(nombre) {
    return 'Hola, ' + nombre;

}

console.log(saludo('Arantxa'));

//Función que al ingresar dos números, nos los devuelve multiplicados

function multiplicar(x, y) {


    return x * y;
}

console.log(multiplicar(24, 6));


//crear una función a la que al ingresarle nuestro año de nacimiento nos retorna un saludo , diciendonos los años que tenemos 


function mensajeEdad(añoNacimiento) {

    let edad = new Date().getFullYear() - añoNacimiento;

    return 'Hola, tienes ' + edad + ' años';

}

console.log(mensajeEdad(1991))


// Crear una función a la que al ingresarle un número, nos devuelva un conteo desde el 1 hasta ese número 

function conteo(x) {

    let mensaje = "";




    for (let i =1; i <= x; i++) {

        mensaje += i + ", ";



    }

    return mensaje;
}

console.log(conteo(15));








//if/else

//Switch

// Métodos

// Propiedades 
















