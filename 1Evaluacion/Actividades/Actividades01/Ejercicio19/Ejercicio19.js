//Pedir números hasta que se teclee uno negativo, y mostrar cuántos números se han introducido. 

var n = 1;
var contador = 0;
while (n>=0) {
    n = prompt("Introduzca un numero");
    contador++;
}

alert("Se han introducido "+contador);