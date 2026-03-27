from pathlib import Path
import re

PATTERN = re.compile(
    r'<div id="afiliado-topo"[^>]*>\s*<a href="https://app\.aguiaprime119000\.com/pr/y8X6LEBU"[^>]*>\s*<img src="imagens/aguia prime\.webp"[^>]*>\s*</a>\s*</div>',
    re.IGNORECASE | re.DOTALL
)

def process_html_file(file_path: Path):
    content = file_path.read_text(encoding="utf-8", errors="ignore")
    original = content

    content = PATTERN.sub("", content)

    if content != original:
        file_path.write_text(content, encoding="utf-8")
        return True
    return False

def main():
    updated = []
    for file_path in Path(".").rglob("*.html"):
        if process_html_file(file_path):
            updated.append(str(file_path))

    print(f"Arquivos atualizados: {len(updated)}")
    for item in updated:
        print(item)

if __name__ == "__main__":
    main()
