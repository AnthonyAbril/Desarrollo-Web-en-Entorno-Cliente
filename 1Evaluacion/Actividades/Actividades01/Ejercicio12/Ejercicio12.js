//Programa que muestre por pantalla los 5 primeros números pares.
var pares = 0
var i = 0
while (pares<5) {
    i++;
    if (i%2==0) {
        document.write(i+"<br>"); 
        pares++;
    }
}