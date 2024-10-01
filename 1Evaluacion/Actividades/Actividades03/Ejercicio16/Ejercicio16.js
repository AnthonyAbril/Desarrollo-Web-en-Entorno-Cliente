/*
Simular la extracción de una ficha de dominó
*/

var ficha = [];

ficha[0] = Math.round(Math.random(0*6));
ficha[1] = Math.round(Math.random(0*6));

document.writeln(ficha[0],ficha[1]);