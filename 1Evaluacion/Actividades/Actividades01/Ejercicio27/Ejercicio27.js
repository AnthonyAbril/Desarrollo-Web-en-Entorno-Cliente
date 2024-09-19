//Pedir un número y calcular su factorial. 

var factorial = parseInt(prompt("Introduce un numero"));//pide numero

//cuenta desde el numero indicado hasta 1
for (var a = factorial-1; a > 0; a--) {
    factorial*=a;//ese numero lo va multiplicando por el el numero introducido
}

// lo muestra
document.writeln(factorial);