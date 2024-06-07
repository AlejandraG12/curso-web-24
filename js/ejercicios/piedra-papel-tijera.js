let jugada;
let jugadaCPU;
let puntuacion;

// declaro las variables que necesite para iniciar el juego 

const opciones = [

    'piedra',
    'papel',
    'tijera'
]

// array con las opciones de respuesta que necesito para jugar 


// declaro la manera como jugarà el usuario 
function elegir(jugada) {

    console.log('Has elegido ' + jugada);
    let jugadaCPU = elegirCPU();

    //comparar las dos jugadas y determinar un ganador

    let resultado = comparar(jugada, jugadaCPU);
    console.log(resultado);
}

// declaro la manera como va  a jugar el cpu :

 // Math.random() * 10 genera un número del 0 al 9 con muchos decimales

// Math.floor() redondea esos decimales y nos devuelve un número entero  

// en este caso la multiplique por que  (opciones .legth) por que era el array en el que tenia guardada la información y queria todo lo que en ella contenia 

function elegirCPU() {

    let aleatorio = Math.floor(Math.random() * opciones.length)
    let jugadaCPU = opciones[aleatorio];


       console.log('La CPU ha elegido' + " " + jugadaCPU);

    // retornar el dato para que salga de la función
    return jugadaCPU


}

// para poder empezar a jugar primero tenenemos que ,usar una función para meter en ella lo que queremos comparar, y utilizamos un switch para declarar las respuestas de cada caso.


function comparar(jugada,jugadaCPU) {

    switch (true) {
        case (jugada === jugadaCPU):
            return 'Hay un empate';
    
        case (jugada == 'piedra' && jugadaCPU == 'tijera'):
            return 'Has ganado';
    
        case (jugada == 'tijera' && jugadaCPU == 'papel'):
            return 'Has ganado';
    
        case (jugada == 'papel' && jugadaCPU == 'piedra'):
            return 'Has ganado';
    
    
    
    
    
        default:
    
    
            return 'has perdido'; // si todas las opciones anteriores no se cumplen 
    
    
    
    }
    
    
}



