document.addEventListener("DOMContentLoaded", () => {
    const languageButton = document.getElementById("language-button");
    const languageSelect = document.getElementById("language-select");

    languageButton.addEventListener("click", () => {
        const lang = languageSelect.value;
        localStorage.setItem("selectedLang", lang);

        const loadingScreen = document.getElementById("loading-screen");
        const loadingText = loadingScreen?.querySelector("p");
        if (loadingText) {
            const t = translations[lang] || translations["es"];
            loadingText.innerText = t.loading;
        }

        const languageScreen = document.getElementById("language-screen");
        languageScreen.classList.add("fade-out");

        setTimeout(() => {
            languageScreen.style.display = "none";
            loadingScreen.style.display = "flex";
            setTimeout(() => loadingScreen.classList.add("fade-in"), 50);

            setTimeout(() => {
                applyTranslations(lang);

                loadingScreen.classList.remove("fade-in");
                loadingScreen.classList.add("fade-out");

                setTimeout(() => {
                    loadingScreen.style.display = "none";
                    const main = document.getElementById("main-content");
                    main.style.display = "block";
                    setTimeout(() => main.classList.add("fade-in"), 50);

                    setTimeout(() => applyTranslations(lang), 300);
                }, 800);
            }, 2000);
        }, 800);
    });

    const savedLang = localStorage.getItem("selectedLang");
    if (savedLang) applyTranslations(savedLang);
});

// ======== TRADUCCIONES ========
const translations = {
    es: {
        title: "Bienvenido a LumiSign",
        loading: "Cargando LumiSign...",
        studentArea: "Área de Usuario",
        studentText: "Regístrate o inicia sesión para comenzar a aprender",
        registerTitle: "Registro de Usuario",
        name: "Nombre:",
        surname: "Apellidos:",
        email: "Correo Electrónico:",
        pass: "Contraseña:",
        pass2: "Confirmar Contraseña:",
        register: "Registrarse",
        cancel: "Cancelar",
        loginTitle: "Iniciar Sesión",
        login: "Iniciar sesión",
        footer: "© 2024 LumiSign. Todos los derechos reservados.",
        helpBtn: "💬 ¿Tienes un problema?",
        helpTitle: "Centro de Asistencia",
        helpText: "Cuéntanos qué problema estás teniendo:",
        helpSend: "Enviar",
        helpCancel: "Cancelar",
        alerts: {
            registerSuccess: "✅ Registro exitoso. Ahora puedes iniciar sesión.",
            passwordMismatch: "❌ Las contraseñas no coinciden.",
            noUser: "⚠️ No hay ningún usuario registrado. Regístrate primero.",
            loginWelcome: "👋 Bienvenido,",
            loginFail: "❌ Correo o contraseña incorrectos.",
            assistanceSent: "📩 Tu mensaje ha sido enviado. ¡Gracias por avisarnos!"
        }
    },
    en: {
        title: "Welcome to LumiSign",
        loading: "Loading LumiSign...",
        studentArea: "User Area",
        studentText: "Register or log in to start learning",
        registerTitle: "User Registration",
        name: "First Name:",
        surname: "Last Name:",
        email: "Email Address:",
        pass: "Password:",
        pass2: "Confirm Password:",
        register: "Register",
        cancel: "Cancel",
        loginTitle: "Login",
        login: "Login",
        footer: "© 2024 LumiSign. All rights reserved.",
        helpBtn: "💬 Need help?",
        helpTitle: "Help Center",
        helpText: "Tell us what issue you're having:",
        helpSend: "Send",
        helpCancel: "Cancel",
        alerts: {
            registerSuccess: "✅ Registration successful. You can now log in.",
            passwordMismatch: "❌ Passwords do not match.",
            noUser: "⚠️ No user registered. Please sign up first.",
            loginWelcome: "👋 Welcome,",
            loginFail: "❌ Incorrect email or password.",
            assistanceSent: "📩 Your message has been sent. Thank you for contacting us!"
        }
    },
    fr: {
        title: "Bienvenue sur LumiSign",
        loading: "Chargement de LumiSign...",
        studentArea: "Espace Utilisateur",
        studentText: "Inscrivez-vous ou connectez-vous pour commencer à apprendre",
        registerTitle: "Inscription Utilisateur",
        name: "Prénom :",
        surname: "Nom :",
        email: "Adresse e-mail :",
        pass: "Mot de passe :",
        pass2: "Confirmer le mot de passe :",
        register: "S'inscrire",
        cancel: "Annuler",
        loginTitle: "Connexion",
        login: "Se connecter",
        footer: "© 2024 LumiSign. Tous droits réservés.",
        helpBtn: "💬 Vous avez un problème ?",
        helpTitle: "Centre d'assistance",
        helpText: "Dites-nous quel problème vous rencontrez :",
        helpSend: "Envoyer",
        helpCancel: "Annuler",
        alerts: {
            registerSuccess: "✅ Inscription réussie. Vous pouvez maintenant vous connecter.",
            passwordMismatch: "❌ Les mots de passe ne correspondent pas.",
            noUser: "⚠️ Aucun utilisateur enregistré. Inscrivez-vous d'abord.",
            loginWelcome: "👋 Bienvenue,",
            loginFail: "❌ Identifiants incorrects.",
            assistanceSent: "📩 Votre message a été envoyé. Merci de nous avoir contactés !"
        }
    },
    de: {
        title: "Willkommen bei LumiSign",
        loading: "LumiSign wird geladen...",
        studentArea: "Benutzerbereich",
        studentText: "Registrieren oder anmelden, um zu lernen",
        registerTitle: "Benutzerregistrierung",
        name: "Vorname:",
        surname: "Nachname:",
        email: "E-Mail-Adresse:",
        pass: "Passwort:",
        pass2: "Passwort bestätigen:",
        register: "Registrieren",
        cancel: "Abbrechen",
        loginTitle: "Anmeldung",
        login: "Anmelden",
        footer: "© 2024 LumiSign. Alle Rechte vorbehalten.",
        helpBtn: "💬 Brauchen Sie Hilfe?",
        helpTitle: "Hilfezentrum",
        helpText: "Beschreiben Sie das Problem:",
        helpSend: "Senden",
        helpCancel: "Abbrechen",
        alerts: {
            registerSuccess: "✅ Registrierung erfolgreich. Sie können sich jetzt anmelden.",
            passwordMismatch: "❌ Passwörter stimmen nicht überein.",
            noUser: "⚠️ Kein Benutzer registriert. Bitte registrieren Sie sich zuerst.",
            loginWelcome: "👋 Willkommen,",
            loginFail: "❌ Falsche Anmeldedaten.",
            assistanceSent: "📩 Ihre Nachricht wurde gesendet. Vielen Dank!"
        }
    },
    pt: {
        title: "Bem-vindo ao LumiSign",
        loading: "Carregando LumiSign...",
        studentArea: "Área do Usuário",
        studentText: "Cadastre-se ou faça login para começar a aprender",
        registerTitle: "Registro de Usuário",
        name: "Nome:",
        surname: "Sobrenome:",
        email: "E-mail:",
        pass: "Senha:",
        pass2: "Confirmar Senha:",
        register: "Registrar",
        cancel: "Cancelar",
        loginTitle: "Entrar",
        login: "Entrar",
        footer: "© 2024 LumiSign. Todos os direitos reservados.",
        helpBtn: "💬 Precisa de ajuda?",
        helpTitle: "Centro de Ajuda",
        helpText: "Conte-nos qual é o problema:",
        helpSend: "Enviar",
        helpCancel: "Cancelar",
        alerts: {
            registerSuccess: "✅ Registro bem-sucedido. Agora você pode fazer login.",
            passwordMismatch: "❌ As senhas não coincidem.",
            noUser: "⚠️ Nenhum usuário registrado. Cadastre-se primeiro.",
            loginWelcome: "👋 Bem-vindo,",
            loginFail: "❌ E-mail ou senha incorretos.",
            assistanceSent: "📩 Sua mensagem foi enviada. Obrigado por nos avisar!"
        }
    },
    zh: {
        title: "欢迎使用 LumiSign",
        loading: "正在加载 LumiSign...",
        studentArea: "用户区域",
        studentText: "注册或登录以开始学习",
        registerTitle: "用户注册",
        name: "名字：",
        surname: "姓氏：",
        email: "电子邮件：",
        pass: "密码：",
        pass2: "确认密码：",
        register: "注册",
        cancel: "取消",
        loginTitle: "登录",
        login: "登录",
        footer: "© 2024 LumiSign. 版权所有。",
        helpBtn: "💬 需要帮助？",
        helpTitle: "帮助中心",
        helpText: "请告诉我们您遇到的问题：",
        helpSend: "发送",
        helpCancel: "取消",
        alerts: {
            registerSuccess: "✅ 注册成功。您现在可以登录。",
            passwordMismatch: "❌ 两次输入的密码不一致。",
            noUser: "⚠️ 没有注册用户。请先注册。",
            loginWelcome: "👋 欢迎,",
            loginFail: "❌ 邮箱或密码错误。",
            assistanceSent: "📩 您的信息已发送。感谢您的反馈！"
        }
    }
};

function applyTranslations(lang) {
    const t = translations[lang] || translations["es"];
    window.alertTexts = t.alerts;

    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text;
    };

    setText("title", t.title);
    setText("student-area", t.studentArea);
    setText("student-text", t.studentText);
    setText("register-btn", t.register);
    setText("login-btn", t.login);
    setText("register-title", t.registerTitle);
    setText("label-name", t.name);
    setText("label-surname", t.surname);
    setText("label-email", t.email);
    setText("label-pass", t.pass);
    setText("label-pass2", t.pass2);
    setText("register-btn2", t.register);
    setText("login-title", t.loginTitle);
    setText("label-login-email", t.email);
    setText("label-login-pass", t.pass);
    setText("login-btn2", t.login);
    setText("asistencia-btn", t.helpBtn);
    setText("enviar-asistencia", t.helpSend);
    setText("cerrar-asistencia", t.helpCancel);

    if (document.querySelector("#asistencia-modal h2"))
        document.querySelector("#asistencia-modal h2").innerText = t.helpTitle;
    if (document.querySelector("#asistencia-modal p"))
        document.querySelector("#asistencia-modal p").innerText = t.helpText;
    if (document.querySelector("#loading-screen p"))
        document.querySelector("#loading-screen p").innerText = t.loading;
}

let usuarioRegistrado = null;

function registrarEstudiante(event) {
    event.preventDefault();
    const lang = localStorage.getItem("selectedLang") || "es";
    const t = translations[lang].alerts;

    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("contrasena").value;
    const pass2 = document.getElementById("confirmar-contrasena").value;

    if (pass !== pass2) return alert(t.passwordMismatch);

    usuarioRegistrado = { nombre, apellidos, email, pass };
    alert(t.registerSuccess);
}

function verificarInicioSesion() {
    const lang = localStorage.getItem("selectedLang") || "es";
    const t = translations[lang].alerts;

    const email = document.getElementById("email-sesion").value;
    const pass = document.getElementById("contrasena-sesion").value;

    if (!usuarioRegistrado) return alert(t.noUser);

    if (email === usuarioRegistrado.email && pass === usuarioRegistrado.pass) {
        alert(`${t.loginWelcome} ${usuarioRegistrado.nombre} ${usuarioRegistrado.apellidos}`);
        window.location.href = "panel_estudiante.html";
    } else {
        alert(t.loginFail);
    }
}

document.addEventListener("click", (e) => {
    if (e.target.id === "enviar-asistencia") {
        const lang = localStorage.getItem("selectedLang") || "es";
        const t = translations[lang].alerts;
        alert(t.assistanceSent);
    }
});
