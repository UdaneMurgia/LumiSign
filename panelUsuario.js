document.addEventListener("DOMContentLoaded", () => {
  const userButton = document.getElementById("user-button");
  const dropdown = document.getElementById("user-dropdown");
  const logoutBtn = document.getElementById("logout");
  const changeLang = document.getElementById("change-lang");
  const editInfo = document.getElementById("edit-info");
  const darkModeToggle = document.getElementById("dark-mode-toggle");

    const lang = localStorage.getItem("selectedLang") || "es";

  // Obtener datos del usuario activo
  const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo"));

  if (usuarioActivo) {
    document.getElementById("nombre").textContent = `${usuarioActivo.nombre} ${usuarioActivo.apellidos}`;
    document.getElementById("email").textContent = usuarioActivo.email;
    userButton.textContent = `👤 ${usuarioActivo.nombre} ${usuarioActivo.apellidos} ▾`;
  } else {
    document.getElementById("nombre").textContent = "Usuario no encontrado";
    document.getElementById("email").textContent = "";
  }

  // Mostrar u ocultar el menú desplegable
  userButton.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });
  // ======= OPCIONES DEL MENÚ =======

  // Cambiar idioma
  changeLang.addEventListener("click", () => {
    alert("🌐 Aquí podrás cambiar el idioma próximamente.");
    window.location.href = "index.html#language-screen";
  });

  // Editar información
  editInfo.addEventListener("click", () => {
    if (!usuarioActivo) {
      alert("No se encontró información del usuario.");
      return;
    }

    const nuevoNombre = prompt("Edita tu nombre:", usuarioActivo.nombre);
    if (nuevoNombre && nuevoNombre.trim() !== "") {
      usuarioActivo.nombre = nuevoNombre.trim();
      localStorage.setItem("usuarioActivo", JSON.stringify(usuarioActivo));
      document.getElementById("nombre").textContent = `${usuarioActivo.nombre} ${usuarioActivo.apellidos}`;
      userButton.textContent = `👤 ${usuarioActivo.nombre} ${usuarioActivo.apellidos} ▾`;
      alert("✅ Tu información ha sido actualizada.");
    }
  });

  // Modo oscuro
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("modoOscuro", isDark ? "activado" : "desactivado");
    darkModeToggle.textContent = isDark ? "Modo claro" : "Modo oscuro";
  });

  // Mantener modo oscuro si estaba activo
  if (localStorage.getItem("modoOscuro") === "activado") {
    document.body.classList.add("dark-mode");
    darkModeToggle.textContent = "Modo claro";
  }

  // Cerrar sesión
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("usuarioActivo");
    window.location.href = "index.html";
  });
    applyPanelTranslations(lang);
});

// ======= Traducciones =======
const translations = {
  es: {
    panel: {
      title: "Panel del Usuario",
      welcome: "Bienvenido/a",
      features: "Características Interactivas",
      transcription: "Transcripción en tiempo real",
      conversion: "Lenguaje de señas a texto/voz",
      video: "Subir video de lenguaje de señas",
      lectura: "Lectura de texto",
      footer: "© 2024 LumiSign. Todos los derechos reservados.",
      changeLang: "Cambiar idioma",
      editInfo: "Editar información",
      darkMode: "Modo oscuro",
      logout: "Cerrar sesión",
      changeLangAlert: "🌐 Regresando al selector de idioma...",
      editAlert: "✏️ Opción de edición en desarrollo.",
      logoutAlert: "👋 Has cerrado sesión correctamente."
    },

  },
  en: {
    panel: {
      title: "User Panel",
      welcome: "Welcome",
      features: "Interactive Features",
      transcription: "Real-time Transcription",
      conversion: "Sign Language to Text/Voice",
      video: "Upload Sign Language Video",
      lectura: "Text Reading",
      footer: "© 2024 LumiSign. All rights reserved.",
      changeLang: "Change Language",
      editInfo: "Edit Information",
      darkMode: "Dark Mode",
      logout: "Log Out",
      changeLangAlert: "🌐 Returning to language selector...",
      editAlert: "✏️ Edit option under development.",
      logoutAlert: "👋 You have logged out successfully."
    },
  },
  fr: {
    panel: {
      title: "Panneau Utilisateur",
      welcome: "Bienvenue",
      features: "Fonctionnalités Interactives",
      transcription: "Transcription en temps réel",
      conversion: "Langue des signes en texte/voix",
      video: "Téléverser une vidéo en langue des signes",
      lectura: "Lecture de texte",
      footer: "© 2024 LumiSign. Tous droits réservés.",
      changeLang: "Changer de langue",
      editInfo: "Modifier les informations",
      darkMode: "Mode sombre",
      logout: "Se déconnecter",
      changeLangAlert: "🌐 Retour au sélecteur de langue...",
      editAlert: "✏️ Option d'édition en développement.",
      logoutAlert: "👋 Vous vous êtes déconnecté avec succès."
    },
  },
  de: {
    panel: {
      title: "Benutzerpanel",
      welcome: "Willkommen",
      features: "Interaktive Funktionen",
      transcription: "Echtzeit-Transkription",
      conversion: "Gebärdensprache zu Text/Stimme",
      video: "Gebärdensprachvideo hochladen",
      lectura: "Textvorlesen",
      footer: "© 2024 LumiSign. Alle Rechte vorbehalten.",
      changeLang: "Sprache ändern",
      editInfo: "Informationen bearbeiten",
      darkMode: "Dunkelmodus",
      logout: "Abmelden",
      changeLangAlert: "🌐 Zurück zur Sprachauswahl...",
      editAlert: "✏️ Bearbeitungsoption in Arbeit.",
      logoutAlert: "👋 Erfolgreich abgemeldet."
    },
    },
  pt: {
    panel: {
      title: "Painel do Usuário",
      welcome: "Bem-vindo(a)",
      features: "Recursos Interativos",
      transcription: "Transcripção em tempo real",
      conversion: "Linguagem de sinais para texto/voz",
      video: "Enviar vídeo de linguagem de sináis",
      lectura: "Leitura de texto",
      footer: "© 2024 LumiSign. Todos os direitos reservados.",
      changeLang: "Mudar idioma",
      editInfo: "Editar informações",
      darkMode: "Modo escuro",
      logout: "Sair",
      changeLangAlert: "🌐 Voltando ao seletor de idioma...",
      editAlert: "✏️ Opção de edição em desenvolvimento.",
      logoutAlert: "👋 Você saiu com sucesso."
    },
    },
  zh: {
    panel: {
      title: "用户面板",
      welcome: "欢迎",
      features: "互动功能",
      transcription: "实时转录",
      conversion: "手语转文字/语音",
      video: "上传手语视频",
      lectura: "文字朗读",
      footer: "© 2024 LumiSign. 版权所有。",
      changeLang: "更改语言",
      editInfo: "编辑信息",
      darkMode: "深色模式",
      logout: "登出",
      changeLangAlert: "🌐 返回语言选择器...",
      editAlert: "✏️ 编辑功能开发中。",
      logoutAlert: "👋 您已成功登出。"
    },
  }
};

// ======= Aplicar Traducción =======
function applyPanelTranslations(lang) {
  const t = translations[lang].panel;
  document.getElementById("panel-title").innerText = t.title;
  document.getElementById("features-title").innerText = t.features;
  document.getElementById("btn-transcripcion").innerText = t.transcription;
  document.getElementById("btn-conversion").innerText = t.conversion;
  document.getElementById("btn-video").innerText = t.video;
  document.getElementById("btn-lectura").innerText = t.lectura;
  document.getElementById("footer-text").innerText = t.footer;
  document.getElementById("change-lang").innerText = t.changeLang;
  document.getElementById("edit-info").innerText = t.editInfo;
  document.getElementById("dark-mode-toggle").innerText = t.darkMode;
  document.getElementById("logout").innerText = t.logout;
  document.getElementById("asistencia-btn").innerText = t.helpBtn;
  document.getElementById("help-title").innerText = t.helpTitle;
  document.getElementById("help-text").innerText = t.helpText;
  document.getElementById("enviar-asistencia").innerText = t.helpSend;
  document.getElementById("cerrar-asistencia").innerText = t.helpCancel;
}
