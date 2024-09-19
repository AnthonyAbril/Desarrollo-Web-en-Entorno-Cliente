//Pedir un número y calcular su factorial. 

var factorial = parseInt(prompt("Introduce un numero"));
for (var a = factorial-1; a > 0; a--) {
    factorial*=a;
}

document.writeln(factorial);