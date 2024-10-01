/*
Generar el número premiado de la ONCE
*/

var numeroOnce = "";
var serie = "";


while (numeroOnce.length<5){
    numeroOnce += ((Math.floor(Math.random() * 9)+1)+"");
}
while(serie.length<3){
    serie += ((Math.floor(Math.random() * 9)+1)+"");
}

document.writeln("Número: "+numeroOnce+", con la serie "+serie);