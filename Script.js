document.getElementById("modoToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    let modo = document.body.classList.contains("dark-mode") ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
    this.textContent = modo;
});
