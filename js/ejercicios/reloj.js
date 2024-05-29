function mostrarHora() {

    //declarar variables para guardar la hora


    //guardar fecha actual 
    let fecha = new Date();

    //guardar hora, minutos, segundos

    let hora = fecha.getHours(); // nos da la hora de 0 a 23
    let minutos = fecha.getMinutes(); // nos da los minutos de 0-59
    let segundos = fecha.getSeconds(); // nos da los segundos de 0-59

    //construir el string para mostrar la hora

    let reloj=hora +  minutos + segundos;

    //Imprimir la información en pantalla
    //Identificar el div donde vamos a meter la info 
    let pantalla= document.getElementById('pantalla');



}

