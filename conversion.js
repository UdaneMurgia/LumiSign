const video = document.getElementById("camera");
const conversionText = document.getElementById("conversion-text");
const conversionBtn = document.getElementById("conversion-btn");

let stream = null;
let isConverting = false;
let intervaloTexto = null;

async function toggleConversion() {
    if (!isConverting) {
        iniciarConversion();
    } else {
        detenerConversion();
    }
}

async function iniciarConversion() {
    try {
        if (!stream) {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            video.srcObject = stream;
        }

        isConverting = true;
        conversionBtn.textContent = "Detener Conversión";
        conversionText.textContent = "Convirtiendo señas en tiempo real...";

        setTimeout(() => {
            if (isConverting) {
                mostrarTextoGradualmente("No lo entiendo. ¿Podrías repetirlo por favor?");
            }
        }, 2000);

    } catch (error) {
        alert("No se pudo acceder a la cámara. Por favor, verifica los permisos.");
    }
}

function detenerConversion() {
    isConverting = false;
    conversionBtn.textContent = "Iniciar Conversión";
    conversionText.textContent = "Esperando conversión de señas...";

    if (intervaloTexto) {
        clearInterval(intervaloTexto);
        intervaloTexto = null;
    }
}

// Efecto de aparición gradual del texto
function mostrarTextoGradualmente(frase) {
    conversionText.textContent = "";
    let index = 0;

    intervaloTexto = setInterval(() => {
        if (!isConverting) {
            clearInterval(intervaloTexto);
            return; 
        }

        if (index < frase.length) {
            conversionText.textContent += frase.charAt(index);
            index++;
        } else {
            clearInterval(intervaloTexto);
        }
    }, 80);
}
