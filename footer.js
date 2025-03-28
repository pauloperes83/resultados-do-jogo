document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.getElementById('footer-container');
    
    // Definindo o conteúdo HTML do rodapé
    const footerHTML = `
        <div class="footer-container">
            <div class="footer-logo">
                <h2>Resultados do Jogo</h2>
            </div>
            <p class="footer-text">Esclarecemos que não temos vínculo com o serviço ou pessoas que operam o Jogo do Bicho e que os resultados e estatísticas são meramente informativos.</p>
            <div class="footer-social">
                <a href="https://www.instagram.com/acertosonline/" class="social-icon" aria-label="Instagram">
                    <img src="icons/svg/instagram.svg" alt="Instagram">
                </a>
                <a href="https://www.facebook.com/QuabraBanca/" class="social-icon" aria-label="Facebook">
                    <img src="icons/svg/facebook.svg" alt="Facebook">
                </a>
                <a href="https://x.com/AcertosOnlineJB" class="social-icon" aria-label="Twitter">
                    <img src="icons/svg/x-twitter.svg" alt="Twitter">
                </a>
                <a href="https://www.youtube.com/@AcertosOnline" class="social-icon" aria-label="YouTube">
                    <img src="icons/svg/youtube.svg" alt="YouTube">
                </a>
                <a href="https://br.pinterest.com/acertosonline/" class="social-icon" aria-label="Pinterest">
                    <img src="icons/svg/pinterest.svg" alt="Pinterest">
                </a>
            </div>
            <nav class="footer-links">
                <a href="/sobre">Sobre nós</a>
                <a href="/contato">Contato</a>
                <a href="/politicas-de-privacidade">Política de Privacidade</a>
                <a href="/termos-de-uso">Termos de Uso</a>
            </nav>
            <p class="footer-copyright">&copy; <span id="year"></span> Resultados do Jogo. Todos os direitos reservados.</p>
            <div class="footer-spacing"></div>
        </div>
    `;
    
    // Inserindo o conteúdo dentro do container
    footerContainer.innerHTML = footerHTML;

    // Atualizando o ano dinamicamente
    document.getElementById("year").textContent = new Date().getFullYear();
});
