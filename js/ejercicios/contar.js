//Contar en javascript


//contar números

let numero =prompt("por favor, ingresa un número");
//Le damos al usuario la posibilidad de que sea un número y los guardamos en una variable


let texto='';

// Creamos una variable string  vacia con el objetivo de rellenarla de número del 1 al que el usuario ingreso


for (let i = 0; i <numero; i++ ) {

    //let i =1 por que empezamos a contar desde 1
    // i <= por que queremos que el número del usuario este incluido en el conteo  
    // i ++ por que queremos contar de uno en uno 

    texto += i ;
    // + = es para agregar un valor a la variable, el = es para sustituirlo
    texto += " ";

    
}


alert(texto);

// alert sirve para mostrar un mensaje en pantalla al usuario 




