//Mostrar una fecha con formato DiaSemana, DiaMes de Mes del Año a las horas:minutos:segundos. 
//Por ejemplo:  Miercoles, 9 de Diciembre del 2015 a las 18:45:32. 

var fecha = new Date();

var DiaSemana = diaSemana(fecha.getDay());
var DiaMes = fecha.getDate();
var MesDelAño = mesAño(fecha.getMonth());
var Año = fecha.getFullYear();
var horas = dobleDigito(fecha.getHours());
var minutos = dobleDigito(fecha.getMinutes());
var segundos = dobleDigito(fecha.getSeconds());

function dobleDigito(n){
    return (n<10)?'0'+n:n;
}

function diaSemana(dia){
    switch (dia) {
        case 0:
            return "Domingo";
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miercoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sabado";
    }
}

function mesAño(mes){
    switch (mes) {
        case 0:
            return "Enero";
        case 1:
            return "Febrero";
        case 2:
            return "Marzo";
        case 3:
            return "Abril";
        case 4:
            return "Mayo";
        case 5:
            return "Junio";
        case 6:
            return "Julio";
        case 7:
            return "Agosto";
        case 8:
            return "Septiembre";
        case 9:
            return "Octubre";
        case 10:
            return "Noviembre";
        case 11:
            return "Diciembre";
    }
}

//mostrar los resultados. 
document.writeln("<p>" 
    + DiaSemana + ", " + DiaMes + " de " + MesDelAño + " del " + Año + " a las " + horas + ":" + minutos + ":" + segundos + ".</p>"
);