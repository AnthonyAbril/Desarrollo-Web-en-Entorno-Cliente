//Mostrar una fecha con formato dd/mm/aaaa utilizando 0 delante de los días o meses de 1 digito.  
var fecha = new Date();

//añadir un 0 delante si es necesario
function dobleDigito(n){
    return (n<10)?'0'+n:n;
}

//mostrar los resultados. 
document.writeln("<p>" 
    + dobleDigito(fecha.getDate())+"/"+dobleDigito(fecha.getMonth())+"/"+fecha.getFullYear() +"</p>"
);