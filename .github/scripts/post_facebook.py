import os
import requests
import re
from dotenv import load_dotenv
from pathlib import Path

load_dotenv()

ACCESS_TOKEN = os.getenv("FB_ACCESS_TOKEN")
PAGE_ID = os.getenv("FB_PAGE_ID")

# Mapeamento dos diretórios de resultados e seus nomes legíveis
N = {
    "resultado-pt-rio": "Resultado PT-RIO",
    "resultado-paratodos-pb": "Resultado ParaTodos PB",
    "resultado-paratodos-bahia": "Resultado ParaTodos Bahia",
    "resultado-loteria-popular": "Loteria Popular",
    "resultado-loteria-nacional": "Loteria Nacional",
    "resultado-lotep-pb": "Lotep PB",
    "resultado-lotece-ceara": "Lotece CE",
    "resultado-maluco-bahia": "Maluco Bahia",
    "resultado-minas-mg": "Minas MG",
    "resultado-cooperativa-de-petroleiros": "Cooperativa de Petroleiros",
    "resultado-bicho-rs": "Bicho RS",
    "resultado-caminho-da-sorte-pe": "Caminho da Sorte PE",
    "resultado-bandierantes-sp": "Bandeirantes SP",
    "resultado-avai-pernambuco": "Avaí Pernambuco",
    "resultado-alianca-pe": "Aliança PE",
    "resultado-abaete-itabaiana-paratodos": "Abaeté Itabaiana ParaTodos"
}

def post_to_facebook(message):
    url = f"https://graph.facebook.com/{PAGE_ID}/feed"
    payload = {
        "message": message,
        "access_token": ACCESS_TOKEN
    }
    response = requests.post(url, data=payload)
    print(f"📤 Postando: {message}")
    print("Status:", response.status_code)
    print("Resposta:", response.text)

def detectar_arquivos_html():
    base_path = Path(__file__).resolve().parent.parent.parent  # vai até a raiz do projeto
    arquivos = base_path.rglob("*.html")
    return [str(arquivo) for arquivo in arquivos if not str(arquivo).endswith("404.html")]

def montar_mensagem(nome_loteria, nome_arquivo):
    return f"{nome_loteria} ({nome_arquivo})\nConfirme os novos resultados aqui: https://resultadosdojogo.com/"

if __name__ == "__main__":
    arquivos = detectar_arquivos_html()
    for path in arquivos:
        dir_slug = Path(path).parent.name
        nome_arquivo = Path(path).stem  # remove .html
        if dir_slug in N:
            nome_loteria = N[dir_slug]
            mensagem = montar_mensagem(nome_loteria, nome_arquivo)
            post_to_facebook(mensagem)
