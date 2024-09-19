//Pedir 10 números. Mostrar la media de los números positivos, la media de los números negativos y la cantidad de ceros. 

// Inicializamos las variables
let sumaPositivos = 0;
let sumaNegativos = 0;
let cantidadPositivos = 0;
let cantidadNegativos = 0;
let cantidadCeros = 0;

// Pedir 10 números
for (let i = 0; i < 10; i++) {
    let numero = parseFloat(prompt("Introduce un número: "));

    if (numero > 0) {
        sumaPositivos += numero;
        cantidadPositivos++;
    } else if (numero < 0) {
        sumaNegativos += numero;
        cantidadNegativos++;
    } else {
        cantidadCeros++;
    }
}

// Calcular las medias si hay números positivos o negativos
let mediaPositivos = cantidadPositivos > 0 ? sumaPositivos / cantidadPositivos : 0;
let mediaNegativos = cantidadNegativos > 0 ? sumaNegativos / cantidadNegativos : 0;

// Mostrar resultados
alert("Media de los números positivos: " + mediaPositivos);

alert("Media de los números negativos: " + mediaNegativos);

alert("Cantidad de ceros: " + cantidadCeros);

