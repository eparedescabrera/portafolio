document.addEventListener("DOMContentLoaded", function () {
    // Cargar el navbar desde navbar.html
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
            
            // Después de cargar el navbar, activamos el botón de modo oscuro
            setupThemeToggle();
        });

    function setupThemeToggle() {
        const toggleButton = document.getElementById("toggleTheme");
        const body = document.body;

        if (localStorage.getItem("theme") === "dark") {
            body.classList.add("dark-mode");
            toggleButton.innerText = "☀️";
            toggleButton.classList.remove("btn-dark");
            toggleButton.classList.add("btn-light");
        }

        toggleButton.addEventListener("click", function () {
            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {
                toggleButton.innerText = "☀️";
                toggleButton.classList.remove("btn-dark");
                toggleButton.classList.add("btn-light");
                localStorage.setItem("theme", "dark");
            } else {
                toggleButton.innerText = "🌙";
                toggleButton.classList.remove("btn-light");
                toggleButton.classList.add("btn-dark");
                localStorage.setItem("theme", "light");
            }
        });
    }
    
});
