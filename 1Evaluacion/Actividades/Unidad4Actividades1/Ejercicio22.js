/*

Crear para el objeto Proveedor el siguiente método:
Proveedor: Permite crear una instancia con los datos de un proveedor.
*/

//Crear un objeto llamado Proveedor
const Proveedor = {
    CIF: "",
    nombreEmplresa: "",
    descripcion: "",
    sector: "",
    direccion: "",
    telefono: "",
    poblacion: "",
    codPostal: "",
    correo: "",
    
    // Método para mostrar la información del proveedor
    mostrarInfo: function() {
        return `Proveedor: ${this.nombreEmpresa}, CIF: ${this.CIF}, Descripción: ${this.descripcion}, Sector: ${this.sector}, Dirección: ${this.direccion}, Teléfono: ${this.telefono}, Población: ${this.poblacion}, Código Postal: ${this.codPostal}, Correo: ${this.correo}`;
    }
};

