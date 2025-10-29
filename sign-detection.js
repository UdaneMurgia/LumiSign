let model;
const video = document.getElementById('video');
const output = document.getElementById('output');

let lastX = null;
let movementCounter = 0;
let animationFrameId;
let recognitionActive = false;
let accumulatedText = "";

// Configurar cámara
async function setupCamera() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 },
        audio: false
    });
    video.srcObject = stream;
    return new Promise((resolve) => {
        video.onloadedmetadata = () => resolve(video);
    });
}

// Cargar modelo
async function loadModel() {
    model = await handpose.load();
    console.log("Modelo cargado");
}

// Función de detección combinada
async function detectHands() {
    if (!recognitionActive) return;

    const predictions = await model.estimateHands(video);

    if (predictions.length > 0) {
        const xPos = predictions[0].landmarks[0][0];

        // Movimiento horizontal para "Hola"
        if (lastX !== null) {
            const movement = Math.abs(xPos - lastX);
            if (movement > 30) movementCounter++;
        }
        lastX = xPos;

        if (movementCounter > 3) {
            accumulatedText += " Hola";
            output.textContent = accumulatedText;
            movementCounter = 0;
        }

        // Detección de número de dedos levantados
        const landmarks = predictions[0].landmarks;
        let fingersUp = 0;
        const fingerTips = [4, 8, 12, 16, 20];
        const fingerBases = [2, 5, 9, 13, 17];

        for (let i = 0; i < 5; i++) {
            if (landmarks[fingerTips[i]][1] < landmarks[fingerBases[i]][1]) fingersUp++;
        }

        const numberNames = ["Cero", "Uno", "Dos", "Tres", "Cuatro", "Cinco"];
        if (fingersUp >= 0 && fingersUp <= 5) {
            accumulatedText += " " + numberNames[fingersUp];
            output.textContent = accumulatedText;
        }
    }

    animationFrameId = requestAnimationFrame(detectHands);
}

// Iniciar reconocimiento
async function startSignRecognition() {
    recognitionActive = true;
    await setupCamera();
    await loadModel();
    detectHands();
}

// Detener reconocimiento
function stopSignRecognition() {
    recognitionActive = false;
    cancelAnimationFrame(animationFrameId);
}

// Limpiar texto acumulado
function clearOutput() {
    accumulatedText = "";
    output.textContent = "Esperando conversión de señas...";
}

// Leer en voz alta
function readAloud() {
    if (!accumulatedText) return;
    const utterance = new SpeechSynthesisUtterance(accumulatedText);
    speechSynthesis.speak(utterance);
}
