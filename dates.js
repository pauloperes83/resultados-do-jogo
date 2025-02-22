document.addEventListener("DOMContentLoaded", () => {

    function injectStyles() {
        const style = document.createElement("style");
        style.textContent = `
.table-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-content: center;
    width: 100%;
    align: center;
}

.table-wrapper {
    min-width: 250px;
}

h3 {
    font-size: 16px;
    text-align: center;
    margin-bottom: 10px;
}

table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border: 1px solid #ddd;
    font-size: 14px;
    text-align: center;
}

thead th {
    background-color: #333;
    color: white;
    padding: 8px;
}

tbody td {
    padding: 6px;
    border: 1px solid #ddd;
}

#container-resultados {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    width: 100%;
    align-items: flex-start;
}

.card-resultado {
    flex: 0 0 140px;
    border: 1px solid #ccc;
    text-align: center;
    cursor: pointer;
    font-size: 12px;
    padding: 4px;
    border-radius: 1px;
    background: white;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70px;
}

#titulo-resultados {
    margin-top: 40px;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
}

/* Responsividade */
@media (max-width: 500px) {
    .card-resultado {
        flex: 0 0 100px;
        height: 80px;
    }
}`;
        document.head.appendChild(style);
    }

    function formatDate(date, format) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const shortYear = String(year).slice(-2);

        if (format === 'dd/mm/yyyy') return `${day}/${month}/${year}`;
        if (format === 'dd-mm-yy') return `${day}-${month}-${shortYear}`;
    }

    function getDayLabel(index) {
        if (index === 0) return 'hoje';
        if (index === 1) return 'ontem';
        const dias = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
        return dias[new Date().getDay() - index] || dias[(7 + new Date().getDay() - index) % 7];
    }

    function gerarTitulo() {
        const titulo = document.createElement("h2");
        titulo.id = "titulo-resultados";
        
        const icon = document.createElement("i");
        icon.classList.add("ph", "ph-calendar-blank");
        
        titulo.appendChild(icon);
        titulo.appendChild(document.createTextNode("Outras datas:"));
        return titulo;
    }

    function gerarCards() {
        const container = document.createElement("div");
        container.id = "container-resultados";

        for (let i = 0; i < 7; i++) {
            let data = new Date();
            data.setDate(data.getDate() - i);
            const dataFormatada = formatDate(data, 'dd/mm/yyyy');
            const dataUrl = formatDate(data, 'dd-mm-yy');
            const diaLabel = getDayLabel(i);

            const card = document.createElement("div");
            card.classList.add("card-resultado");
            card.innerHTML = `<p>Resultado de <br><strong>${diaLabel}, ${dataFormatada}</strong></p>`;
            card.onclick = () => {
                const url = i === 0 ? `/${localresultados}-de-hoje.html` : `/${localresultados}/${dataUrl}.html`;
                window.location.href = url;
            };

            container.appendChild(card);
        }

        return container;
    }

    function renderizarPagina() {
        const app = document.getElementById("app-resultados");
        injectStyles();
        app.appendChild(gerarTitulo());
        app.appendChild(gerarCards());
    }

    renderizarPagina();
});
