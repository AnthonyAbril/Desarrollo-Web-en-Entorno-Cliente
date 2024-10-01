/*
Introducir por teclado un valor. Convertirlo a entero y mostrarlo (parseInt).
*/

var valor;

while (isNaN(valor)){
    valor = prompt("Introduce un valor numerico");
}

document.writeln(parseInt(valor));