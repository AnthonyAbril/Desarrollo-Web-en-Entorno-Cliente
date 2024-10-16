/*

Sustituir Alemania y Suiza por Malta, Mónaco y Noruega

*/

// Definir el array de países
const paises = ["Países Bajos", "Grecia", "Alemania", "Suiza", "Bélgica", "Dinamarca", "Irlanda", "Suecia", "Finlandia", "Portugal", "Reino Unido", "España", "Rusia"];

//Sustituimos con splice Alemania y Suiza por Malta, Mónaco y Noruega
paises.splice(paises.indexOf("Alemania"),2,'Malta','Mónaco' ,'Noruega');

// Mostrar el listado de países
console.log("Listado de países:");
paises.forEach((pais, index) => {
    document.writeln((index + 1)+ " | " + (pais) + "<br>");
});