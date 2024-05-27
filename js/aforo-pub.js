//Inicio
let contador;
let aforo;

//Contador a cero
contador = 0;
aforo = 5;

//Tenemos que identificar todos los elementos HTLM, que vayamos a manipular con JS

//Los guardamos en variables:
let btnSumar = document.getElementById('btn-sumar');
let btnRestar = document.getElementById('btn-restar');

let pTotal = document.getElementById('total');
let PCompleto = document.getElementById('completo');


//Las funciones son bloques de código reutilizables que podemos llamar a voluntad

function sumar() {
   if (contador < aforo) { 
    contador++;
   } else {
    // si intentamos sumar cuando el contador esta en 20:
    PCompleto.style.opacity = 1;
    // aparece el mensaje de aforo completo
    // btnSumar.style.backgroundColor = 'lightgray';
}

   
    resultado();
    comprobarBoton();


}

function restar() {
    if (contador > 0) {contador--;

      PCompleto.style.opacity = 0;
    // en cuanto sale alguien, el aforo deja de estar completo
    // btnSumar.style.backgroundColor = 'pink';

        
    }
    resultado();
    comprobarBoton();
}

function resultado() {
    pTotal.innerHTML = contador;
    //Cada vez que ejecutamos está función el párrafo HTML se actualiza con el valor del contador 
}

// Función para habilitar o deshabilitar los botones

function comprobarBoton() {
  if (contador > 0) {
    //reactivamos el btn- si el contador sube de 0

    btnRestar.classList.remove('inactivo');

    //Classlist accede a la lista de las clases del elemento HTML
    //Podemos alterar esta lista con remove y add para quitar y añadir clases respectivamente
    
  }  if (contador == 0) {

    btnRestar.classList.add('inactivo');



  }

  if (contador == aforo) {

    //desactivamos el btn+ si el contador alcanza el aforo maximo
  
    btnSumar.classList.add('inactivo');
    
  }
  if (contador < aforo) {
  
    //el botón + se vuelve a activar cuando el contador baja el aforo
  
    btnSumar.classList.remove('inactivo')
    
  }
}












