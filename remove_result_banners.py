from pathlib import Path

OLD_1 = """      <div class="table-wrapper">
        <a href="/gordoloterias">
          <img src="./banner/gordoloterias.jpg" alt="Banner Gordo Loterias" style="width: 100%; height: auto;">
        </a>
      </div>"""

OLD_2 = """      <div class="table-wrapper">
        <a href="https://app.bancalitoral.com/pr/g5P71dlw" target="_blank">
          <img src="./banner/litoraldasorte.jpg" alt="Banner Litoral da Sorte" style="width: 100%; height: auto;">
        </a>
      </div>"""

OLD_3 = """      <div class="table-wrapper">
        <a href="/gordoloterias">
          <img src="../banner/gordoloterias.jpg" alt="Banner Gordo Loterias" style="width: 100%; height: auto;">
        </a>
      </div>"""

OLD_4 = """      <div class="table-wrapper">
        <a href="https://app.bancalitoral.com/pr/g5P71dlw" target="_blank">
          <img src="../banner/litoraldasorte.jpg" alt="Banner Litoral da Sorte" style="width: 100%; height: auto;">
        </a>
      </div>"""

def process_html_file(file_path: Path):
    content = file_path.read_text(encoding="utf-8", errors="ignore")
    original = content

    content = content.replace(OLD_1, "")
    content = content.replace(OLD_2, "")
    content = content.replace(OLD_3, "")
    content = content.replace(OLD_4, "")

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
