//Crear  un  reloj  que  muestre  la  hora  actualizándose  por  pantalla  y  podamos  parar  con  un boton
 
var tiempo = new Date();
refresca();

function refresca(){
    hazAlgo();

    setTimeout(refresca,1000);
}

function hazAlgo(){
    tiempo = new Date();
    document.writeln("<p>"+tiempo.getSeconds()+"</p>");
}

document.writeln("<button onclick='clearTimeout(refresca)'>Parar</button>");  