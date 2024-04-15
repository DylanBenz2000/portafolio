// Seleccionar todas las imágenes dentro de la galería
const galleryImages = document.querySelectorAll('#formacion-y-cursos .card-img, #experiencia .card-img-exp');

// Función para alternar entre el modo de pantalla completa
function toggleFullScreen(image) {
    // Si no hay ningún elemento en pantalla completa
    if (!document.fullscreenElement) {
        // Solicitar pantalla completa para la imagen específica pasada como argumento
        console.log("Entraste pantalla completa");
        image.requestFullscreen();
    } else {
        // Salir del modo de pantalla completa si ya estamos en pantalla completa
        document.exitFullscreen();
    }
}

// Agregar un evento de clic a cada imagen para alternar el modo de pantalla completa
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        toggleFullScreen(this); // Pasar la imagen actual como argumento a la función toggleFullScreen
    });
});

// Agregar un evento para detectar cambios en el modo de pantalla completa
document.addEventListener("fullscreenchange", function() {
    // Si hay un elemento en pantalla completa
    if (document.fullscreenElement) {
        // Registrar en la consola que se ha entrado en el modo de pantalla completa y mostrar la URL de la imagen en pantalla completa
        console.log("Elemento en pantalla completa:", document.fullscreenElement.src);
    } else {
        // Registrar en la consola que se ha salido del modo de pantalla completa
        console.log("Saliendo de pantalla completa");
    }
});
