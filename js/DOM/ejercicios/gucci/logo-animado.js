// identificamos el header

let header=document.getElementById('site-header');

// En el evento en que el usuario haga scroll ejecuta la siguiente función 

window.onscroll=function(){

    //comprueba si el scroll vertical ha bajado

    if (window.scrollY >0) {

        // la posición 0 es la superior de la página
        header.classList.add('sticky');}

        // al bajar le damos la clase  sticky al header
    else{

        // al subir del todo recupera el formato original

        header.classList.remove('sticky');
    }
}

