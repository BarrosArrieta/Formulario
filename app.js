// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos el formulario y el botón por su ID
    const gameForm = document.getElementById('gameForm');
    const sendButton = document.getElementById('sendButton');

    // Añadimos un evento de envío al formulario
    gameForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto

        // Obtenemos los valores del nombre del juego y el estado
        const gameName = document.getElementById('gameName').value.trim();
        const status = document.getElementById('status').value;

        // Validación básica para asegurarnos de que los campos estén llenos
        if (!gameName || !status) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Generamos el mensaje para WhatsApp
        const message = `El juego ${gameName} ${status}.`;

        // Número de WhatsApp del grupo o contacto
        const phoneNumber = "573219716889";

        // Generamos el enlace de WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Redirigimos al usuario a WhatsApp
        window.open(whatsappURL, '_blank');
    });

    // Reproducimos la música automáticamente al cargar la página
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.play().catch((error) => {
            console.log("Autoplay fue bloqueado. El usuario necesita interactuar con la página.");

            // Crear un botón para pedir al usuario que inicie la música si autoplay está bloqueado
            const playButton = document.createElement('button');
            playButton.innerText = "Reproducir música";
            playButton.style.position = 'fixed';
            playButton.style.bottom = '20px';
            playButton.style.left = '50%';
            playButton.style.transform = 'translateX(-50%)';
            playButton.style.padding = '10px 20px';
            playButton.style.backgroundColor = '#25D366';
            playButton.style.color = 'white';
            playButton.style.border = 'none';
            playButton.style.borderRadius = '5px';
            playButton.style.cursor = 'pointer';

            document.body.appendChild(playButton);

            // Cuando el usuario haga clic en el botón, se reproducirá la música
            playButton.addEventListener('click', () => {
                audioPlayer.play();
                playButton.remove(); // Quitamos el botón después de que la música empiece
            });
        });
    }
});
