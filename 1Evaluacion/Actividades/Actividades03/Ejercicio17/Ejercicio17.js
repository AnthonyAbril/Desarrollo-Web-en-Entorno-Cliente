/*
Simular la extracción de una carta de la baraja española. 
*/

var palo = ['Oros', 'Copas', 'Espadas', 'Bastos'];

var carta = "La carta es un " + (Math.floor(Math.random() * 12)+1) + " de " + palo[Math.floor(Math.random() * 4)];

document.writeln(carta);      