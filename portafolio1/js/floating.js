document.addEventListener("DOMContentLoaded", function () {
    const btnArriba = document.getElementById("btnArriba");

    // Mostrar el botón cuando se baja la página
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { 
            btnArriba.style.display = "block";
        } else {
            btnArriba.style.display = "none";
        }
    });

    // Volver arriba cuando se haga clic en el botón
    btnArriba.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
