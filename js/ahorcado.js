
// --------------------------------Juego del ahorcado-----------------------------


//Tienes una palabra aleatoria

// listado de palabras
const listadoAnimales=[

    'perro',
    'gato',
    'oveja',
    'avispa',
    'cocodrilo',
    'chimpance',
    'caballo',
    'cocodrilo',
    'mariposa',
    'chichicuilote',
    'paloma',
    'dinosaurio',
    'foca',
    'cocodrilo',
    'cerdo',
    'gusano',
    'mapache',
    'oso',
    'topo',
   'ardilla'

]

let palabraInicio='';
let numAleatorio=0;
numAleatorio=Math.floor(Math.random()*listadoAnimales.length)
palabraInicio=listadoAnimales[numAleatorio]

// La palabra està oculta
//mesa = _ _ _ _
//guardamos el número de caracteres que tiene la palabra

console.log(palabraInicio)

let parrafo=document.getElementById('pGuiones'); //elegimos donde vamos a escribir  en pantalla la palabra 
parrafo.innerHTML="_".repeat(palabraInicio.length); // metemos tantos guiones como caracteres tenga la palabra 



// longitud es de 19, el for se repite 19 veces 

let longitud=palabraInicio.length;

console.log(longitud)


  

// Tienes que adivinar la palabra

function jugar(){

    
    
}
//Tienes que adivinar las letras de la palabra


// Si dices una letra que no está pierdes una vida


// Si pierdes todas las vidas, pierdes el juego


//Si pierdes el juego, vuelves a empezar 
