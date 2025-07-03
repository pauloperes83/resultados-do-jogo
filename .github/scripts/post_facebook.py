import os
import subprocess
import requests
from bs4 import BeautifulSoup

ACCESS_TOKEN = os.getenv("FB_ACCESS_TOKEN")
PAGE_ID = os.getenv("FB_PAGE_ID")
REPO_URL = "https://resultadosdojogo.com/"

def post_to_facebook(message):
    url = f"https://graph.facebook.com/{PAGE_ID}/feed"
    payload = {
        "message": message,
        "access_token": ACCESS_TOKEN
    }
    response = requests.post(url, data=payload)
    print(f"\n📤 Enviando: {message}")
    print(f"✅ Status: {response.status_code}")
    print(f"📡 Resposta: {response.text}\n")

def get_changed_html_files():
    result = subprocess.run(["git", "diff", "--name-only", "HEAD^", "HEAD"], capture_output=True, text=True)
    changed_files = result.stdout.splitlines()
    return [f for f in changed_files if f.endswith(".html")]

def extract_banca_name(filename):
    base = os.path.basename(filename)
    nome = base.replace("resultado-", "").replace("-de-hoje.html", "").replace("-", " ").upper()
    return nome

def extract_result_data(filepath):
    with open(filepath, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    # Ajuste conforme sua estrutura HTML
    # Exemplo: cada linha de resultado tem <tr><td>1º</td><td>2361</td><td>Leão</td></tr>
    rows = soup.select("table tr")[1:4]  # do 1º ao 3º
    premios = []
    for row in rows:
        cols = row.find_all("td")
        if len(cols) >= 3:
            pos = cols[0].text.strip()
            milhar = cols[1].text.strip()
            grupo = cols[2].text.strip()
            premios.append(f"{pos}: {milhar} - {grupo}")

    # Data pode vir de algum lugar do HTML (exemplo fictício)
    data_div = soup.find("div", class_="data")
    data_info = data_div.text.strip() if data_div else "Hoje"

    return premios, data_info

if __name__ == "__main__":
    if not ACCESS_TOKEN or not PAGE_ID:
        print("Erro: variáveis de ambiente FB_ACCESS_TOKEN ou FB_PAGE_ID não definidas.")
        exit(1)

    html_files = get_changed_html_files()

    if not html_files:
        print("Nenhum arquivo HTML alterado no último commit.")
    else:
        for file in html_files:
            banca = extract_banca_name(file)
            premios, data_info = extract_result_data(file)
            link = REPO_URL + file.replace(" ", "%20")
            texto_premios = "\n".join(premios)

            message = (
                f"{banca}\n"
                f"Resultado do Jogo do Bicho – {data_info}\n\n"
                f"{texto_premios}\n\n"
                f"Confira o resultado completo em: {link}\n\n"
                f"Aproveite nossos palpites do dia e boa sorte! 🍀"
            )

            post_to_facebook(message)
