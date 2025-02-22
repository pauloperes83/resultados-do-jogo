(function() {
    document.addEventListener("DOMContentLoaded", function() {
        // Seleciona todos os elementos com a classe "banner"
        document.querySelectorAll(".banner").forEach(function(container) {
            // Verifica se os links já foram adicionados para evitar duplicação
            if (!container.dataset.linksAdded) {
                container.dataset.linksAdded = "true";

                // Aplica estilos ao container
                Object.assign(container.style, {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                });

                // Função para criar links
                function createLink(text, href, target = "_self") {
                    let link = document.createElement("a");
                    link.textContent = text;
                    link.href = href;

                    // Aplica estilos aos links
                    Object.assign(link.style, {
                        display: "block",
                        padding: "10px 0",
                        border: "1px solid #ccc",
                        color: "black",
                        textDecoration: "none",
                        textAlign: "center",
                        transition: "all 0.3s ease",
                        fontSize: "clamp(9px, 4vw, 14px)",
                        width: "100%",
                        maxWidth: "100%",
                    });

                    // Efeito de hover
                    link.addEventListener("mouseenter", function() {
                        link.style.backgroundColor = "#f0f0f0";
                    });
                    link.addEventListener("mouseleave", function() {
                        link.style.backgroundColor = "transparent";
                    });

                    return link;
                }

                // Cria o primeiro link
                let link1 = createLink("Jogue online clicando aqui!", "/jogo-do-bicho-online.html");

                // Cria o segundo link
                let link2 = createLink("Ver os palpites da Federal", "/palpites-da-federal.html");

                // Cria o terceiro link (abre em uma nova aba)
                let link3 = createLink("Veja as estatísticas da Federal!", "/estatisticas-da-federal.html");

                // Adiciona os links ao container
                container.appendChild(link1);
                container.appendChild(link2);
                container.appendChild(link3);
            }
        });
    });
})();