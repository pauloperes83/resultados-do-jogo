        (function () {
            function criarDropdown() {
                const container = document.getElementById('dowp-container');
                if (!container) {
                    console.error('Elemento <container> não encontrado.');
                    return;
                }
    
                container.innerHTML = `
<style>
/* Estilo Geral */
.dropdown-container {
    font-family: Arial, sans-serif;
    max-width: 600px; /* Largura máxima para telas grandes */
    margin: 20px auto; /* Centraliza o contêiner na página */
    padding: 15px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.dropdown-block,
.date-block {
    margin-bottom: 20px; /* Espaçamento entre os blocos */
}

.dropdown-container label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
}

.dropdown-container select,
.date-input-container {
    width: 100%; /* Largura relativa ao contêiner */
    max-width: 300px; /* Largura máxima para telas grandes */
    height: 44px; /* Altura fixa para ambos os elementos */
    display: flex;
    align-items: center;
    box-sizing: border-box;
}

.dropdown-container select {
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
}

.date-input-container {
    gap: 10px; /* Espaçamento entre o seletor de data e o botão */
}

.dropdown-container input[type="date"] {
    flex: 1; /* O seletor de data ocupa o espaço restante no contêiner */
    padding: 10px;
    border: 1px solid #ccc;
    font-size: 16px;
    box-sizing: border-box;
}

.dropdown-container button {
    border: 1px solid #ccc;
    background-color: white
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    cursor: pointer;
    width: 40px; /* Largura fixa para o botão */
    height: 44px; /* Altura fixa para o botão */
}

.dropdown-container button img {
    width: 20px;
    height: 20px;
}

/* Layout para Computadores */
@media (min-width: 768px) {
    .dropdown-container {
        display: flex;
        justify-content: space-between; /* Distribui os blocos com espaço entre eles */
        align-items: flex-start;
        gap: 20px; /* Espaçamento entre os blocos */
    }

    .dropdown-block,
    .date-block {
        margin-bottom: 0; /* Remove margens inferiores nos blocos */
    }
}

/* Layout para Dispositivos Móveis */
@media (max-width: 767px) {
    .dropdown-container {
        display: flex;
        flex-direction: column; /* Empilha os blocos verticalmente */
        align-items: center; /* Centraliza os blocos horizontalmente */
    }

    .dropdown-block,
    .date-block {
        width: 100%; /* Ocupa toda a largura disponível */
        max-width: 300px; /* Limita a largura máxima */
    }

    .dropdown-container select,
    .date-input-container {
        width: 100%; /* Ocupa toda a largura disponível */
    }
}
</style>
<div class="dropdown-container">
    	<div class="dropdown-block">
                        <label for="bancas">Escolha uma banca:</label>
    <select id="bancas">
        <option value="">-- Selecione --</option>
        <optgroup label="Brasil">
            <option value="/resultado-loteria-nacional">Loteria Nacional</option>
        </optgroup>
        <optgroup label="Bahia">
            <option value="/resultado-maluca-bahia">Maluca Bahia</option>
            <option value="/resultado-paratodos-bahia">Paratodos Bahia</option>
        </optgroup>
        <optgroup label="Ceará">
            <option value="/resultado-lotece-ceara">LOTECE - Loteria dos Sonhos</option>
        </optgroup>
        <optgroup label="Goiás">
            <option value="/resultado-look-goias">LOOK LOTERIAS</option>
        </optgroup>
        <optgroup label="Paraíba">
            <option value="/resultado-lotep-pb">Lotep</option>
            <option value="/resultado-paratodos-pb">Paratodos PB</option>
        </optgroup>
        <optgroup label="Rio de Janeiro">
            <option value="/resultado-pt-rio">PT-Rio</option>
        </optgroup>
        <optgroup label="São Paulo">
            <option value="/resultado-pt-sp">PT-SP</option>
            <option value="/resultado-bandeirantes-sp">BANDEIRANTES</option>
        </optgroup>
        <optgroup label="Pernambuco">
            <option value="/resultado-aval-pernambuco">AVAL Pernambuco</option>
            <option value="/resultado-caminho-da-sorte-pe">CAMINHO DA SORTE</option>
            <option value="/resultado-cooperativa-de-petrolina">Cooperativa de Petrolina-PE</option>
            <option value="/resultado-alianca-pe">EXTRAÇÃO ONLINE - ALIANÇA</option>
            <option value="/resultado-loteria-popular">LOTERIA POPULAR</option>
            <option value="/resultado-nordeste-monte-carlos-pe">NORDESTE MONTE CARLOS</option>
        </optgroup>
        <optgroup label="Brasília (DF)">
            <option value="/resultado-lbr-brasilia">LBR</option>
        </optgroup>
        <optgroup label="Minas Gerais">
            <option value="/resultado-minas-mg">MINAS-MG</option>
        </optgroup>
        <optgroup label="Rio Grande do Sul">
            <option value="/resultado-bicho-rs">Bicho RS</option>
        </optgroup>
        <optgroup label="Sergipe">
            <option value="/resultado-abaese-itabaiana-paratodos">ABAESE - ITABAIANA PARATODOS</option>
        </optgroup>
    </select>
	</div>
    <div class="date-block">
        <label for="data">Selecione uma data:</label>
        <div class="date-input-container">
            <input type="date" id="data">
            <button id="buscar">
                <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="Buscar">
            </button>
                    </div>
		</div>
                `;
    
                setDateLimit();
                document.getElementById("buscar").addEventListener("click", redirecionar);
            }
    
            function formatDate(date) {
                let day = date.getUTCDate().toString().padStart(2, '0');
                let month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
                let year = date.getUTCFullYear().toString().slice(-2);
                return `${day}-${month}-${year}`;
            }
    
            function setDateLimit() {
                let dateInput = document.getElementById("data");
                let today = new Date();
                let pastDate = new Date();
                pastDate.setDate(today.getDate() - 30);
                
                dateInput.max = today.toISOString().split("T")[0];
                dateInput.min = pastDate.toISOString().split("T")[0];
            }
    
function redirecionar() {
    let select = document.getElementById("bancas");
    let dateInput = document.getElementById("data");
    let selectedBanca = select.value.replace(/^\//, ""); // Remove a barra inicial, se houver
    let selectedDate = new Date(dateInput.value + "T00:00:00-03:00");
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedBanca && dateInput.value) {
        if (selectedDate.getTime() === today.getTime()) {
            window.location.href = `/${selectedBanca}-de-hoje.html`;
        } else {
            let formattedDate = formatDate(selectedDate);
            window.location.href = `/${selectedBanca}/${formattedDate}.html`;
        }
    }
}
    
            document.addEventListener("DOMContentLoaded", criarDropdown);
        })();