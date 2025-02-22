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
                <div class="custom-menu-title">Resultados por Estado/Banca</div><hr style="height: 1px; border: none; background-color: #ccc;margin-bottom: 10px;">

                <div class="custom-menu-container">
                    <div>
                        <p>Brasil</p>
                        <ul>
                            <li><a href="/resultado-loteria-nacional-de-hoje.html">Loteria Nacional</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Bahia</p>
                        <ul>
                            <li><a href="/resultado-maluca-bahia-de-hoje.html">Maluca Bahia</a></li>
                            <li><a href="/resultado-paratodos-bahia-de-hoje.html">Paratodos Bahia</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Ceará</p>
                        <ul>
                            <li><a href="/resultado-lotece-ceara-de-hoje.html">LOTECE - Loteria dos Sonhos</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Goiás</p>
                        <ul>
                            <li><a href="/resultado-look-goias-de-hoje.html">LOOK LOTERIAS</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Paraíba</p>
                        <ul>
                            <li><a href="/resultado-lotep-pb-de-hoje.html">Lotep</a></li>
                            <li><a href="/resultado-paratodos-pb-de-hoje.html">Paratodos PB</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Rio de Janeiro</p>
                        <ul>
                            <li><a href="/resultado-pt-rio-de-hoje.html">PT-Rio</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>São Paulo</p>
                        <ul>
                            <li><a href="/resultado-pt-sp-de-hoje.html">PT-SP</a></li>
                            <li><a href="/resultado-bandeirantes-sp-de-hoje.html">BANDEIRANTES</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Pernambuco</p>
                        <ul>
                            <li><a href="/resultado-aval-pernambuco-de-hoje.html">AVAL Pernambuco</a></li>
                            <li><a href="/resultado-caminho-da-sorte-pe-de-hoje.html">CAMINHO DA SORTE</a></li>
                            <li><a href="/resultado-cooperativa-de-petrolina-de-hoje.html">Cooperativa de Petrolina-PE</a></li>
                            <li><a href="/resultado-alianca-pe-de-hoje.html">EXTRAÇÃO ONLINE - ALIANÇA</a></li>
                            <li><a href="/resultado-loteria-popular-de-hoje.html">LOTERIA POPULAR</a></li>
                            <li><a href="/resultado-nordeste-monte-carlos-pe-de-hoje.html">NORDESTE MONTE CARLOS</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Brasília (DF)</p>
                        <ul>
                            <li><a href="/resultado-lbr-brasilia-de-hoje.html">LBR</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Minas Gerais</p>
                        <ul>
                            <li><a href="/resultado-minas-mg-de-hoje.html">MINAS-MG</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Rio Grande do Sul</p>
                        <ul>
                            <li><a href="/resultado-bicho-rs-de-hoje.html">Bicho RS</a></li>
                        </ul>
                    </div>
                    <div>
                        <p>Sergipe</p>
                        <ul>
                            <li><a href="/resultado-abaese-itabaiana-paratodos-de-hoje.html">ABAESE - ITABAIANA PARATODOS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
    });
})();
