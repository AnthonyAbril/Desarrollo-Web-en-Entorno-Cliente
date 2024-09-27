//Crear  un  reloj  que  muestre  la  hora  actualizándose  por  pantalla  y  podamos  parar  con  un boton
 
var tiempo = new Date();

function dobleDigito(n){
    return (n<10)?'0'+n:n;//si tiene menos de un digito le añade un 0 delante
}

document.writeln("<div id='clock'></div>");

var detener = false;
refresca();

function refresca(){
    if(detener==false){
        hazAlgo();

        setTimeout(refresca,1000);
    }else{
        clearTimeout(tiempo_aviso);
    }
}

function hazAlgo(){
    tiempo = new Date();
    reloj = dobleDigito(tiempo.getHours())+":"+dobleDigito(tiempo.getMinutes())+":"+dobleDigito(tiempo.getSeconds());
    document.getElementById('clock').innerHTML = "<p>"+reloj+"</p><button onclick='detener=true'>Parar</button>";
}