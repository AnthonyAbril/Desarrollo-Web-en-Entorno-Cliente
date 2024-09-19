//Pedir números hasta que se introduzca uno negativo, y calcular la media. 

var n = 0;
var a = [];
var suma = 0;

while (n>=0) {
    n = parseInt(prompt("Introduzca un numero"));
    suma += n;
    a[a.length] = n;
}

alert(suma/(a.length));
