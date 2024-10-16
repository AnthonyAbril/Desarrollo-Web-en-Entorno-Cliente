/*

Mostrar el número de Marcas del array.

*/

// Definir el objeto (array asociativo)
const moviles = {
    "Apple": "iPhone 14",
    "Samsung": "Galaxy S23",
    "Xiaomi": "Mi 13 Pro",
    "Huawei": "P50 Pro",
    "OnePlus": "OnePlus 11"
};

// Obtener el número de marcas
const numeroDeMarcas = Object.keys(moviles).length;

// Mostrar el número de marcas
document.writeln(`Número de marcas en el listado: ${numeroDeMarcas}`);
