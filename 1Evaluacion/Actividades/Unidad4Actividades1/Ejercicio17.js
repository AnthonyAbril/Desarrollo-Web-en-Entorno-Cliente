/*

Devolver un subarray con los países desde España al final del array.

*/

// Definir el array de países
const paises = ["Países Bajos", "Grecia", "Alemania", "Suiza", "Bélgica", "Dinamarca", "Irlanda", "Suecia", "Finlandia", "Portugal", "Reino Unido", "España", "Rusia"];

//Guarda en subpaises un subarray con los países desde España al final del array.
subpaises = paises.slice(paises.indexOf('España'));

// Mostrar el listado de países
console.log("Listado de países:");
subpaises.forEach((pais, index) => {
    document.writeln((index + 1)+ " | " + (pais) + "<br>");
});