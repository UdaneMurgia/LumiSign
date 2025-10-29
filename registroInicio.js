// ======== REGISTRO DE USUARIO ========
function registrarEstudiante(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const apellidos = document.getElementById("apellidos").value.trim();
  const email = document.getElementById("email").value.trim();
  const contrasena = document.getElementById("contrasena").value;
  const confirmar = document.getElementById("confirmar-contrasena").value;

  if (contrasena !== confirmar) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  const nuevoUsuario = { nombre, apellidos, email, contrasena };

  localStorage.setItem("usuarioRegistrado", JSON.stringify(nuevoUsuario));

  alert("✅ Registro exitoso. Ahora puedes iniciar sesión.");
  document.getElementById("registro").style.display = "none";
  document.getElementById("inicio-sesion").style.display = "block";
}

// ======== INICIO DE SESIÓN ========
function verificarInicioSesion() {
  const email = document.getElementById("email-sesion").value.trim();
  const contrasena = document.getElementById("contrasena-sesion").value;

  const usuarioRegistrado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

  if (!usuarioRegistrado) {
    alert("No hay ningún usuario registrado. Regístrate primero.");
    return;
  }

  if (email === usuarioRegistrado.email && contrasena === usuarioRegistrado.contrasena) {
    alert(`👋 Bienvenido, ${usuarioRegistrado.nombre}!`);

    localStorage.setItem("usuarioActivo", JSON.stringify(usuarioRegistrado));

    window.location.href = "panel_estudiante.html";
  } else {
    alert("Correo o contraseña incorrectos.");
  }
}
