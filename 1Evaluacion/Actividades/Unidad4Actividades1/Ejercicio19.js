/*

Mostrar el array de países en orden inverso

*/


// Definir el array de países
const paises = ["Países Bajos", "Grecia", "Alemania", "Suiza", "Bélgica", "Dinamarca", "Irlanda", "Suecia", "Finlandia", "Portugal", "Reino Unido", "España", "Rusia"];

//Guarda en paisesinvertido el array invertido
paisesinvertido = paises.reverse();

// Mostrar el listado de países
console.log("Listado de países:");
paisesinvertido.forEach((pais, index) => {
    document.writeln((index + 1)+ " | " + (pais) + "<br>");
});