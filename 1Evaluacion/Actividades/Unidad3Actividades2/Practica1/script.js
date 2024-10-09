/*
Realizar una aplicación en JavaScript que realice lo siguiente:  
(Se recomienda usar Google Chrome para probar este ejercicio con los pop-ups activados y 
desactivados)  
    • Abra una nueva ventana no redimensionable.  
        o Hacer una función y dentro de esa función:  
        o Escribir en la nueva ventana <h3>Ejemplo de Ventana Nueva</h3>  
        o URL Completa: XXXXX  
        o Protocolo utilizado: XXXXX  
        o Nombre en código del navegador: XXXXX  
        o Que detecte si está JAVA disponible en esa ventana del navegador y si es así que 
        escriba:  
            ▪ Java SI disponible en esta ventana, o bien.  
            ▪ Java NO disponible en esta ventana.  
        o Que abra un iframe con el contenido de www.google.esy de 800x600.  
Y ahora fuera del código de la función que siga haciendo lo siguiente:  
    • Que escriba en la ventana principal <h1>TAREA DWEC03</H2><HR />  
    • Que solicite: introduzca su nombre y apellidos.  
    • Que solicite: introduzca DIA de nacimiento.  
    • Que solicite: introduzca MES de nacimiento.  
    • Que solicite: introduzca AÑO de nacimiento.  
    • Una vez solicitados esos datos imprimirá en la ventana principal:  
        o Buenos dias XXXXX  
        o Tu nombre tiene XX caracteres, incluidos espacios.  
        o La primera letra A de tu nombre está en la posición: X  
        o La última letra A de tu nombre está en la posición: X  
        o Tu nombre menos las 3 primeras letras es: XXXXXXXX  
        o Tu nombre todo en mayúsculas es: XXXXXXXX  
        o Tu edad es: XX años.  
        o Naciste un feliz XXXXXX del año XXXX.  
        o El coseno de 180 es: XXXXXXXXXX  
        o El número mayor de (34,67,23,75,35,19) es: XX  
        o Ejemplo de número al azar: XXXXXXXXXX  
Donde aparecen las XXXX tendrá que aparecer el cálculo o texto que corresponda

*/

//• Abra una nueva ventana no redimensionable.  
var miVentana;
function abrirVentana(){
    miVentana=window.open('emergente/emergente.html','ventanaEmergente','resizable=no');

    s(miVentana);
}

//o Hacer una función y dentro de esa función:
function s(ventana){
    //o Escribir en la nueva ventana <h3>Ejemplo de Ventana Nueva</h3>  
    ventana.document.writeln("<h3>Ejemplo de Ventana Nueva</h3>");
    
    //o URL Completa: XXXXX  
    ventana.document.writeln("<p>URL Completa: "+window.location.href+"</p>");

    //o Protocolo utilizado: XXXXX
    ventana.document.writeln("<p>Protocolo utilizado: "+(window.location.protocol)+"</p>");

    //o Nombre en código del navegador: XXXXX 
    ventana.document.writeln("<p>Nombre en código del navegador: "+(window.navigator.userAgent)+"</p>");

    //o Que detecte si está JAVA disponible en esa ventana del navegador y si es así que escriba:  
    //    ▪ Java SI disponible en esta ventana, o bien.  
    //    ▪ Java NO disponible en esta ventana.  
    var disponible=window.navigator.javaEnabled();
    ventana.document.writeln("<p>Java "+(disponible?"SI":"NO")+" disponible en esta ventana</p>");

    //o Que abra un iframe con el contenido de www.google.es y de 800x600.
    ventana.document.writeln("<iframe id='marco' src='https://es.wikipedia.org/wiki/Wikipedia:Portada' width='800' height='600' frameborder='0'></iframe>");
}

//Y ahora fuera del código de la función que siga haciendo lo siguiente:  

    //• Que escriba en la ventana principal <h1>TAREA DWEC03</H2><HR />  
    window.document.write("<h1>TAREA DWEC03</H2><HR />");
    //• Que solicite: introduzca su nombre y apellidos.  
    var nombre = window.prompt("Introduzca su nombre y apellidos");

    //• Que solicite: introduzca DIA de nacimiento.  
    var diaNacimiento = parseInt(window.prompt("Introduzca DIA de nacimiento"));

    //• Que solicite: introduzca MES de nacimiento.  
    var mesNacimiento = parseInt(window.prompt("Introduzca MES de nacimiento"));

    //• Que solicite: introduzca AÑO de nacimiento.  
    var anyoNacimiento = parseInt(window.prompt("Introduzca AÑO de nacimiento"));

    var fechaNacimiento = new Date(anyoNacimiento, mesNacimiento, diaNacimiento);

    //• Una vez solicitados esos datos imprimirá en la ventana principal:  
    function imprimir(){
        //o Buenos dias XXXXX  
        window.document.writeln("<p>Buenos dias "+nombre+"</p>");

        //o Tu nombre tiene XX caracteres, incluidos espacios.  
        let caracteres = nombre.length
        window.document.writeln("<p>Tu nombre tiene "+caracteres+" caracteres, incluidos espacios. </p>");

        //o La primera letra A de tu nombre está en la posición: X  
        window.document.writeln("<p>La primera letra A de tu nombre está en la posición: "+ (nombre.indexOf('A')+1) +"</p>");

        //o La última letra A de tu nombre está en la posición: X  
        window.document.writeln("<p>La última letra A de tu nombre está en la posición: "+ (nombre.lastIndexOf('A')+1) +"</p>"); 

        //o Tu nombre menos las 3 primeras letras es: XXXXXXXX  
        window.document.writeln("<p>Tu nombre menos las 3 primeras letras es: "+ (nombre.substring(3)) +"</p>"); 
        
        //o Tu nombre todo en mayúsculas es: XXXXXXXX  
        window.document.writeln("<p>Tu nombre todo en mayúsculas es: "+ (nombre.toUpperCase()) +"</p>")

        // Obtenemos la fecha actual
        let fechaActual = new Date();
        let diaActual = fechaActual.getDate();
        let mesActual = fechaActual.getMonth() + 1; // Los meses en JavaScript empiezan en 0, por eso se suma 1
        let anyoActual = fechaActual.getFullYear();

        // Calculamos la edad
        let edad = anyoActual - anyoNacimiento;

        // Ajuste por si aún no ha cumplido años este año
        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
            edad--;
        }

        //o Tu edad es: XX años.  
        window.document.writeln("<p>Tu edad es: "+(edad)+"</p>");

        //o Naciste un feliz XXXXXX del año XXXX.  
        window.document.writeln("<p>Naciste un feliz "+ diaNacimiento + " del " + mesNacimiento + " del año " + anyoNacimiento +"</p>")

        //o El coseno de 180 es: XXXXXXXXXX  
        window.document.writeln("<p>El coseno de 180 es: "+ Math.cos(180 * (Math.PI / 180)) +"</p>")

        //o El número mayor de (34,67,23,75,35,19) es: XX  
        let numeros = [34, 67, 23, 75, 35, 19];
        window.document.writeln("<p>El coseno de 180 es: "+ Math.max(...numeros) +"</p>")

        //o Ejemplo de número al azar: XXXXXXXXXX  
        window.document.writeln("<p>Ejemplo de número al azar: "+ Math.round(Math.random() * 100) +"</p>")
    }

    imprimir();