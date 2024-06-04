//Contar en javascript


//contar números

let numero =prompt("por favor, ingresa un número");
//Le damos al usuario la posibilidad de que sea un número y los guardamos en una variable


let texto='';

// Creamos una variable string  vacia con el objetivo de rellenarla de número del 2 al que el usuario ingresó


for (let i = 2; i <numero; i+=2 ) {

    //let i =2 por que empezamos a contar desde 2
    // i <= por que queremos que el número del usuario este incluido en el conteo  
    // i +=2 por que queremos contar de dos en dos

    texto += i ;
    // + = es para agregar un valor a la variable, el = es para sustituirlo
    texto += " ";

    
}


alert(texto);

// alert sirve para mostrar un mensaje en pantalla al usuario 




