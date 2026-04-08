from pathlib import Path
import re

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
  <img src="/imagens/prime.webp?v=3" alt="Jogos de sorte online" class="promo-banner-img">
</a>
"""

# Só o banner antigo que deve sair
OLD_BANNER_SRC = "/imagens/geminiii-300x250.webp"

def process_html_file(file_path: Path):
    content = file_path.read_text(encoding="utf-8", errors="ignore")
    original = content

    # 1) Atualiza banner novo já existente
    content = re.sub(
        r'<a[^>]*class=["\'][^"\']*\bpromo-banner-link\b[^"\']*["\'][^>]*>.*?</a>',
        BANNER_HTML,
        content,
        flags=re.DOTALL | re.IGNORECASE
    )

    # 2) Substitui banner antigo da Gemini quando estiver dentro de <a>...</a>
    #    Aqui miramos SOMENTE o src da Gemini, sem afetar WhatsApp ou outros banners.
    pattern_linked_old_banner = re.compile(
        r'<a\b[^>]*>\s*'
        r'<img\b(?=[^>]*\bsrc=["\']' + re.escape(OLD_BANNER_SRC) + r'["\'])[^>]*>'
        r'\s*</a>',
        flags=re.DOTALL | re.IGNORECASE
    )
    content = pattern_linked_old_banner.sub(BANNER_HTML, content)

    # 3) Substitui banner antigo da Gemini quando estiver solto
    pattern_old_banner_img = re.compile(
        r'<img\b(?=[^>]*\bsrc=["\']' + re.escape(OLD_BANNER_SRC) + r'["\'])[^>]*>',
        flags=re.DOTALL | re.IGNORECASE
    )
    content = pattern_old_banner_img.sub(BANNER_HTML, content)

    # 4) Garante CSS uma vez só
    if '.promo-banner-link' not in content or '.promo-banner-img' not in content:
        lower_content = content.lower()
        head_close = lower_content.find("</head>")
        if head_close != -1:
            content = content[:head_close] + BANNER_CSS + "\n" + content[head_close:]
        else:
            content = BANNER_CSS + "\n" + content

    # 5) Se não existir nenhum banner novo, insere após <body>
    if 'promo-banner-link' not in content:
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
