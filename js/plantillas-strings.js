//Qué son plantillas de strings?
//Las plantillas son strings que tienen la posibilida de contener variables interpoladas
//La sintaxís que se hace con la tilde inversa``
let texto= `hola mundo!`;
console.log (texto);

//admite comillas dentro del string:
 texto=`Me llamo Alejandra, pero me dicen "Aleja"`; // la ventaja es que puedo meter comillas para un texto
 console.log (texto);

 // -------------Interpolación de variables-------------


 //Podemos construir un string con variables y expresiones las cuales a la hora de imprimir el string serán sustituídas, por los valores de las variables

 let nombre = 'Alejandra';
 let edad = 32;

//  let frase;
//  frase= "Hola, me llamo"+" " + nombre + " y tengo " +edad + " " +"años" ;

//  console.log (frase);

 //Interpolando:

 frase=`Hola, me llamo ${nombre} y tengo ${edad} años`;
 console.log (frase);

 //ejemplo (factura)

 let precio=10;
 //21%  21/100= 0.21
 let IVA=0.21;

 // En este caso, la interpolación contiene una expresión, que simplemente una operación matemática (para calcular el precio con IVA) que usa variables 

 // .tofixed me sirve para imprimir los decimales completos

 let mensajeTotal= ` Total: ${(precio * (1+ IVA)).toFixed(2)}€`;
 console.log (mensajeTotal);

 // cálculo de precio con IVA

 console.log (precio* IVA);

 //esto nos da el valor del IVA añadido al precio, pero falta el precio completo

 //De ahí que sumemos  (precio *1 ) que representa el precio original

 // así obtenemos el precio original más el valor añadido por el IVA

 console.log ((precio *1 )+ (precio * IVA));

 //Queda pendiente imprimir html con plantillas de string





 





 

