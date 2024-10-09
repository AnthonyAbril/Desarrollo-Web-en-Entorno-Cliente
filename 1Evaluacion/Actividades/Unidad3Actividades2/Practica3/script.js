/*
Queremos  hacer  una  aplicación  en  JavaScript  que  simule  un  pequeño  tablero  de  dibujo. 
Para ello tendrás que dibujar un tablero de 30 celdas x 30 celdas con cada celda de ancho 
10 px y alto 10 px. Para realizar el tablero de dibujo tendrás que emplear obligatoriamente 
los métodos de creación de nodos del DOM. Además, colorearás cada celda del tablero de 
forma que el borde sea blanco y el contenido un color aleatorio RGB (0-255, 0-255, 0-255) 
Una vez generado el tablero lo meterás dentro del DIV con id "zonadibujo".
*/

// Seleccionamos el div con id "zonadibujo"
const zonaDibujo = document.getElementById("zonadibujo");

// Función para generar un color RGB aleatorio
function colorAleatorioRGB() {
    const r = Math.floor(Math.random() * 256);  // Valor rojo entre 0-255
    const g = Math.floor(Math.random() * 256);  // Valor verde entre 0-255
    const b = Math.floor(Math.random() * 256);  // Valor azul entre 0-255
    return `rgb(${r}, ${g}, ${b})`;
}

// Crear el tablero de 30x30 celdas
for (let fila = 0; fila < 30; fila++) {
    for (let columna = 0; columna < 30; columna++) {
        // Crear una nueva celda
        const celda = document.createElement("div");
        celda.classList.add("celda");
        
        // Asignar un color de fondo aleatorio
        celda.style.backgroundColor = colorAleatorioRGB();
        
        // Añadir la celda a la zona de dibujo
        zonaDibujo.appendChild(celda);
    }
}