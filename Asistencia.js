// Mostrar botón de asistencia SOLO después de cargar el main-content
document.addEventListener("DOMContentLoaded", () => {
  const asistenciaBtn = document.getElementById("asistencia-btn");
  const asistenciaModal = document.getElementById("asistencia-modal");
  const enviarBtn = document.getElementById("enviar-asistencia");
  const cerrarBtn = document.getElementById("cerrar-asistencia");
  const mainContent = document.getElementById("main-content");

  // Esperar a que el main-content se muestre
  const observer = new MutationObserver(() => {
    if (window.getComputedStyle(mainContent).display !== "none") {
      asistenciaBtn.classList.remove("hidden");
      observer.disconnect();
    }
  });
  observer.observe(mainContent, { attributes: true, attributeFilter: ["style"] });

  asistenciaBtn.addEventListener("click", () => {
    asistenciaModal.classList.remove("hidden");
  });

  cerrarBtn.addEventListener("click", () => {
    asistenciaModal.classList.add("hidden");
  });

  enviarBtn.addEventListener("click", () => {
    const mensaje = document.getElementById("asistencia-texto").value.trim();
    if (mensaje) {
      alert("Tu mensaje ha sido enviado. ¡Gracias por avisarnos!");
      document.getElementById("asistencia-texto").value = "";
      asistenciaModal.classList.add("hidden");
    } else {
      alert("Por favor, escribe un mensaje antes de enviar.");
    }
  });
});
