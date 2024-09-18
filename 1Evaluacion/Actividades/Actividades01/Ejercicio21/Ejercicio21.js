//Pedir números hasta que se teclee un 0, mostrar la suma de todos los números introducidos. 

var n = prompt("Introduzca un numero");
var contador = 0;

while (n!=0) {
    n = prompt("Introduzca un numero");
    contador++;
}

alert(contador);