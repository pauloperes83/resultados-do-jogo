(function() {
    document.addEventListener("DOMContentLoaded", function() {
        var container = document.getElementById("custom-menu-links");
        if (!container) return;

        var style = document.createElement("style");
        style.textContent = `
            .custom-menu-wrapper {
                border: 1px solid #ccc;
                border-radius: 8px;
                margin: 20px 10px 10px;
                padding: 10px;
            }
            .custom-menu-title {
                font-weight: bold;
                text-align: center;
                margin-bottom: 10px;
                font-size: 18px;
                padding: 10px;
            }
            .custom-menu-container {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                gap: 10px;
                list-style: none;
                padding: 10px;
                font-size: 14px;
            }
            .custom-menu-container p {
                font-weight: bold;
                margin: 10px 0 5px;
            }
            .custom-menu-container ul {
                list-style-type: none;
                padding-left: 10px;
                margin: 0;
            }
            .custom-menu-container li {
                margin-bottom: 5px;
            }
            .custom-menu-container a {
                text-decoration: none;
                color: #333;
            }
            .custom-menu-container a:hover {
                color: #007bff;
            }
            
            /* --- NOVOS ESTILOS PARA O T?TULO DOS PARCEIROS --- */
            .custom-menu-partners-title {
                text-align: center;
                font-weight: bold;
                font-size: 16px;
                color: #333;
                margin-top: 20px;
                padding-top: 15px;
                border-top: 1px solid #eee; /* Linha de separa??o movida para c? */
            }

            /* --- ESTILOS PARA OS ?CONES (FAVICONS) --- */
            .custom-menu-partners {
                display: flex;
                flex-wrap: wrap; /* Permite quebrar linha em telas pequenas, se necess?rio */
                justify-content: center;
                align-items: center;
                gap: 15px; /* Espa?amento entre os ?cones */
                margin-top: 15px;
            }
            .custom-menu-partners a {
                display: inline-block;
                transition: transform 0.2s ease-in-out;
            }
            .custom-menu-partners a:hover {
                transform: scale(1.2); /* Efeito interativo ao passar o mouse */
            }
            .custom-menu-partners img {
                width: 32px; /* Mant?m os ?cones pequenos */
                height: 32px;
                background-color: transparent; /* Fundo transparente */
                border: none;
                display: block;
            }

            @media (max-width: 768px) {
                .custom-menu-container {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);

        // Lista dos sites desejados
        var parceiros = [
            "https://bancabrasileira.com.br/",
            "https://superacertosclub.app.br/",
            "https://superbancasclub.com.br/",
            "https://aguiaoficial.net.br/",
            "https://doguinhodasorte.com.br/",
            "https://bancafeiticeira.com.br/",
            "https://tikdasorte.net.br/",
            "https://sorteclub.net.br/",
            "https://vaidarboa.com.br/",
            "https://paratodosbrasil.info/registro?indicacao=LD078E2ZRB50",
            "https://magodasorte.info/registro?indicacao=P3PWCDN2GMGF"
        ];

        // Gera os ?cones HTML extraindo automaticamente a favicon de cada dom?nio
        var parceirosHTML = '<div class="custom-menu-partners">';
        parceiros.forEach(function(url) {
            // Utilizamos a API do Google para extrair o Favicon (sz=64 garante boa resolu??o)
            var faviconUrl = "https://www.google.com/s2/favicons?domain=" + url + "&sz=64";
            parceirosHTML += '<a href="' + url + '" target="_blank" rel="noopener noreferrer" title="' + url + '">' +
                             '<img src="' + faviconUrl + '" alt="Visitar ' + url + '">' +
                             '</a>';
        });
        parceirosHTML += '</div>';

        container.innerHTML = `
            <div class="custom-menu-wrapper">
                <div class="custom-menu-title">Resultados por Estado/Banca</div>

                <div class="custom-menu-container">
                    <div>
                        <p>Brasil</p>
                        <ul>
                            <li><a href="/resultado-loteria-nacional-de-hoje">Loteria Nacional</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Bahia</p>
                        <ul>
                            <li><a href="/resultado-maluca-bahia-de-hoje">Maluca Bahia</a></li>
                            <li><a href="/resultado-paratodos-bahia-de-hoje">Paratodos Bahia</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Cear?</p>
                        <ul>
                            <li><a href="/resultado-lotece-ceara-de-hoje">LOTECE - Loteria dos Sonhos</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Goi?s</p>
                        <ul>
                            <li><a href="/resultado-look-goias-de-hoje">LOOK LOTERIAS</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Para?ba</p>
                        <ul>
                            <li><a href="/resultado-lotep-pb-de-hoje">Lotep</a></li>
                            <li><a href="/resultado-paratodos-pb-de-hoje">Paratodos PB</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Rio de Janeiro</p>
                        <ul>
                            <li><a href="/resultado-pt-rio-de-hoje">PT-Rio</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>S?o Paulo</p>
                        <ul>
                            <li><a href="/resultado-pt-sp-de-hoje">PT-SP</a></li>
                            <li><a href="/resultado-bandeirantes-sp-de-hoje">BANDEIRANTES</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Pernambuco</p>
                        <ul>
                            <li><a href="/resultado-aval-pernambuco-de-hoje">AVAL Pernambuco</a></li>
                            <li><a href="/resultado-caminho-da-sorte-pe-de-hoje">CAMINHO DA SORTE</a></li>
                            <li><a href="/resultado-cooperativa-de-petrolina-de-hoje">Cooperativa de Petrolina-PE</a></li>
                            <li><a href="/resultado-alianca-pe-de-hoje">EXTRA??O ONLINE - ALIAN?A</a></li>
                            <li><a href="/resultado-loteria-popular-de-hoje">LOTERIA POPULAR</a></li>
                            <li><a href="/resultado-nordeste-monte-carlos-pe-de-hoje">NORDESTE MONTE CARLOS</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Bras?lia (DF)</p>
                        <ul>
                            <li><a href="/resultado-lbr-brasilia-de-hoje">LBR</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Minas Gerais</p>
                        <ul>
                            <li><a href="/resultado-minas-mg-de-hoje">MINAS-MG</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Rio Grande do Sul</p>
                        <ul>
                            <li><a href="/resultado-bicho-rs-de-hoje">Bicho RS</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Sergipe</p>
                        <ul>
                            <li><a href="/resultado-abaese-itabaiana-paratodos-de-hoje">ABAESE - ITABAIANA PARATODOS</a></li>
                        </ul>
                    </div>
                </div>
                
                <!-- ?rea inserida no canto inferior com o t?tulo persuasivo e as favicons -->
                <div class="custom-menu-partners-title">Escolha seu App e Comece a Jogar</div>
                ` + parceirosHTML + `
            </div>
        `;
    });
})();