let jugada;
let jugadaCPU;
let puntuacion;

const opciones=[

    'piedra',
    'papel',
    'tijera'
]

function elegir(jugada) {
    
    console.log('Has elegido '+ jugada);
    
}

function elegir(jugadaCPU) {

    var aleatorio=Math.floor(Math.random()* opciones.length)
    var elegirCpu=opciones[aleatorio];

    console.log('La CPU ha elegido'+" " + elegirCpu)

   

    // elegir número random 0-2
    // Opciones [numeros random]
    // console.log( cpu ha elegido)

    
}