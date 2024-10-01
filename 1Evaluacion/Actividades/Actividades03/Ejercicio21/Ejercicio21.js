/*
Introducir  5 números  positivos  por teclado  e  indicar  cual  es  el  máximo.  
Los  negativos  los  debe de ignorar.
*/

var numeros = [];

while (numeros.length<5){
    numeros[numeros.length] = parseInt(prompt("Introduce un numero"));
}

function maximoPositivo(numeros){
    let maximo = 0;

    for (let numero of numeros){
        if(numero>0&&numero>maximo){
            maximo = numero;
        }
    }

    return maximo;
}

document.writeln(maximoPositivo(numeros));
console.log(numeros);