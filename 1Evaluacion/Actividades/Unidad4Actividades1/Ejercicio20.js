/*

Combinar  dos  arrays  de  países  de  dos  continentes  en  un  array  de  países  y  mostrar  el 
resultado.

*/

// Definir el array de países
const America = ['Peru','Argentina','Mexico','Venezuela'];
const Asia = ['Japon','India','China'];

//Guarda en paisesinvertido el array invertido
paises = America.concat(Asia);

// Mostrar el listado de países
console.log("Listado de países:");
paises.forEach((pais, index) => {
    document.writeln((index + 1)+ " | " + (pais) + "<br>");
});