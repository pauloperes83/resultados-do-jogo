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
            @media (max-width: 768px) {
                .custom-menu-container {
                    grid-template-columns: 1fr;
                }
            }
        `;
        document.head.appendChild(style);

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
                        <p>Ceará</p>
                        <ul>
                            <li><a href="/resultado-lotece-ceara-de-hoje">LOTECE - Loteria dos Sonhos</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Goiás</p>
                        <ul>
                            <li><a href="/resultado-look-goias-de-hoje">LOOK LOTERIAS</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Paraíba</p>
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
                        <p>São Paulo</p>
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
                            <li><a href="/resultado-alianca-pe-de-hoje">EXTRAÇÃO ONLINE - ALIANÇA</a></li>
                            <li><a href="/resultado-loteria-popular-de-hoje">LOTERIA POPULAR</a></li>
                            <li><a href="/resultado-nordeste-monte-carlos-pe-de-hoje">NORDESTE MONTE CARLOS</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Brasília (DF)</p>
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
            </div>
        `;
    });
})();
