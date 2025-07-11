document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.getElementById("menu-container");

    if (menuContainer) {
        fetch("/componentes/menu.html")
            .then(response => response.text())
            .then(data => {
                menuContainer.innerHTML = data;
            })
            .catch(error => {
                console.error("Erro ao carregar o menu:", error);
            });
    }
});
