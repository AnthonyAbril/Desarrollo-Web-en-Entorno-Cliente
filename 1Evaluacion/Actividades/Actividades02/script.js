var libros = [];

libros[0] = [1, "Access para Windows", "Charles Siegel", "Anaya", "Informatica", "84-7614-759-7", 450, 45,67];
libros[1] = [2, "Salud", "Eduardo Almansa", "Deusto", "Medicina", "24-3547-590-1", 153, 23.18];
libros[2] = [3, "Redes de Computadores", "Luis Cárcel", "Paraninfo", "Informatica", "47-8829-435-7", 215, 32.86];

function introducirCodigo(codigo){

    for (let libro of libros) {
        if (codigo == libro[0])
           return (libro);
    }
    return "El libro solicitado no existe!!";
}

function mostrarLibro(libro) {
    let titulo = ["Código", "Título", "Autor", "Editorial", "Tema", "ISBN", "Páginas", "Precio"];

    for (let lineas of libro) {
        if (codigo == lineas[0])
    }
}

var libro = (introducirCodigo(parseInt(prompt("Introduce el codigo"))));



document.documentElement.innerHTML =    
"<table border=1>"
+"<tr>"
+"  <th>Código</th>"
+"  <td>"+libro[0]+"</td>"
+"</tr>"
+"<tr>"
+"  <th>Título</th>"
+"  <td>"+libro[1]+"</td>"
+"</tr>"
+"<tr>"
+"  <th>Autor</th>"
+"  <td>"+libro[3]+"</td>"
+"</tr>"
+"<tr>"
+"  <th>Editorial</th>"
+"  <td>"+libro[4]+"</td>"
+"</tr>"
+"<tr>"
+"  <th>Tema</th>"
+"  <td>"+libro[5]+"</td>"
+"</tr>"
+"<tr>"
+"  <th>ISBN</th>"
+"  <td>"+libro[6]+"</td>"
+"</tr>"
+"<tr>"
+"  <th>Páginas</th>"
+"  <td>"+libro[7]+"</td>"
+"</tr>"
+"<tr>"
+"  <th>Precio</th>"
+"  <td>"+libro[8]+"</td>"
+"</tr>"
+"</table>";