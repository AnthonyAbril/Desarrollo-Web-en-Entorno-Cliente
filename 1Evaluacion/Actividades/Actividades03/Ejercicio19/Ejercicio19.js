/*
Generar una letra aleatoria entre a A y la Z. La letra A tiene el código 65. 
String.fromCharCode.
*/

// Generar una letra aleatoria entre 'A' y 'Z'
function letraAleatoria() {
    // Obtener un número aleatorio entre 0 y 25 (la cantidad de letras que hay)
    const codigoAleatorio = Math.floor(Math.random() * 26); 
    // Sumar 65 (código ASCII de 'A') para obtener el código ASCII de la letra
    const codigoLetra = 65 + codigoAleatorio; 
    // Convertir el código ASCII en la letra correspondiente
    return String.fromCharCode(codigoLetra);
}

// Ejemplo de uso
const letra = letraAleatoria();
document.writeln(letra);