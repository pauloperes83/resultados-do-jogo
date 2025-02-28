    (function() {
        function compartilhar(botao) {
            let tabelaWrapper = botao.closest('.table-wrapper');
            let titulo = tabelaWrapper.querySelector('h3').innerText;
            let tabela = tabelaWrapper.querySelector('table');
            let texto = titulo + "\n\n";
            
            let cabecalho = tabela.querySelector('thead tr');
            let colunasCabecalho = cabecalho.querySelectorAll('th');
            let cabecalhoTexto = Array.from(colunasCabecalho).map(th => th.innerText).join('  -  ');
            texto += cabecalhoTexto + "\n";
            
            let linhas = tabela.querySelectorAll('tbody tr');
            linhas.forEach(linha => {
                let colunas = linha.querySelectorAll('td');
                let linhaTexto = Array.from(colunas).map(td => td.innerText).join('  -  ');
                texto += linhaTexto + "\n";
            });
            
            texto += "\nAcesse: " + window.location.href;
            
            if (navigator.share) {
                navigator.share({ text: texto })
                    .catch(err => console.log('Erro ao compartilhar:', err));
            } else {
                prompt("Copie o texto abaixo para compartilhar:", texto);
            }
        }
        
        document.addEventListener("DOMContentLoaded", function() {
            document.querySelectorAll(".btn-compartilhar").forEach(botao => {
                botao.addEventListener("click", function() {
                    compartilhar(this);
                });
            });
        });
    })();
