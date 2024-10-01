/*
Introducir 5 números pares positivos por teclado e indicar cual es el máximo. Los impares y 
negativos los debe de ignorar.
*/

var numeros = [];

while (numeros.length<5){
    let numero = parseInt(prompt("Introduce un numero par positivo ("+(5-numeros.length)+")"));

    if(numero%2==0){
        numeros[numeros.length] = numero;
    }else{
        alert("El numero debe ser positivo impar")
    }
}

function maximoPositivo(numeros){
    let maximo = 0;

    for (let numero of numeros){
        if(numero>maximo){
            maximo = numero;
        }
    }

    return maximo;
}

document.writeln(maximoPositivo(numeros));
console.log(numeros);