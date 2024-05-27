//Introducción a Javascript
// console.log('Hola Mundo!');
// console.log(2+1);

// Inicio
console.log('contador a cero');
contador=0;

//Entra un cliente
console.log('Entra un cliente');
contador++;

console.log("Número de personas:" + contador);

//primer caso:Sale un cliente
console.log('Sale un cliente');
contador--;
console.log("Número de personas:" + contador);

//segundo caso:Llega un cliente
console.log('Llega un cliente');

contador=20;

if (contador== 20) { // si se cumple la condición se ejecuta:

   console.log('Aforo completo, no puede entrar  ');

    
} else {// si no se cumple la condición se ejecuta este:

    console.log('Cliente puede entrar')
    contador ++;
    console.log("Número de personas:" + contador);

    
    
}










