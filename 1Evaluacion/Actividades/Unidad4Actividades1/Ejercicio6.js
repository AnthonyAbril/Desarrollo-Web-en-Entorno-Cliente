/*

Crear un array asociativo cuya clave es la marca de un móvil y el valor asociado el modelo y 
mostrar el listado.

*/

// Definir el objeto (array asociativo)
const moviles = {
    "Apple": "iPhone 14",
    "Samsung": "Galaxy S23",
    "Xiaomi": "Mi 13 Pro",
    "Huawei": "P50 Pro",
    "OnePlus": "OnePlus 11"
};

// Mostrar el listado de marcas y modelos
document.writeln("Listado de móviles:<br>");
for (const marca in moviles) {
    document.writeln(`<br>Marca: ${marca}, Modelo: ${moviles[marca]}<br>`);
}
