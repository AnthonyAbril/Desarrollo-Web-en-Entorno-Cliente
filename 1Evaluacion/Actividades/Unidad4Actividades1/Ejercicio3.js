/*

Crear tres funciones para calcular los metros cúbicos de una piscina.  
Para una piscina es cuadrada o rectangular: Longitud x Anchura x Profundidad  
Para una piscina es ovalada: Longitud máxima x Anchura máxima x Profundidad x 0,89   
Para una piscina es redonda: Diámetro x Diámetro x Profundidad x 0,79 .  

*/

function calcularPiscinaCuadrada(Longitud, Anchura, Profundidad){
    return Longitud * Anchura * Profundidad;
}

function calcularPiscinaOvalada(LongitudMáxima, AnchuraMáxima, Profundidad){
    return LongitudMáxima * AnchuraMáxima * Profundidad * 0.89;
}

function calcularPiscinaRedonda(Diámetro, Profundidad){
    return Diámetro * Diámetro * Profundidad * 0.79
}

const longitud = 10;  // Longitud en metros
const anchura = 5;    // Anchura en metros
const profundidad = 2; // Profundidad en metros

const volumenRectangular = calcularPiscinaCuadrada(longitud, anchura, profundidad);
document.writeln(`El volumen de la piscina rectangular es: ${volumenRectangular} m³<br>`);


const longitudMaxima = 8; // Longitud máxima para la piscina ovalada
const anchuraMaxima = 4;  // Anchura máxima para la piscina ovalada

const volumenOvalada = calcularPiscinaOvalada(longitudMaxima, anchuraMaxima, profundidad);
document.writeln(`El volumen de la piscina ovalada es: ${volumenOvalada} m³<br>`);


const diametro = 6;  // Diámetro de la piscina redonda

const volumenRedonda = calcularPiscinaRedonda(diametro, profundidad);
document.writeln(`El volumen de la piscina redonda es: ${volumenRedonda} m³<br>`);