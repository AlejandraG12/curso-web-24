const divs = document.querySelectorAll('#coordenadas div');

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function () {

        //guardamos this en una variable
        //this se refiere al objeto que interactúa en cada caso

        let cuadro=this;

        //le cambiamos el color de fondo

        cuadro.style.backgroundColor = 'dodgerBlue';

        //ponemos un temporizador para que el div vuelva a su color inicial

        setTimeout(function () {

            //desde aquí dentro no podemos acceder a 'this', por eso lo hemos guardado en una variable
            cuadro.style.backgroundColor = 'white';
        },1500);
        // 1500ms=1.5s es el valor de de transition que le dimos en el css
  

    })

}

