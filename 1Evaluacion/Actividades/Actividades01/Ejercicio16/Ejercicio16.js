//Leer un número y mostrar su cuadrado, repetir el proceso hasta que se introduzca un número negativo.

var n=0;
while(n>=0) {
    n = prompt("Introduce un numero");
    alert(Math.pow(n,2));
}