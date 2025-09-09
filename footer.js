document.addEventListener("DOMContentLoaded", function () {
    console.log("Rodapé carregado com sucesso!");

    const footerContainer = document.getElementById('footer-container');
    if (!footerContainer) {
        console.warn("⚠️ footer-container não encontrado.");
        return;
    }

    // Caminho base para ícones e links, relativo à página atual
    const base = location.pathname.includes("milhares") ? "../" : "";

    const footerHTML = `
        <div class="footer-container">
            <div class="footer-logo">
                <h2>Resultados do Jogo</h2>
            </div>
            <p class="footer-text">Esclarecemos que não temos vínculo com o serviço ou pessoas que operam o Jogo do Bicho e que os resultados e estatísticas são meramente informativos.</p>
            <div class="footer-social">
                <a href="https://www.instagram.com/resultados_do_jogo?igsh=MXQ0OWVud25lamp6Nw==" class="social-icon" aria-label="Instagram">
                    <img src="${base}icons/svg/instagram.svg" alt="Instagram">
                </a>
                <a href="https://www.facebook.com/profile.php?id=61577873735879" class="social-icon" aria-label="Facebook">
                    <img src="${base}icons/svg/facebook.svg" alt="Facebook">
                </a>
                <a href="https://x.com/Resultado_jogo" class="social-icon" aria-label="Twitter">
                    <img src="${base}icons/svg/x-twitter.svg" alt="Twitter">
                </a>
                <a href="https://www.youtube.com/@ResultadosdoJogo" class="social-icon" aria-label="YouTube">
                    <img src="${base}icons/svg/youtube.svg" alt="YouTube">
                </a>
                <a href="https://br.pinterest.com/Resultados_do_Jogo/_profile/" class="social-icon" aria-label="Pinterest">
                    <img src="${base}icons/svg/pinterest.svg" alt="Pinterest">
                </a>
            </div>
            <nav class="footer-links">
                <a href="${base}sobre">Sobre nós</a>
                <a href="${base}contato">Contato</a>
                <a href="${base}politicas-de-privacidade">Política de Privacidade</a>
                <a href="${base}termos-de-uso">Termos de Uso</a>
            </nav>
            <p class="footer-copyright">&copy; <span id="year"></span> Resultados do Jogo. Todos os direitos reservados.</p>
            <div class="footer-spacing"></div>
        </div>
    `;

    footerContainer.innerHTML = footerHTML;
    document.getElementById("year").textContent = new Date().getFullYear();
});
// carrega o banner.js em todas as páginas
(function(){var s=document.createElement('script');s.src='banner.js';s.defer=true;document.body.appendChild(s);})();

