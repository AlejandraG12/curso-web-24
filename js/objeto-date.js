console.log('Objeto Date()');

// El objeto Date() (fecha) nos deja trabajar en JavaScript:

console.log(Date());

//El objeto Date() es invariable, no lo podemos modificar, sólo leer.

//Para solventar esto, podemos crear copias:

//Crear una copia con la fecha -actual

let fecha = new Date();
console.log(fecha);

//Crear una copia con una fecha concreta

//formato string -año-mes-dia

fecha = new Date('2003-02-15');
console.log(fecha);

// formato  númerico: año (*), mes (*), dias, horas, minutos, segundos y ms)

fecha = new Date(1996, 9, 24);
console.log(fecha)

// Los meses van de 0 a 11 (Enero =0, Diciembre=11)

//Introducir un dia superior a 11, no da error, si no que empieza a contar el siguiente año

fecha = new Date(2015, 15, 29);
console.log(fecha)


// Qué pasa si omitimos el mes 

fecha = new Date(2000);
console.log(fecha)

// si solo ponemos un dato lo trata como milisegundos 

// si en el año  ponemos solo 2 cifras,  lo tratará como 19xx

fecha = new Date(91, 5, 12);
console.log(fecha);

// Las fechas se guardan como milisegundos 
// 0 milisegundos es el tiempo zero, 1 de Enero 1970 00:00 UTC
//Un día (24h) son 86 400 000 ms
// La fecha actual es: 1716888227553 ms desde el 1 de Enero de 1970

fecha = new Date(1716888227553);
console.log(fecha);

fecha = new Date(0);
console.log(fecha);


fecha = new Date(-86400000);
console.log(fecha);


//-----------------------------Métodos----------------------------------------------------

fecha = new Date('1991-June-21');
console.log(fecha.toDateString())

//toDatestring transforma la fecha a un formato más legible


//---OTROS FORMATOS DE FECHA------

console.log(fecha.toISOString());
console.log(fecha.toUTCString());

//Parsear fechas

//Date.parse() convierte un string de fecha a milisegundos 

console.log(Date.parse('May 29 2024'));

console.log(new Date(1716933600000));

//--Tomar datos del objeto fecha---------

fecha = new Date(1996, 9, 24, 4);



const dias = [

    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',

]

const meses = [

    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
]

// fecha.getDay()=4
//por lo tanto, lo de abajo equivale a:
//días[4]

console.log(dias[fecha.getDay()]); // extraer el dia de la semana 


// fecha.getMonth()=9

//Esté número equivale a al mes de octubre
//Ya que empezamos a contar los meses desde 0

console.log(meses[fecha.getMonth()]);//extraer el mes 

//Otros métodos get (tomar)

let fechaActual =new Date();
//Hora, minutos y segundos
console.log(fechaActual.getHours());
console.log(fechaActual.getMinutes());
console.log(fechaActual.getSeconds());























