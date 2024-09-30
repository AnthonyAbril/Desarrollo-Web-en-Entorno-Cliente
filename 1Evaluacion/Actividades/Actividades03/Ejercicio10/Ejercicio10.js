/*
Introducir en un array nombre, apellidos y sueldo de varios trabajadores y la fecha de alta 
en  la  empresa.  Las fechas  deberán  introducirse como  fechas.  

Recorrer  el  array  y  mostrar para cada trabajador la retención que debe aplicarsele sobre 
el sueldo teniedo en cuenta que los  trabajadores  incorporados  antes  de  1980  tienen  una
retención  del  20%,  los trabajadores  con  fecha entre 1980 y  2000  una  retención  del 15%  
y  los  trabajadores  con fecha posterior al 2000 la retención que aplicaremos será el 5% del sueldo.
*/

var trabajadores = [];

trabajadores[trabajadores.length] = ['Anthony', 'Abril Rueda',1500,new Date(2024,10,2),new Date(2023,10,2)];
trabajadores[trabajadores.length] = ['Anthony', 'Abril Rueda',1500,new Date(2024,10,2),new Date(2023,10,2)];

function sueldoRetenido(lista){
    let retencion;

    for (const trabajador of lista) {
        let FechaIncorporacion = trabajador[3];

        if (FechaIncorporacion<1980){
            retencion = 20;
        }else{
            if(FechaIncorporacion<=2000){
                retencion = 15;
            }else{
                retencion = 5;
            }
        }

        document.writeln("<p>Al trabajador "+trabajador[0]+" "+trabajador[1]+" se le aplicara la retencion del "+ retencion +"%</p>");
    }
}

sueldoRetenido(trabajadores);