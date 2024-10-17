// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el botón por su ID
    const sendButton = document.getElementById('sendButton');

    // Añadimos un evento de clic al botón
    sendButton.addEventListener('click', function() {
        // Obtenemos los valores del nombre del juego y el estado
        const gameName = document.getElementById('gameName').value;
        const status = document.getElementById('status').value;

        // Generamos el mensaje para WhatsApp
        const message = `El juego ${gameName} ${status}.`;

        // Número de WhatsApp del grupo o contacto (reemplaza con el número del grupo)
        const phoneNumber = "573219716889"; // Ejemplo: +52 para México, seguido del número

        // Generamos el enlace de WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Redirigimos al usuario a WhatsApp
        window.open(whatsappURL, '_blank');
    });
});
