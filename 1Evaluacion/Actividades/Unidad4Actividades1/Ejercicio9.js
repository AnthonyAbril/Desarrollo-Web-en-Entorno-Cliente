/*

Ordenar el array por los modelos de la Z a la A y mostrar el listado.

*/

// Definir el objeto (array asociativo)
const moviles = {
    "Apple": "iPhone 14",
    "Samsung": "Galaxy S23",
    "Xiaomi": "Mi 13 Pro",
    "Huawei": "P50 Pro",
    "OnePlus": "OnePlus 11"
};

// Convertir el objeto en un array de pares clave-valor y ordenar por el modelo (valor) de Z a A
const movilesOrdenados = Object.entries(moviles).sort((a, b) => {
    return b[1].localeCompare(a[1]); // Ordenar por el valor (modelo) de forma descendente
});

// Mostrar el listado ordenado
console.log("Listado de móviles ordenado por modelo (Z a A):");
movilesOrdenados.forEach(([marca, modelo]) => {
    document.writeln(`<br>Marca: ${marca}, Modelo: ${modelo}<br>`);
});
