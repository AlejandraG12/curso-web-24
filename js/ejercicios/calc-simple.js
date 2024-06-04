//vamos a hacer app que le pida dos números al usuario (dos prompts)
//le vamos a retornar la suma de ambos

// let numero1 =prompt("por favor, ingresa un número");
// let numero2 =prompt("por favor, ingresa otro número");

// let num='';

// let res=parseInt(numero1) + parseInt (numero2);

// alert(res)


//Multiplicar


let numero1 =parseInt(prompt("por favor, ingresa un número")); // parseint para que me devuelva todos los valores en números 
let numero2 =parseInt(prompt("por favor, ingresa otro número"));
let operar= prompt('Que operación desea realizar? (s) sumar ,(r) restar , (m) multiplicar, (d) dividir') // operar guarda la letra que asigno , para que el usuario realize la operación

// let num='';

// let res=(numero1) + (numero2);

let resultado=0; 

switch (operar) { // escojo (operar) por que es el prompt en el que el usuario escoge la manera como quiere realizar su operación
    case 's':
         resultado = numero1 + numero2;  // asigno al letra (s) para Sumar 
        break;

        case 'r':
            resultado = numero1 - numero2; // asigno al letra (r) para Restar 
        
        break;

        case 'm':

        resultado = numero1 * numero2; // asigno al letra (m) para Multiplicar 
        
        break;

        case 'd':
            resultado = numero1 / numero2; //// asigno al letra (d) para Dividir
        
        break;


        
    default:  // si no se cumple ninguno de los casos 
        resultado= 'Vuelve a intentarlo'



    
        break;
}



alert(resultado) // Me muestra el resultado en pantalla














