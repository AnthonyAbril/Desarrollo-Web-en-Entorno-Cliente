function temporizadorSimple(duracion) {
    let tiempoRestante = duracion; // Tiempo inicial en segundos
  
    const intervalo = setInterval(() => {
      console.log(tiempoRestante); // Mostrar el tiempo restante en la consola
  
      tiempoRestante--; // Reducir el tiempo restante
  
      if (tiempoRestante < 0) {
        clearInterval(intervalo); // Detener el temporizador cuando llegue a 0
        console.log("¡Tiempo terminado!"); // Mensaje final
      }
    }, 1000); // Ejecutar cada segundo
  }
  
  // Llamar al temporizador con 10 segundos de duración
  temporizadorSimple(10);
  