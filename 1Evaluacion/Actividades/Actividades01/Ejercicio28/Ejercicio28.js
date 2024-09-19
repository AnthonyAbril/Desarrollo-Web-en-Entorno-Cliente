//Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros. 

var n = [];

while (n.length<10) {
    n[n.length] = parseInt(prompt("Introduce un numero"));
}

var positivos, negativos = [];
for (const key in n) {
    if ( key > 0 ) {
        positivos[positivos.length] = key;
    }else if ( key < 0 ) {
        negativos[positivos.length] = key;
    }
}

