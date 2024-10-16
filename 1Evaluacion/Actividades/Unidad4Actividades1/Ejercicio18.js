/*

Devolver un subarray con los 2 siguientes países a Finlandia

*/

// Definir el array de países
const paises = ["Países Bajos", "Grecia", "Alemania", "Suiza", "Bélgica", "Dinamarca", "Irlanda", "Suecia", "Finlandia", "Portugal", "Reino Unido", "España", "Rusia"];

//Guarda en subpaises un subarray con los 2 siguientes países a Finlandia
subpaises = paises.slice(paises.indexOf('Finlandia')+1,paises.indexOf('Finlandia')+2);

// Mostrar el listado de países
console.log("Listado de países:");
subpaises.forEach((pais, index) => {
    document.writeln((index + 1)+ " | " + (pais) + "<br>");
});