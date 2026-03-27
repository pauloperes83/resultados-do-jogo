from pathlib import Path

BANNER_CSS = """
<style>
.promo-banner-link {
  display: block;
  width: fit-content;
  max-width: 300px;
  margin: 20px auto;
  text-align: center;
}

.promo-banner-img {
  width: 100%;
  max-width: 300px;
  height: auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.18);
}
</style>
"""

BANNER_HTML = """
<a href="https://app.aguiaprime119000.com/pr/y8X6LEBU" target="_blank" rel="noopener noreferrer" class="promo-banner-link">
  <img src="/imagens/res%20jogo%20bicho.webp" alt="Jogos de sorte online" class="promo-banner-img">
</a>
"""

def process_html_file(file_path: Path):
    content = file_path.read_text(encoding="utf-8", errors="ignore")
    original = content

    # Evita duplicação
    if 'promo-banner-link' in content or 'res%20jogo%20bicho.webp' in content:
        return False

    lower_content = content.lower()

    # Inserir CSS antes de </head>
    head_close = lower_content.find("</head>")
    if head_close != -1:
        content = content[:head_close] + BANNER_CSS + "\n" + content[head_close:]

    # Inserir banner logo após <body>
    lower_content = content.lower()
    body_pos = lower_content.find("<body")
    if body_pos != -1:
        body_end = lower_content.find(">", body_pos)
        if body_end != -1:
            insert_pos = body_end + 1
            content = content[:insert_pos] + "\n" + BANNER_HTML + "\n" + content[insert_pos:]

    if content != original:
        file_path.write_text(content, encoding="utf-8")
        return True

    return False

def main():
    root = Path(".")
    updated = []

    for file_path in root.rglob("*.html"):
        if process_html_file(file_path):
            updated.append(str(file_path))

    print(f"Arquivos atualizados: {len(updated)}")
    for item in updated:
        print(item)

if __name__ == "__main__":
    main()
