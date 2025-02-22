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
                <a href="https://www.instagram.com/acertosonline/" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/QuabraBanca/" class="social-icon" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="https://x.com/AcertosOnlineJB" class="social-icon" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/@AcertosOnline" class="social-icon" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="https://br.pinterest.com/acertosonline/" class="social-icon" aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>
            </div>
            <nav class="footer-links">
                <a href="/sobre.html">Sobre nós</a>
                <a href="/contato.html">Contato</a>
                <a href="/politicas-de-privacidade.html">Política de Privacidade</a>
                <a href="/termos-de-uso.html">Termos de Uso</a>
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
