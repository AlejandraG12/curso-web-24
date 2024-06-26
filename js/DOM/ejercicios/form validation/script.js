//Extraer el contenido de un input y guardarlo en una variable



// tomamos las dos contraseñas





// en caso de que no cumplan estas condiciones , imprimir un mensaje en pantalla donde se indique el error (p id='mensaje)


// al pulsar el el botón, guardamos las constraseñas en variables
let mensaje = document.getElementById('mensaje');


function comprobar() {



    let contraseña1 = document.getElementById('fpass1').value;
    let contraseña2 = document.getElementById('fpass2').value;

    //value es el contenido que escribe el usuario del input

    //comprobamos que tengan mas de 4 caracteres y que sean iguales

    if (contraseña1.length && contraseña2.length >= 4) {
        if (contraseña1 == contraseña2) {




            mensaje.innerHTML = 'La contraseña es valida';


        }

        else {

            mensaje.innerHTML = 'La constraseña  no es valida';


        }

        




    }
    else {
        mensaje.innerHTML='Las contraseñas deben contener al menos 4 caracteres.'}





}







