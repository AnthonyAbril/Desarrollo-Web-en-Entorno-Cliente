/*
Introducir un valor por teclado e indicar si es un número tras pasarle parseInt y parseFloat. (isNaN). 
*/

var valor = prompt("Introduce un valor");

document.writeln("con parseInt: "+isNaN(parseInt(valor)));

document.writeln("con parseFloat: "+isNaN(parseFloat(valor)));