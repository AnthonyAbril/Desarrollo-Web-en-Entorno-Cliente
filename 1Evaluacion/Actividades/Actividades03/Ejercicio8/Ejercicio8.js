/*
Introducir en un array los datos de un alumno codigo, nombre, apellidos, fecha_nacimiento, 
calificacion  con  los  siguientes  valores  1,  'Luis',  'Mas  Ros',  05/10/1990,  7.5.La  fecha  de 
nacimiento deberá introducirse en el array como una fecha. 
Recuperar  los  datos  del  alumno  y  mostrar  los  datos  en  una  tabla  además  de  la  edad  del 
alumno
*/

var datosAlumno = [1, 'Luis',  'Mas  Ros',  new Date(1990,10,5),  7.5];

function dobleDigito(n){
    return (n<10)?'0'+n:n;//si tiene menos de un digito le añade un 0 delante
}

function tabla(alumno){
    let lista = "";
    var edadAlumno = Math.floor(((new Date()).valueOf()-alumno[3].valueOf())/(86400000*30*12));
    alumno[alumno.length]=edadAlumno;

    alumno[3]=dobleDigito(alumno[3].getDate())+"/"+dobleDigito(alumno[3].getMonth())+"/"+alumno[3].getFullYear();

    let titulo = ['codigo', 'nombre', 'apellidos', 'fecha de nacimiento', 'calificacion', 'edad'];
    
    lista += "<table border=1>";  
    //hace una fila de tabla por cada atributo a mostrar incluyendole su titulo
    for (let index = 0; index < titulo.length; index++) {
        lista += "<tr>"
            +"  <th>"+titulo[index]+"</th>"
            +"  <td>"+alumno[index]+"</td>"
            +"</tr>"
    }
    lista += "</table>";
    
    return lista;
}

document.writeln(tabla(datosAlumno));
