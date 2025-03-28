// Função para compartilhar a tabela
function shareTable(button) {
    const tableWrapper = button.closest(".table-wrapper");
    const title = tableWrapper.querySelector("h3").innerText;
    const table = tableWrapper.querySelector("table");
    const headerColumns = table.querySelectorAll("thead th");
    const rows = table.querySelectorAll("tbody tr");

    // Obtém o cabeçalho formatado
    let headerText = Array.from(headerColumns).map(th => th.innerText).join(" - ");

    // Obtém os dados das linhas
    let tableData = `${title}\n\n${headerText}\n`;
    rows.forEach(row => {
        const columns = row.querySelectorAll("td");
        const rowData = Array.from(columns).map(td => td.innerText).join(" - ");
        tableData += rowData + "\n";
    });

    const pageUrl = window.location.href;
    const shareText = `${tableData}\n\nAcesse a página: ${pageUrl}`;

    if (navigator.share) {
        navigator.share({
            title: title,
            text: shareText,
            url: pageUrl
        }).then(() => console.log("Compartilhamento realizado com sucesso!"))
          .catch((error) => console.log("Erro ao compartilhar:", error));
    } else {
        alert("Seu navegador não suporta compartilhamento.");
    }
}


// 3. Registrando o Service Worker no seu site (script.js)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker registrado!'))
      .catch((err) => console.error('Erro no registro do Service Worker:', err));
  });
}

// 4. Criando o botão de instalação
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    document.getElementById('install-app').style.display = 'block'; // Mostra o link
});

function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('Usuário aceitou instalar o PWA');
            }
            deferredPrompt = null;
        });
    }
}


        // Verifica se a página anterior é do mesmo domínio
        document.getElementById('backButton').addEventListener('click', function(event) {
            const previousPage = document.referrer;
            const currentDomain = window.location.origin;

            if (previousPage.startsWith(currentDomain)) {
                window.history.back(); // Volta para a página anterior
            }
        });
