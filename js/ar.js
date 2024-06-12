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
 console.log("palabra oculta: "+ palabraOculta);

 
 // tienes que adivinar la palabra

 function jugar(letra) {
    console.log(letra);
    
}

