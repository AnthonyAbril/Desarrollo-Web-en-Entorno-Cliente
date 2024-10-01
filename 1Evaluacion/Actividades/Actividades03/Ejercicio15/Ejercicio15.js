/*
Calcular la raíz cuadrada y el cuadrado de un número introducido por el teclado.
*/

var valor = prompt("Introduce un dato");

document.writeln("Raiz cuadrada: "+Math.sqrt(valor,2));

document.writeln("Cuadrado: "+Math.pow(valor,2));


const userAgent = navigator.userAgent;
if(userAgent.includes("Chrome")&&!userAgent.includes("Edge")){
    console.log(userAgent);   
}