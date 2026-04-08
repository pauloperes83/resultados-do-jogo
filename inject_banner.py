from pathlib import Path
import re

OLD_BANNER_SRC = "/imagens/prime.webp"

def process_html_file(file_path: Path):
    content = file_path.read_text(encoding="utf-8", errors="ignore")
    original = content

    # 1) remove bloco de CSS do banner injetado
    content = re.sub(
        r'<style>\s*\.promo-banner-link\s*\{.*?\.promo-banner-img\s*\{.*?\}\s*</style>\s*',
        '',
        content,
        flags=re.DOTALL | re.IGNORECASE
    )

    # 2) remove o banner novo injetado (link + imagem)
    content = re.sub(
        r'<a[^>]*class=["\'][^"\']*\bpromo-banner-link\b[^"\']*["\'][^>]*>\s*'
        r'<img[^>]*src=["\'][^"\']*' + re.escape(OLD_BANNER_SRC) + r'[^"\']*["\'][^>]*>\s*'
        r'</a>\s*',
        '',
        content,
        flags=re.DOTALL | re.IGNORECASE
    )

    # 3) remove imagem solta, se existir
    content = re.sub(
        r'<img[^>]*src=["\'][^"\']*' + re.escape(OLD_BANNER_SRC) + r'[^"\']*["\'][^>]*>\s*',
        '',
        content,
        flags=re.DOTALL | re.IGNORECASE
    )

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
