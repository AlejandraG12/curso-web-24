
 // Lo primero es identificar a  la lista
 let lista= document.getElementById('lista');

 // definir los elementos que vamos agregar
 const frutas=[
     'Guayaba',
     'Mamey',
     'Fresa',
     'Guanabana',
     'Madroño'

 ]

 //creamos un contador para ir tomando distintos elementos del array

 let contador=0;
  
 function agregarLista(){

    //tomamos el texto del array
    let texto= frutas[contador];

    //construimos el elemento li
    let elemento= document.createElement('li');

    //le añadimos el contenido
    elemento.innerHTML=texto

    //lo añadimos a la lista 

    lista.appendChild(elemento);

    //aumentamos el contador para que tome otro elemento del array

    contador++;

    // reiniciar el contador si se acaba el array

    if(contador>=frutas.length){

        contador=0;
    }

   
 }