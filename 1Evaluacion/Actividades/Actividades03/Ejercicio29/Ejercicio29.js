/*
Crear una variable con el contenido “Fecha: 23-12-2012 Hora: 19,45,00” y sustituir los – 
(guiones) por / (barras) y las , (comas) por : (dos puntos)
*/

var cadena = "Fecha: 23-12-2012 Hora: 19,45,00";


document.writeln(cadena.replaceAll("-", "/").replaceAll(",",":"));