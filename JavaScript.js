const videoInput = document.getElementById("video-upload");
const videoPlayer = document.getElementById("video-player");
const transcription = document.getElementById("video-transcription");

// Mostrar previsualización al seleccionar un video
videoInput.addEventListener("change", () => {
    const file = videoInput.files[0];
    if (file) {
        const url = URL.createObjectURL(file);
        videoPlayer.src = url;
        videoPlayer.load();
    }
});

// Limpiar selección de video
function clearVideoSelection() {
    videoInput.value = "";
    videoPlayer.src = "";
    videoPlayer.load();
    transcription.innerHTML = '<p class="transcription-text">Esperando la transcripción del video...</p>';
}

// Simulación de transcripción
function transcribeVideo() {
    if (!videoInput.files[0]) {
        alert("Por favor, selecciona un video primero.");
        return;
    }

    transcription.innerHTML = '<p class="transcription-text">Transcribiendo el video, por favor espera...</p>';

    setTimeout(() => {
        transcription.innerHTML = '<p class="transcription-text">Transcripción completa: Buenos días. ¿Cómo estás? Yo bien, mal, regular. ¿Dónde vives? ¿Dónde está la Plaza Mayor?.</p>';
    }, 2000);
}
