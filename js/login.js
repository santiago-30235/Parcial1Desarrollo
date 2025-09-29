document.getElementById("login-form").addEventListener("submit", e => {
  e.preventDefault();

  const user = document.getElementById("usuario").value.trim();
  const pass = document.getElementById("clave").value.trim();
  const msg = document.getElementById("mensaje");

  if (user === "alumno" && pass === "1234") {
    msg.textContent = "✅ Bienvenido " + user;
    msg.style.color = "green";

    // Guardar login ANTES de redirigir
    sessionStorage.setItem("logueado", "true");

    setTimeout(() => window.location = "index.html", 1000);
  } else {
    msg.textContent = "❌ Usuario o clave incorrectos";
    msg.style.color = "red";
  }
});