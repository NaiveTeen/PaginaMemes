document.getElementById("modoToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    let modo = document.body.classList.contains("dark-mode") ? " Modo Claro" : " Modo Oscuro";
    this.textContent = modo;
});

function mostrarTab(index) {
    var tabs = document.querySelectorAll(".tab");

    // Si la pestaña ya está activa, la ocultamos
    if (tabs[index].classList.contains("active")) {
        tabs[index].classList.remove("active");
    } else {
        // Ocultamos todas las pestañas
        tabs.forEach((tab) => tab.classList.remove("active"));
        // Mostramos la pestaña seleccionada
        tabs[index].classList.add("active");
    }
}

// No mostramos ninguna pestaña al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    // Inicialmente no mostramos ninguna pestaña
});



