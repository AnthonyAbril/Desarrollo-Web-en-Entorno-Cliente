/*
Simular la extracción de una ficha de dominó
*/

var ficha = [];

ficha[0] = Math.floor(Math.random() * 6) + 1;
ficha[1] = Math.floor(Math.random() * 6) + 1;

document.writeln(ficha[0],"|",ficha[1]);      