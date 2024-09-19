//Pedir 15 números y escribir la suma total. 
var n=0;
for (var a=0;a<15;a++) {
    n += parseInt(prompt("Introduzca un numero"));
}

document.writeln(n);