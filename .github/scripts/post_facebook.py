import os
import subprocess
import requests
from bs4 import BeautifulSoup

ACCESS_TOKEN = os.getenv("FB_ACCESS_TOKEN")
PAGE_ID      = os.getenv("FB_PAGE_ID")
REPO_URL     = "https://resultadosdojogo.com/"

def post_to_facebook(message: str) -> None:
    url = f"https://graph.facebook.com/{PAGE_ID}/feed"
    response = requests.post(
        url,
        data={"message": message, "access_token": ACCESS_TOKEN},
        timeout=30
    )
    print(f"\n📤 Enviando:\n{message}")
    print(f"✅ Status:  {response.status_code}")
    print(f"📡 Resposta: {response.text}\n")

def get_changed_html_files() -> list[str]:
    """Arquivos .html presentes no commit atual (HEAD)."""
    diff = subprocess.run(
        ["git", "show", "--name-only", "--pretty=format:", "HEAD"],
        capture_output=True, text=True, check=True
    )
    return [f for f in diff.stdout.splitlines() if f.endswith(".html")]

def extract_banca_name(filename: str) -> str:
    base = os.path.basename(filename)
    return (
        base.replace("resultado-", "")
            .replace("-de-hoje.html", "")
            .replace("-", " ")
            .upper()
    )

def extract_top3(filepath: str) -> tuple[list[str], str]:
    """Retorna lista com 3 primeiros prêmios e informação de data (se existir)."""
    with open(filepath, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")

    # Ajuste se sua tabela tiver outra estrutura
    rows = soup.select("table tr")[1:4]          # 1º ao 3º
    premios = []
    for row in rows:
        cols = [c.get_text(strip=True) for c in row.find_all("td")][:3]
        if len(cols) == 3:
            pos, milhar, grupo = cols
            premios.append(f"{pos}: {milhar} - {grupo}")

    data_div = soup.find("h1") or soup.find("div", class_="data")
    data_info = data_div.get_text(strip=True) if data_div else "HOJE"

    return premios, data_info

if __name__ == "__main__":
    if not ACCESS_TOKEN or not PAGE_ID:
        raise SystemExit("FB_ACCESS_TOKEN ou FB_PAGE_ID não definidos.")

    html_files = get_changed_html_files()

    if not html_files:
        print("Nenhum arquivo HTML alterado no último commit.")
        raise SystemExit(0)

    for file in html_files:
        try:
            premios, data_info = extract_top3(file)
        except Exception as e:
            print(f"Erro ao extrair dados de {file}: {e}")
            continue

        banca   = extract_banca_name(file)
        link    = REPO_URL + file.replace(" ", "%20")
        top3txt = "\n".join(premios)

        message = (
            f"{banca}\n"
            f"{data_info}\n\n"
            f"{top3txt}\n\n"
            f"Resultado completo e palpites do dia em:\n{link}\n\n"
            "Boa sorte! 🍀"
        )

        post_to_facebook(message)
