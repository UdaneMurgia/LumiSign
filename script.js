const texto = document.getElementById("texto");
const btnLeer = document.getElementById("btnLeer");
const btnDetener = document.getElementById("btnDetener");

let synth = window.speechSynthesis;
let utterance;

btnLeer.addEventListener("click", () => {
    if (texto.value.trim() === "") {
        alert("Por favor, escribe un texto para leer.");
        return;
    }
    utterance = new SpeechSynthesisUtterance(texto.value);
    synth.speak(utterance);
});

btnDetener.addEventListener("click", () => {
    if (synth.speaking) {
        synth.cancel();
    }
});
