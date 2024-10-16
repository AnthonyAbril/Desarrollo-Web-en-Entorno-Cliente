/*

Crear un array de paises y mostrar el listado

*/

// Definir el array de países

// Definir el array de países
const paises = ["Países Bajos", "Grecia", "Alemania", "Suiza", "Bélgica", "Dinamarca", "Irlanda", "Suecia", "Finlandia", "Portugal", "Reino Unido", "España", "Rusia"];

// Mostrar el listado de países
console.log("Listado de países:");
paises.forEach((pais, index) => {
    document.writeln((index + 1)+ " | " + (pais) + "<br>");
});
