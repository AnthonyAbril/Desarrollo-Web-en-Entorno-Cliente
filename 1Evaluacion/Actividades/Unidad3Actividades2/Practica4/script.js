/*
Crear  una página con un iframe y mostrar  aleatoriamente videos de youtube. Las URL de 
los videos estarán en un array de 10 elementos que habremos rellenado previamente (por 
código). Las obtendremos desde "Compartir" e "Insertar" y añadiremos a la URL 
?autoplay=1 para que se reproduzca automáticamente.
*/

// Array con 10 URLs de videos de YouTube
const videos = [
    "https://www.youtube.com/embed/hIaYzwf0A8A",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/n8X9_MgEdCg",
    "https://www.youtube.com/embed/B7xai5u_tnk",
    "https://www.youtube.com/embed/60ItHLz5WEA",
    "https://www.youtube.com/embed/Uc59ulnJI2o",
    "https://www.youtube.com/embed/1RiaSfzxS90",
    "https://www.youtube.com/embed/hIaYzwf0A8A",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/hIaYzwf0A8A"
];

// Función para seleccionar un video aleatorio
function videoAleatorio() {
    // Obtenemos un índice aleatorio entre 0 y el tamaño del array de videos
    const indiceAleatorio = Math.floor(Math.random() * videos.length);
    
    // Devolvemos la URL con autoplay activado
    return videos[indiceAleatorio] + "?autoplay=1";
}

// Seleccionamos el iframe del DOM
const videoIframe = document.getElementById("videoIframe");

// Asignamos la URL aleatoria al atributo 'src' del iframe
videoIframe.src = videoAleatorio();