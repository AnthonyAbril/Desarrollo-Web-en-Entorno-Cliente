//Leer un número e indicar si es positivo o negativo. El proceso se repetirá hasta que se introduzca un 0.

var n = 1;
while (n!=0) {
    n = prompt("Introduzca un numero");
    if (n!=0) {
        alert("El numero es "+((n>0) ? "positivo" : "Negativo"));
    }
}