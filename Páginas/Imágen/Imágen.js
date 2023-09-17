// gallery.js

// Obtén elementos del DOM
const ImágenThumbnails = document.getElementById("Imágen-thumbnails");
const imageDisplay = document.getElementById("image-display");

// Maneja el clic en una miniatura
ImágenThumbnails.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        const imageUrl = event.target.src;
        // Actualiza la imagen en el área de visualización
        imageDisplay.querySelector("img").src = imageUrl;
    }
});
