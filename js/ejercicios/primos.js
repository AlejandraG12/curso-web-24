// Un número primo es cuando sólo es divisible entre 1 y si mismo 
//ejemplo el 7, el 19 ,23

//El 7 no se puede dividir entre 2, ni tres ni 4, ni 5, ni 6,...
//Sólo entre 1 y 7
// empezamos por 7/2 =x. -> el resto No es cero

// 15/3=5. El resto es 0

// tomamos un número x. dividir entre 2 y los números hasta llegar a x

let numero=prompt('Ingresa el número que quieres comprabar si es primo')

let primo=true;

//Ejemplo: tenemos el 17 y queremos calcular el resto de la división resultante entre 3 

let resto=17 % 3;
console.log(resto);

for (let i = 2; i< numero; i++) {
    
    if (numero % i==0) {
        // Si en algún momento esta operación da 0
        //El número queda descartado como primo
         primo=false;
    }

    //Si completamos el bucle y en ningun momento se ha cumplido la condición del if, entonces podemos decir que el número es primo
    
}

let mensaje= '';

if(primo){mensaje='El número elegido es primo'}
else{ mensaje= 'El número no es primo'}


// Otra alternativa de mensaje

mensaje = 'El número es primo';
if (!primo) { mensaje= 'El número no es primo'};
    
alert(mensaje)

