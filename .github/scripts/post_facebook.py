import os
import subprocess
import requests

ACCESS_TOKEN = os.getenv("FB_ACCESS_TOKEN")
PAGE_ID      = os.getenv("FB_PAGE_ID")
REPO_URL     = "https://resultadosdojogo.com/"

def post_to_facebook(message: str) -> None:
    url = f"https://graph.facebook.com/{PAGE_ID}/feed"
    payload = {"message": message, "access_token": ACCESS_TOKEN}
    response = requests.post(url, data=payload, timeout=30)
    print(f"\n📤 Enviando: {message}")
    print(f"✅ Status:  {response.status_code}")
    print(f"📡 Resposta: {response.text}\n")

def get_changed_html_files() -> list[str]:
    """
    Retorna todos os arquivos .html presentes no commit atual (HEAD).
    """
    result = subprocess.run(
        ["git", "show", "--name-only", "--pretty=format:", "HEAD"],
        capture_output=True, text=True, check=True
    )
    files = result.stdout.splitlines()
    return [f for f in files if f.endswith(".html")]

def extract_banca_name(filename: str) -> str:
    base = os.path.basename(filename)
    return (
        base.replace("resultado-", "")
            .replace("-de-hoje.html", "")
            .replace("-", " ")
            .upper()
    )

if __name__ == "__main__":
    if not ACCESS_TOKEN or not PAGE_ID:
        print("Erro: FB_ACCESS_TOKEN ou FB_PAGE_ID não definidos.")
        raise SystemExit(1)

    html_files = get_changed_html_files()

    if not html_files:
        print("Nenhum arquivo HTML alterado no último commit.")
    else:
        for file in html_files:
            banca = extract_banca_name(file)
            link  = REPO_URL + file.replace(" ", "%20")
            message = f"Resultado do Jogo do Bicho {banca}! Confira agora: {link}"
            post_to_facebook(message)
