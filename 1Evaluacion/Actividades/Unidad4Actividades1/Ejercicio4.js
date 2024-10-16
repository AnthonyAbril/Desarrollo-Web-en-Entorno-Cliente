/*

Crear una función que pasemos como parámetro la letra del tipo de carnet de conducir de 
una persona y nos muestre que vehículos podemos conducir
 
*/

function vehiculosAutorizados(autorizacion){
    switch (autorizacion) {
        case "AM":
            return "Licencia de ciclomotor.";
        case "A1":
            return "Motos sin sidecar con una cilindrada máxima de 125 cc.";
        case "A2":
            return "Motocicletas, con o sin sidecar.";
        case "A":
            return "Motocicletas de cualquier cilindrada.";
        case "B":
            return "Turismos, furgonetas no supere los 3.500 kg.";
        case "C1":
            return "Automóviles entre 3.500 kg y los 7.500 kg.";
        case "C":
            return "Superior a los 3.500 kg y con menos de 9 asientos.";
        case "D1":
            return "Vehículos de más de 9 y menos de 17 plazas.";
        case "D":
            return "Automóviles de más de 9 plazas, sin límite máximo";
        case "BTP":
            return "Vehículos especiales, taxis, prioritarios y transporte escolar.";
        default:
            break;
    }
    return null;
}

autorizacion = "B";
document.writeln(`Usted tiene la autorizacion ${autorizacion} que le permite conducir ${vehiculosAutorizados(autorizacion)}`);