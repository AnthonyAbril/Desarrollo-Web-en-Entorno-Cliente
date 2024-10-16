/*

Función  que  devuelva  un  array  con  los  valores  de  las  posiciones  múltiplo  de  5  del  array 
pasado como parámetro.

*/

function multiploCinco(arr){
    arrResult = [];
    //saca los valores recorriendo las posiciones de 5 en 5
    for (let index = 0; index < arr.length; index+=5) {
        if(index!=0)arrResult.push(arr[index]);
    }

    return arrResult
}

document.writeln(multiploCinco([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]));