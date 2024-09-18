/*Realizar un juego para adivinar un número. Para ello pedir un número N, y luego ir pidiendo 
números indicando “mayor” o “menor” según sea mayor o menor con respecto a N. El 
proceso termina cuando el usuario acierta*/

var n = prompt("Introduzca un numero");

var i = prompt("Adivina el numero");
while (n!=i) {
    i = prompt(((n>i) ? "mayor" : "menor"));
}