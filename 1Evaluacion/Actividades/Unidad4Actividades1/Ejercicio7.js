/*

Buscar si existe la marca Sony y la marca Motorola.

*/

// Definir el objeto (array asociativo)
const moviles = {
    "Apple": "iPhone 14",
    "Samsung": "Galaxy S23",
    "Xiaomi": "Mi 13 Pro",
    "Huawei": "P50 Pro",
    "OnePlus": "OnePlus 11"
};

// Función para verificar si una marca existe
function buscarMarca(marca) {
    return (marca in moviles)?`<br>La marca ${marca} existe en el listado.<br>`:`<br>La marca ${marca} no existe en el listado.<br>`;
    
}

// Buscar las marcas Sony y Motorola
document.writeln(buscarMarca("Sony"));
document.writeln(buscarMarca("Motorola"));