function mostrarHora() {

    //declarar variables para guardar la hora


    //guardar fecha actual 
    let fecha = new Date();

    //guardar hora, minutos, segundos

    let hora = fecha.getHours(); // nos da la hora de 0 a 23
    let minutos = fecha.getMinutes(); // nos da los minutos de 0-59
    let segundos = fecha.getSeconds(); // nos da los segundos de 0-59
    let formato= 'AM'

    //construir el string para mostrar la hora

    if (hora>12) { 

        // CAMBIAR EL FORMATO DEPENDIENDO DE LA HORA 
        hora= hora-12;

        // POR EJEMPLO, SI LA HORA =13, SE CAMBIA A 1PM
        formato= 'PM';
        
    };

    if (hora<10) {
        hora='0'+ hora
      
    };

    if (minutos<10) {
        minutos='0'+ minutos
       
    }

    segundos=(segundos<10)? "0" + segundos: segundos

    //variable= (condicion if) ? valor si verdadero:
    //valor si falso

    let reloj=hora + ":" + minutos +  ":" + segundos+" " + formato;



    //Imprimir la información en pantalla

    //Identificar el div donde vamos a meter la info 

    let pantalla= document.getElementById('pantalla');

    //meter la info en el div 

    pantalla.innerHTML=reloj;

    //Actualizar la función y por tanto la hora, cada segundo

    setTimeout(mostrarHora,1000);

    // setTimeout realiza una  cuenta atrás en ms, en este caso 1000 o 1 segundo

    //Al finalizar la cuenta atrás , ejecuta la función que le hemos indicado



}

//ejecutamos la función
mostrarHora();

