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



// calcular un día en milisegundos

//1000ms * 60s* 60m*24h

console.log(1000*60*60*24);

let fechaHoy= new Date();

console.log(new Date(fechaHoy-86400000));


// 18 años en milisegundos

//1000ms*60s* 60m* 24h

//18 años*365 días * 24h* 60m* 60s* 1000ms

let años18= new Date((18*365*24*60*60*1000) + (4*24*60*60*1000));


// el resultado de esta fecha restando con los años y el año actual me sirve para determinar si es mayor de esdad o no 

console.log(años18);


//-----Métodos set--------------------

//Se usan para establecer datos en una fecha 

// setFullYear permite establecer el año de una fecha 

fecha= new Date();

fecha.setFullYear(2018);

console.log(fecha);

// TAMBIEN PODEMOS ESTABLECER  EL AÑO, EL MES Y EL DIA 

fecha.setFullYear(2022,2,25);
console.log(fecha);




// Establecer mes o el día 

// el mes se establece con setMonth()0-11
// el día del mes se establece con setDate() 1-31

fecha.setMonth(6);
fecha.setDate(8);
console.log(fecha);

// ejemplo pràctico

// queremos realizar una reserva en un hotel el día 15 de agosto para 3 días

let fechaEntrada;

let fechaSalida;

fechaEntrada= new Date ('2024-08-15'); 
console.log(fechaEntrada);

// con esto las dos fechas parten del día 15 de agosto 

fechaSalida= fechaEntrada;

// usamos setDate() para establecer el día de la fecha de salida 

//Dentro del paréntesis tomamos el día de la fecha de entrada y le sumamos 3 

fechaSalida.setDate(fechaEntrada.getDate()+3);
console.log(fechaSalida);

//Ejemplo 2

// A un trabajador se le vence el contrato el 18 de junio 

// Le han dicho que se lo van a renovar por 18 meses  

// Calcular la nueva fecha de vencimiento usando el objeto Date 

let fechaInicio;
let fechaFin;

fechaInicio= new Date('2024-05-18');

console.log(fechaInicio);

fechaFin=fechaInicio;



fechaFin.setMonth(fechaInicio.getMonth()+18);
console.log(fechaFin);


// ejemplo 3 - alarma 

let alarma= new Date();  // dia de hoy 
alarma.setUTCHours(11); // hora
alarma.setMinutes(20); //minutos

function saltarAlarma(){

    if (alarma<=Date()) {
        
        alert('Hora del descanso !!');
    }

    setTimeout(saltarAlarma,1000);
}


alert('Esto es una alerta')











































































