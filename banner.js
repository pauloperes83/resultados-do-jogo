        (function() {
            document.addEventListener("DOMContentLoaded", function() {
                document.querySelectorAll(".banner").forEach(function(container) {
                    if (!container.dataset.linksAdded) { // Evita adicionar múltiplos elementos
                        container.dataset.linksAdded = "true"; 

                        // Aplicando estilo ao container de forma isolada
                        Object.assign(container.style, {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        });

                        function createLink(text, href, onClick) {
                            let link = document.createElement("a");
                            link.textContent = text;
                            link.href = href;
                            
                            // Aplicando estilos apenas nos links conforme solicitado
                            Object.assign(link.style, {
                                display: "block",
				padding: "4px 0",
                                border: "1px solid #ccc", // Bordas sem arredondamento
                                color: "black", // Fonte azul
                                textDecoration: "none",
                                textAlign: "center",
                                transition: "all 0.3s ease",
                                fontSize: "clamp(9px, 4vw, 14px)",
                                width: "100%", // Sem espaçamentos laterais
                                maxWidth: "100%",
                            });

                            link.addEventListener("mouseenter", function() {
                                link.style.backgroundColor = "#f0f0f0";
                            });
                            link.addEventListener("mouseleave", function() {
                                link.style.backgroundColor = "transparent";
                            });

                            if (onClick) {
                                link.addEventListener("click", function(event) {
                                    event.preventDefault();
                                    onClick();
                                });
                            }
                            return link;
                        }

                        let link1 = createLink("Jogue online clicando aqui!", "/jogo-do-bicho-online.html");
                        let link2 = createLink("Clique aqui para ver os palpites do dia!", "#", function() {
                            let controle = document.getElementById('controle');
                            if (controle) {
                                controle.scrollIntoView({ behavior: 'smooth' });
                            }
                        });

                        container.appendChild(link1);
                        container.appendChild(link2);
                    }
                });
            });
        })();