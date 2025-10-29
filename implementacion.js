const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'es-ES';
recognition.interimResults = true;

const transcriptionText = document.getElementById('transcription-text');
const textArea = document.getElementById('texto');
const videosMap = {
    pregunta: document.getElementById("video1"),
    zumo: document.getElementById("video2"),
    dura: document.getElementById("video3"),
    desayuno: document.getElementById("video4")
};

recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript.toLowerCase();
    console.log("Transcripción detectada:", transcript);
    textArea.value = transcript;

    for (const palabra in videosMap) {
        if (transcript.includes(palabra)) {
            reproducirVideo(videosMap[palabra]);
            break;
        }
    }
};

recognition.onerror = (event) => {
    console.error("Error en el reconocimiento:", event.error);
};

recognition.onstart = () => {
    transcriptionText.innerText = "Escuchando...";
};

recognition.onend = () => {
    transcriptionText.innerText = "Esperando transcripción de lengua de señas...";
    recognition.start();
};

function startTranscription() {
    transcriptionText.innerText = "Escuchando...";
    recognition.start();
}

function reproducirVideo(videoEl) {
    // Ocultar todos los videos
    Object.values(videosMap).forEach(v => {
        v.classList.remove("active");
        v.pause();
        v.currentTime = 0;
    });

    // Mostrar el video correcto
    videoEl.classList.add("active");
    videoEl.play();
    transcriptionText.innerText = "Reproduciendo video...";

    videoEl.onended = () => {
        videoEl.classList.remove("active");
        transcriptionText.innerText = "Esperando transcripción de lengua de señas...";
    };
}
