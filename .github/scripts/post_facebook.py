import os
import requests
from dotenv import load_dotenv

# Carrega variáveis do ambiente
load_dotenv()

ACCESS_TOKEN = os.getenv("FB_ACCESS_TOKEN")
PAGE_ID = os.getenv("FB_PAGE_ID")
POST_MESSAGE = "Atualização publicada automaticamente: confira os novos resultados em https://resultadosdojogo.com/"

def post_to_facebook(message):
    url = f"https://graph.facebook.com/{PAGE_ID}/feed"
    payload = {
        "message": message,
        "access_token": ACCESS_TOKEN
    }

    response = requests.post(url, data=payload)

    print(f"Status Code: {response.status_code}")
    print(f"Response: {response.text}")

if __name__ == "__main__":
    if ACCESS_TOKEN and PAGE_ID:
        post_to_facebook(POST_MESSAGE)
    else:
        print("Erro: FB_ACCESS_TOKEN ou FB_PAGE_ID não foram definidos.")
