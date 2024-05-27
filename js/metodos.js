console.log ('Metodos')

//Métodos de string
//obtener la longitud de un string

let texto='ABCDEFGHIJKLMNÑOPQSTUVWXYZ';

let longitud=texto.length;

console.log(longitud);


//ejemplo: comparar las constraseñas de un formulario de registro

let constraseña1;
let constraseña2;

//Una de las condiciones que suelen pedir para las contraseñas es que tenga por lo menos cierta longitud de caracteres

//Supongamos que una pagína requiere que las contraseñas sean de por lo menos 8 caracteres

let longitudRequerida=8;

//El usuario ingresa una contraseña 

constraseña1='12345678';

//ahora comparamos la longitud de la contraseña ingresa el requerimiento

if (constraseña1.length >= longitudRequerida) {

    console.log ('La contraseña es válida')
    
}
else{

console.log ('La contraseña debe tener al menos 8 caracteres');

}

//----------------------------Extraer caracteres---------------------------------------------------------

// con CharArt

texto='Hola Mundo'

let primeraLetra= texto.charAt(0);// charArt Me imprime el valor que le estoy pidiendo 

console.log (primeraLetra);

let ultimaLetra= texto.charAt(texto.length-1);

console.log(ultimaLetra);


let letra=texto.charAt(5);

console.log (letra);


// at()

//En principio funciona igual que charArt():
texto= 'Feliz viernes!';

primeraLetra=texto.at(0);
console.log(primeraLetra);

//Excepto cuando contamos desde el final:
//ChaArt no admite números negativos en el indice pero at() si

ultimaLetra = texto.charAt(-1);
console.log (ultimaLetra); // en este caso me imprime un espacio vacio, por que no lo reconoce

ultimaLetra = texto.at(-1);
console.log (ultimaLetra); 

let letraR=texto.at(-5);
console.log(letraR);

//Un string también se puede leer como un array

letra = texto[6];
console.log(letra);

//--------------Extraer trozos de un string-----------------------

//slice(Inicio, final)
//Retorna un nuevo string usando las posiciones inicial y final como parámetros

texto= "Yogurt, Donettes, Patatas";
let trozo= texto.slice(7, 15);

console.log(trozo)

//Si omitimo el segundo parámetro, slice corta el resto del string:

trozo= texto.slice (7);
console.log (trozo);

//slice () admite valores negativos:

//con valores negativos cuenta desde el final hacía la izquierda

trozo= texto.slice(-7);
console.log (trozo);

trozo= texto.slice(-17,-9);
console.log(trozo);


//-----------------------------TRANSFORMAR UN STRING---------------------------------------

// a mayúsculas:

let textoMayus = texto.toUpperCase();
console.log (textoMayus);

// minúsculas


let textoMinus = texto.toLocaleLowerCase();
console.log (textoMinus);


// -------------Concatenar (Unir) textos---------------------

let nombre= 'Caroline';
let apellido= 'García';

// let nombreCompleto= nombre+" " +apellido;  (esta es la manera  facil de hacerlo)

nombreCompleto= nombre.concat( " ", apellido) // otra manera de llamar al nombre + apellido

console.log (nombreCompleto)


//------------Limpiar Strings---------------

// trim() elimina los espacios en blanco al inicio y al final de un string

texto= "  Me llamo Alejandra    "

console.log(texto);
console.log (texto.length);


//aveces es necesario limpiar los strings, para por ejemplo, guardar estos datos en una base de datos

let textoLimpio= texto.trim();
console.log (textoLimpio);
console.log (textoLimpio.length)

//-------------Reemplazar strings---------

texto= textoLimpio;
console.log(texto);

texto =texto.replace("Alejandra","Tomas");
console.log(texto);

//----convertir un string en un array-------

//--split (separador)

texto= "Yogurt,Donettes, Patatas";
const listaCompra = texto.split(",");
console.log(listaCompra);

//----Búsquedasd en strings------

//search retorna el índice del primer caracter del texto buscado:

let posicionDonettes = texto.search("Donettes");
console.log(posicionDonettes);



























