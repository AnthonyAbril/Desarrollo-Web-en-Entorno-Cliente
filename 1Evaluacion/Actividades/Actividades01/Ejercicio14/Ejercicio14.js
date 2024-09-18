//Programa que muestre en pantalla la tabla de multiplicar del 1 al 10 con el formato:

var n = 2;
document.write("<p>Tabla del "+2+"<br>*********</p>"); 

for (i=1; i<=10; i++) { 
    document.write(i+"x"+n+"="+(i*n)+"<br>"); 
}