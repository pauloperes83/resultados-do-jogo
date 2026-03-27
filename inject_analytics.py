from pathlib import Path

GA_SNIPPET = """<script async src="https://www.googletagmanager.com/gtag/js?id=G-7N7KQVP637"></script>
<script src="/analytics.js"></script>
"""

def process_html_file(file_path: Path):
    content = file_path.read_text(encoding="utf-8", errors="ignore")

    if "G-7N7KQVP637" in content or 'src="/analytics.js"' in content:
        return False

    lower_content = content.lower()
    head_pos = lower_content.find("<head>")
    if head_pos != -1:
        insert_pos = head_pos + len("<head>")
        new_content = content[:insert_pos] + "\n" + GA_SNIPPET + content[insert_pos:]
        file_path.write_text(new_content, encoding="utf-8")
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
