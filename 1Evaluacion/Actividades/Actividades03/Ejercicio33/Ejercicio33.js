/*
Pedir  un  texto  por  teclado  y  encriptar  el  mensaje  sumando  5  al  código  ASCII  de  cada
carácter. Mostrar el mensaje encriptado. Desencriptar el mensaje realizando la operación 
inversa. Mostrar el mensaje encriptado. Mostrar el mensaje desencriptado.
*/

var cadena = prompt("Introduce un texto");

function encriptado(cad){
    for (let ch of cad.split()){
        console.log(ch"="+ch);
    }

    return cad.join();
}

document.writeln(encriptado(cadena));