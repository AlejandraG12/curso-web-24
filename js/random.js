// Números aleatorios en JS

// Math.random() nos retorna un número aleatorio entre el 0 (incluído) y el 1 (excluído)
let numAleatorio = Math.random();
console.log(numAleatorio);

// Para obtener un número entero se puede combinar Math.random() con Math.floor()

// Math.random() obtiene un número del 0 al 1
// Math.floor() redondea ese número

// generar un número del 0 al 9
numAleatorio = Math.floor(numAleatorio * 10);

// Math.random() * 10 genera un número del 0 al 10 (excluído) con muchos decimales

// Math.floor() redondea esos decimales y nos devuelve un número entero (int)

console.log("numero de 0 a 9: " + numAleatorio);

//  simular que lanzamos un dado ejemplo:

const caraDados=[
    1,
    2,
    3,
    4,
    5,
    6,

]

//generamos un número del 0 al 5 (el 6 está excluido)

let lanzamiento= Math.floor(Math.random()*6);

console.log('Lanzo el dado: '+caraDados[lanzamiento]);

// dado 2

let lanzamiento1= Math.floor(Math.random()*6);

let lanzamiento2= Math.floor(Math.random()*6);

console.log('Lanzo los dado: '+ caraDados[lanzamiento1]+ " "+ caraDados[lanzamiento2]);

console.log('Total: '+(caraDados[lanzamiento1]+ caraDados[lanzamiento2]));


// otra forma de declarar mas sencilla 


let dado1=caraDados[lanzamiento1];
let dado2=caraDados[lanzamiento2];

console.log('lanzo los dado:'+ dado1+ ' '+ dado2);
console.log('total '+ (dado1+ dado2));


// obtener un número de 1 a 10 (incluido)

let min=1;
let max=10;

numAleatorio =Math.floor(Math.random() * max) + min;

console.log(numAleatorio)


