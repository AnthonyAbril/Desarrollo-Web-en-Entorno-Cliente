/*
Introducir la fecha inicial y final de una nómina y calcular lo que debe cobrar el empleado 
sabiendo que cada día trabajado recibe 55 € y tiene una retención del 12% sobre el sueldo. 
*/
var FechaInicial = new Date(2020,5,5);
var FechaFinal = new Date(2020,5,7);
var Diferencia = (FechaFinal.valueOf()-FechaInicial.valueOf())/86400000;



function cuantoCobra(dias){
    var sueldo = dias*55;
    var retencion = sueldo*0.12;

    return sueldo-retencion;
}

document.writeln(
    "<p>"+
    cuantoCobra(Diferencia)+
    "</p>"
)
