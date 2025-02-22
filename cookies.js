document.addEventListener("DOMContentLoaded", function () {
    // Criar a div do banner de cookies
    var cookieBanner = document.createElement("div");
    cookieBanner.id = "cookie-banner";
    cookieBanner.className = "cookie-banner";
    cookieBanner.innerHTML = `
        <div class="cookie-content">
            <p>Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa 
                <a href="/politica-de-privacidade" target="_blank">Política de Privacidade</a>.
            </p>
            <button id="accept-cookies">Aceitar</button>
        </div>
    `;

    // Criar e adicionar o estilo ao head da página
    var style = document.createElement("style");
    style.innerHTML = `
        /* Estilização do banner de cookies */
        .cookie-banner {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            max-width: 600px;
            background: #222;
            color: #fff;
            text-align: center;
            padding: 15px;
            font-size: 14px;
            border-radius: 8px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            display: none;
            z-index: 1000;
            animation: fadeIn 0.5s ease-in-out;
        }

        .cookie-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }

        .cookie-banner a {
            color: #FFD700;
            text-decoration: underline;
            font-weight: 500;
        }

        .cookie-banner button {
            background: #FFD700;
            color: black;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            font-size: 14px;
            font-weight: bold;
            transition: background 0.3s ease-in-out;
        }

        .cookie-banner button:hover {
            background: #FFC107;
        }

        /* Animação de entrada */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateX(-50%) translateY(10px); }
            to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        /* Responsividade */
        @media (min-width: 600px) {
            .cookie-content {
                flex-direction: row;
                justify-content: space-between;
            }
        }
    `;

    // Adicionar o estilo ao head da página
    document.head.appendChild(style);

    // Adicionar o banner ao corpo da página
    document.body.appendChild(cookieBanner);

    var acceptButton = document.getElementById("accept-cookies");

    // Verifica se o usuário já aceitou os cookies
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieBanner.style.display = "block";
    }

    // Aceitar cookies e ocultar banner
    acceptButton.addEventListener("click", function () {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
    });
});
