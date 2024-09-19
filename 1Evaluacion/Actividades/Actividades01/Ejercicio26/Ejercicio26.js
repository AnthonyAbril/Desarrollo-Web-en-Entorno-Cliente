//Diseñar un programa que muestre el producto de los 10 primeros números impares. 
var impares = 0;
var numeros = 0;

while (impares<10) {
    numeros++;
    if (numeros%2!=0){
        impares++;
        document.writeln(numeros);
    }
}