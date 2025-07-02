document.addEventListener("DOMContentLoaded", function() {
    let container = document.getElementById("controle");

    // Adiciona anúncio acima
    let adTop = document.createElement("div");
    adTop.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="1234567890" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
    container.parentNode.insertBefore(adTop, container);

    Object.assign(container.style, {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "20px",
        margin: "20px auto",
        width: "90%",
        maxWidth: "400px",
        backgroundColor: "white",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    });

    let titulo = document.createElement("h2");
    titulo.textContent = "Palpites do dia";
    titulo.style.textAlign = "center";
    container.appendChild(titulo);

    let palpitesWrapper = document.createElement("div");
    palpitesWrapper.id = "palpitesWrapper";
    Object.assign(palpitesWrapper.style, {
        width: "100%",
        marginTop: "10px",
        textAlign: "center"
    });
    container.appendChild(palpitesWrapper);

    let botao = document.createElement("button");
    botao.id = "btnGerarPalpite";
    botao.textContent = "Gerar palpite";
    Object.assign(botao.style, {
        marginTop: "20px",
        padding: "10px 20px",
        borderRadius: "8px",
        cursor: "pointer",
        border: "1px solid #ccc",
        backgroundColor: "#f8f8f8",
        fontSize: "16px"
    });
    container.appendChild(botao);

    botao.addEventListener("click", function() {
        gerarPalpites(palpitesWrapper);
    });

    // Adiciona anúncio abaixo
    let adBottom = document.createElement("div");
    adBottom.innerHTML = '<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="1234567890" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>';
    container.parentNode.insertBefore(adBottom, container.nextSibling);
});

function gerarPalpites(palpitesWrapper) {
    let tabelas = document.querySelectorAll(".table-container table");
    let numeros = [];

    tabelas.forEach(tabela => {
        let linhas = tabela.querySelectorAll("tbody tr");
        linhas.forEach(linha => {
            let colunas = linha.querySelectorAll("td");
            if (colunas.length > 1) {
                let numero = colunas[1].innerText.trim();
                if (numero.length === 4 && /^\d{4}$/.test(numero)) {
                    numeros.push(numero);
                }
            }
        });
    });

    if (numeros.length === 0) {
        palpitesWrapper.innerHTML = "<p>Nenhum número válido encontrado nas tabelas.</p>";
        return;
    }

    function contarFrequencia(posicao) {
        let frequencia = {};
        numeros.forEach(numero => {
            let digito = numero.charAt(posicao);
            frequencia[digito] = (frequencia[digito] || 0) + 1;
        });
        return frequencia;
    }

    function obterMaisFrequentes(frequencia) {
        return Object.keys(frequencia)
            .sort((a, b) => frequencia[b] - frequencia[a])
            .slice(0, 4); // Limita a 4 dígitos mais frequentes por posição
    }

    let digitosMilhar = obterMaisFrequentes(contarFrequencia(0));
    let digitosCentena = obterMaisFrequentes(contarFrequencia(1));
    let digitosDezena = obterMaisFrequentes(contarFrequencia(2));
    let digitosUnidade = obterMaisFrequentes(contarFrequencia(3));

    const grupos = {
        "Avestruz 🦢": [1, 2, 3, 4],
        "Águia 🦅": [5, 6, 7, 8],
        "Burro 🐴": [9, 10, 11, 12],
        "Borboleta 🦋": [13, 14, 15, 16],
        "Cachorro 🐶": [17, 18, 19, 20],
        "Cabra 🐐": [21, 22, 23, 24],
        "Carneiro 🐏": [25, 26, 27, 28],
        "Camelo 🐪": [29, 30, 31, 32],
        "Cobra 🐍": [33, 34, 35, 36],
        "Coelho 🐇": [37, 38, 39, 40],
        "Cavalo 🐎": [41, 42, 43, 44],
        "Elefante 🐘": [45, 46, 47, 48],
        "Galo 🐓": [49, 50, 51, 52],
        "Gato 🐈": [53, 54, 55, 56],
        "Jacaré 🐊": [57, 58, 59, 60],
        "Leão 🦁": [61, 62, 63, 64],
        "Macaco 🐒": [65, 66, 67, 68],
        "Porco 🐖": [69, 70, 71, 72],
        "Pavão 🦚": [73, 74, 75, 76],
        "Peru 🦃": [77, 78, 79, 80],
        "Touro 🐂": [81, 82, 83, 84],
        "Tigre 🐅": [85, 86, 87, 88],
        "Urso 🐻": [89, 90, 91, 92],
        "Veado 🦌": [93, 94, 95, 96],
        "Vaca 🐄": [97, 98, 99, 0]
    };

    // Gera 12 palpites
    let palpites = [];
    let combinacoes = [];
    for (let m of digitosMilhar) {
        for (let c of digitosCentena) {
            for (let d of digitosDezena) {
                for (let u of digitosUnidade) {
                    combinacoes.push(m + c + d + u);
                    if (combinacoes.length >= 12) break;
                }
                if (combinacoes.length >= 12) break;
            }
            if (combinacoes.length >= 12) break;
        }
        if (combinacoes.length >= 12) break;
    }

    palpites = combinacoes.slice(0, 12);

    // Agrupa palpites por grupo do jogo do bicho
    let palpitesPorGrupo = {};
    palpites.forEach(palpite => {
        let dezenaUnidade = parseInt(palpite.slice(2), 10);
        let grupo = Object.keys(grupos).find(g => 
            grupos[g].includes(dezenaUnidade) || (g === "Vaca 🐄" && dezenaUnidade === 0)
        );
        if (!palpitesPorGrupo[grupo]) {
            palpitesPorGrupo[grupo] = [];
        }
        palpitesPorGrupo[grupo].push(palpite);
    });

    // Atualiza a interface
    palpitesWrapper.innerHTML = "";
    let subtitulo = document.createElement("h3");
    subtitulo.textContent = "Palpites por Grupo:";
    palpitesWrapper.appendChild(subtitulo);

    for (let grupo in palpitesPorGrupo) {
        let grupoDiv = document.createElement("div");
        grupoDiv.style.marginBottom = "10px";
        
        let grupoTitulo = document.createElement("h4");
        grupoTitulo.textContent = grupo;
        grupoDiv.appendChild(grupoTitulo);

        let palpitesDiv = document.createElement("div");
        Object.assign(palpitesDiv.style, {
            display: "flex",
            gap: "5px",
            flexWrap: "wrap",
            justifyContent: "center"
        });

        palpitesPorGrupo[grupo].forEach(palpite => {
            let campo = document.createElement("div");
            Object.assign(campo.style, {
                textContent: palpite,
                minWidth: "60px",
                height: "40px",
                lineHeight: "40px",
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "white",
                fontSize: "clamp(12px, 4vw, 16px)"
            });
            campo.textContent = palpite;
            palpitesDiv.appendChild(campo);
        });

        grupoDiv.appendChild(palpitesDiv);
        palpitesWrapper.appendChild(grupoDiv);
    }

    if (Object.keys(palpitesPorGrupo).length === 0) {
        palpitesWrapper.innerHTML = "<p>Nenhum palpite gerado.</p>";
    }
}
