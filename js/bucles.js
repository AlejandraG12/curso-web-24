console.log ('Bucles');

//Los bucles son operaciones que se repiten un número determinado de veces (vueltas) 
// Son muy útiles cuando queremos ejecutar le mismo  código repetidamente, pero cada vez con un valor diferente 

//--FOR-----

//Esta declaración crea una expresión con tres valores opcionales:

// 1.Indica el inicio del conteo del bucle ( normalmente 0 o 1)

//2. Indica  la condición para que se ejecute un bucle ( y por tanto el número de veces)

// 3. Indica la dirección del conteo. Aumenta o disminuye (Cuenta atrás)

for(let i= 0; i < 5; i++){
    // console.log (i)
}

for(let i= 1; i <= 10; i++){
    // console.log (i)
}

for(let i= 10; i >0; i--){
    console.log (i)
}

 const coches= [

   


    'For Mustang',
    'Audi A1',
    'Mazda Furai',
    'Fiat 500',
    'Mercedes CLK 500',
    'Nissan Almera',
    'Ford Fiesta',

]

//Imprimir este array en el párrafo del Html

const parrafo = document.getElementById('pTexto');


// let texto= coches[0] + '<br>';
//  texto += coches [1] + '<br>';
//  texto += coches [2] + '<br>';
//  texto += coches [3]+ '<br>';
//  texto += coches [4] + '<br>';
//  texto += coches [5] + '<br>';

// let texto='<ul>';

// for  (let i=0 ; i<coches.length; i++){

//     texto +='<li>' + coches [i]+ '</li>';


// }

// texto+='</ul>'


// console.log(texto);


//imprimir el array en el párrafo invertido


let texto='<ul>';


for  (let i=coches.length; i> 0; i--){

    texto +='<li>' + coches [i-1]+ '</li>';


    


}
console.log(texto);

texto+='</ul>'


parrafo.innerHTML=texto;


// Imprimir en consola el siguiente ejercicio:

//Dado un número se imprimira en consola ese número de lineas

// La primera línea tendrá un asterisco y cada línea sucesiva irá sumando un más

// ejemplo: con el número 3 esto es lo que debe aparecer en pantalla:

//*
//**
//***

// let number=0;

// for(let i=number; i <= 3; i++){
//     console.log (i)
// }



//dado un número contar hasta ese número desde el 1 imprimir en pantalla


// let numero =0;

// numero=15;

// for(let i=1; i<=numero;i++){
//     console.log (i)
// }




// cuenta atras dede cero



let numero =0;

numero=45;

for (let i=numero; i>0; i--){

    console.log (i)
}

// contar número pares

console.log ('contar pares hasta '+ numero)

for (let i=2; i<=numero; i+=2){

    console.log (i)
}

//Imprimir los multiplos de un número

let multiplo;

multiplo=3;

console.log ('Multiplos del '+ multiplo + ' hasta el '+numero)

for( let i=multiplo; i <= numero; i +=multiplo){

    console.log (i);
}

//------------------Uso de let en un for--------------------------


let i =0;

for (let i = 0; i < 5; i++) {
   console.log( 'i del for:'+ i);
    
}

console.log ('i fuera del for'+ i);

//las dos variables i al ser declaradas con let, tienen sólo un alcance de bloque, es decir, que sólo se ven afectadas, por el código de su propio bloque 










