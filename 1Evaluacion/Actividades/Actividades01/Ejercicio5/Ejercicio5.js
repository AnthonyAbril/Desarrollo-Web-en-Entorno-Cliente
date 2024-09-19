//Crear una variable tipo texto y nos devuelve si tiene asociado un valor.
var texto = "cadena de texto"

//si tiene un valor asociado lo muestra
if (typeof texto === "string" && texto.length !== 0) {
    document.writeln("<p>tiene asociado un valor</p>");
}else{
    document.writeln("<p>no tiene asociado un valor</p>");
}