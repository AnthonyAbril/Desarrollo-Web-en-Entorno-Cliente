//Introducir el número de horas trabajadas por un empleado y la fecha en las que las trabajo. 
//Si el día fue sábado o domingo el precio hora trabajada es 20€ en caso contrario 15€. Calcula 
//la cantidad de dinero que habrá que pagar al empleado por las horas trabajadas.  

var horasTrabajadas = 5;
var fechaTrabajo = new Date(2024,9,5);

function precioHora(dia){
    return (dia==6||dia==0)?20:15;
}

document.writeln(
    "<p>"+
    horasTrabajadas*precioHora(fechaTrabajo.getDay())+
    "</p>"
)
