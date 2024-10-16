/*
Crear  una  función  llamada  sueldoFinal,  que  calcule  el  sueldo  final  de  un  empleado.  Los 
parámetros  que  se  le  pasarán  a  la  función  son  el  sueldo  del  empleado,  el  porcentaje  de 
comisión y el porcentaje de retención.
*/

function calcularSueldoFinal(sueldo, porcentajeComision, porcentajeRetencion) {
    // Calcular la comisión
    const comision = sueldo * (porcentajeComision / 100);
    
    // Calcular el sueldo con comisión antes de retenciones
    const sueldoConComision = sueldo + comision;
    
    // Calcular la retención
    const retencion = sueldoConComision * (porcentajeRetencion / 100);
    
    // Calcular el sueldo final
    const sueldoFinal = sueldoConComision - retencion;
    
    return sueldoFinal;
}

const sueldoBase = 1000; // Sueldo del empleado
const comision = 10; // 10% de comisión
const retencion = 15; // 15% de retención

const sueldoFinal = calcularSueldoFinal(sueldoBase, comision, retencion);

document.writeln(`El sueldo final es: ${sueldoFinal}`);