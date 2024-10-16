/*

Eliminar los países Irlanda y Suecia

*/

// Definir el array de países
const paises = ["Países Bajos", "Grecia", "Alemania", "Suiza", "Bélgica", "Dinamarca", "Irlanda", "Suecia", "Finlandia", "Portugal", "Reino Unido", "España", "Rusia"];

//Elimina los paises Irlanda y Suecia del array
delete(paises[paises.indexOf('Irlanda')])
delete(paises[paises.indexOf('Suecia')])

// Mostrar el listado de países
console.log("Listado de países:");
paises.forEach((pais, index) => {
    document.writeln((index + 1)+ " | " + (pais) + "<br>");
});