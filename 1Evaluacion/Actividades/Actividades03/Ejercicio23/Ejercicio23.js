/*
Introducir  dos  números  por  teclado  y  dividirlos.  Si  la  división  es  por  cero  indicar  que  no 
podemos realizar la división. La división por cero en Javascript devuelve Infinity y -Infinity.
*/

var numeros1 = parseInt(prompt("Introduce un numero"));
var numeros2 = parseInt(prompt("Introduce otro numero"));

function division(n1,n2){
    if(n2==0){
        return "No se puede realizar la división";
    }else{
        return "El resultado es "+(n1/n2);
    }
}

document.writeln(division(numeros1,numeros2));