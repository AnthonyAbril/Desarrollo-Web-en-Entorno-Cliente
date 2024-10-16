/*
Crear  una  función  que  devuelva  en  un  array  las  asignaruras  del  curso  pasado  como 
parámetro. 
*/

function asignaturasCurso(curso){
    switch (curso) {
        case "1DAM":
            return ["BD","FOL","PRO","LM","SINF"];
        case "2DAW":
            return ["DWEC","DWES","DIW","DAP","EIE"];
        case "2DAM":
            return ["ISO","PAR","FHR","GBD","LM"];
        case "1SMR":
            return ["ASO","SR","IAE","SGBD","SAD"];
        default:
            break;
    }

    return null;
}

document.writeln(asignaturasCurso("1DAM"));