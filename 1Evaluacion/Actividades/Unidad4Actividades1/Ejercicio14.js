/*

Insertar los países Polonia, Austria y Rumania después de Portugal

*/

// Definir el array de países
const paises = ["Países Bajos", "Grecia", "Alemania", "Suiza", "Bélgica", "Dinamarca", "Irlanda", "Suecia", "Finlandia", "Portugal", "Reino Unido", "España", "Rusia"];

//Insertar los países Polonia, Austria y Rumania después de Portugal
paises.splice(paises.indexOf("Portugal")+1,0,'Polonia','Austria' ,'Rumania');

// Mostrar el listado de países
console.log("Listado de países:");
paises.forEach((pais, index) => {
    document.writeln((index + 1)+ " | " + (pais) + "<br>");
});