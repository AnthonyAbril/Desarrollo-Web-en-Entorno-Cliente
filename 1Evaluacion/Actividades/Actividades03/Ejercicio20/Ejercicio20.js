/*
Generar 15 extracciones de una bola de una bolsa en la que hay bolas de color rojo y negro. 
Indicar el porcentaje con dos decimales de bolas rojas y bolas negras obtenidas.
*/

function extraeBolas(cantidad){

    let bolas = [];

    while(bolas.length<cantidad){

        bolas[bolas.length] = (Math.floor(Math.random() * 2)==0)?"rojo":"negro";
    }

    return bolas;
}

function cuentaPorcentajes(bolas){
    let negras = 0;
    let rojas = 0;

    for (const bola of bolas) {
        (bola=="negro")?negras++:rojas++;
    }

    negras = ((negras*100)/bolas.length).toFixed(2);
    rojas = ((rojas*100)/bolas.length).toFixed(2);

    document.writeln("Hay "+negras+"% negras y "+rojas+"% rojas.");
}

console.log(cuentaPorcentajes(extraeBolas(15)));