
// --------------------------------Juego del ahorcado-----------------------------


//Tienes una palabra aleatoria

let palabra='';

const listaPalabras=[
    'mesa',
    'lampara',
    'cuadro',
    'silla',
    'traidor',
    'pizarra'

];

//  palabra= Math.floor(Math.random()*5);
//  console.log(palabra);

let numAleatorio= Math.floor(Math.random()*listaPalabras.length);
palabra=listaPalabras[numAleatorio];
console.log(palabra)




// La palabra està oculta
//mesa = _ _ _ _
//guardamos el número de caracteres que tiene la palabra

let longitud= palabra.length;
console.log(" longitud:" +longitud);

let palabraOculta='';

// longitud es de 7, el for se repite 7 veces 

 for(let i=0;i < longitud;i++){

    palabraOculta +="_ ";

 }
 console.log("palabra oculta: "+ palabraOculta)




// Tienes que adivinar la palabra

//Tienes que adivinar las letras de la palabra

// Si dices una letra que no está pierdes una vida

// Si pierdes todas las vidas, pierdes el juego

//Si pierdes el juego, vuelves a empezar 