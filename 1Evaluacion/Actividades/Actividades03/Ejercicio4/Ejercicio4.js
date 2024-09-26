//Resta 5 años, 11 meses y 18 días a la fecha actual. 

//Guardamos la fecha actual
var fechaActual = new Date();

//Modificamos sus atriburos de la fecha actual
fechaActual.setFullYear(fechaActual.getFullYear()-5);//restamos 5 años
fechaActual.setMonth(fechaActual.getMonth()-11);//restamos 11 meses
fechaActual.setDate(fechaActual.getDate()-18);//restamos 18 días

//guardamos sus atributos
var DiaSemana = diaSemana(fechaActual.getDay());
var DiaMes = fechaActual.getDate();
var MesDelAño = mesAño(fechaActual.getMonth());
var Año = fechaActual.getFullYear();
var horas = dobleDigito(fechaActual.getHours());
var minutos = dobleDigito(fechaActual.getMinutes());
var segundos = dobleDigito(fechaActual.getSeconds());

function dobleDigito(n){
    return (n<10)?'0'+n:n;//si tiene menos de un digito le añade un 0 delante
}

function diaSemana(dia){//Saca el nombre del dia de la semana
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

function mesAño(mes){//Saca el nombre del mes del año
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