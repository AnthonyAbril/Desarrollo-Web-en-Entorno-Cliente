//Leer números hasta que se introduzca un 0. Para cada uno indicar si es par o impar

var n = 1;
while (n!=0) {
    n = prompt("Introduzca un numero");
    if (n!=0) {
        alert("El numero es "+((n%2==0) ? "par" : "impar"));
    }
}