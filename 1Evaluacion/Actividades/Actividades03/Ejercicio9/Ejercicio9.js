/*
Introducir la fecha de entrega de un documento y nos diga si está dentro o fuera de plazo 
teniendo en cuenta que la fecha de entrega límite es la fecha actual.
*/

var fechaEntrega = new Date(2024,8,28); 
var fechaLimite = new Date();

function comprobarEntrega(Entrega, Limite){
    
    if(Entrega.valueOf() <= Limite.valueOf()){
        document.write("<p>Entregado a tiempo</p>")
    }else{
        document.write("<p>Entregado tarde</p>")
    }
}

comprobarEntrega(fechaEntrega,fechaLimite);
