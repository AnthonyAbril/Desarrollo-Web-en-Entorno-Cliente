/*

Crear un objeto llamado Producto con las siguientes propiedades: 
 
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

const Producto = { 
    codProducto: "",
    categoria: "",
    peso: "",
    precio: "",
    stock: "",
    Proveedor: "",
    descripcion: "",
    nombreProducto: "",
};