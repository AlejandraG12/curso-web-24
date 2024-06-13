
// Identificamos los elementos HTML CON LO QUE VAMOS A TRABAJAR 

let boton= document.getElementById('btnAñadir');
let input=document.getElementById('inputTexto');
let lista= document.getElementById('lista');

boton.addEventListener('click',agregarTarea);

// a boton le agregamos un evento, que activa la función agregar tarea cuando hacemos click sobre éste

function agregarTarea() {

    //Guardamos el contenido del input en una variable 

    let texto=input.value;
    
}