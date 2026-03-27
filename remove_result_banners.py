from pathlib import Path

REMOVE_STRINGS = [
    'href="/gordoloterias"',
    'src="../banner/gordoloterias.jpg"',
    'src="./banner/gordoloterias.jpg"',
    'href="https://app.bancalitoral.com/pr/g5P71dlw"',
    'src="../banner/litoraldasorte.jpg"',
    'src="./banner/litoraldasorte.jpg"',
]

def remove_matching_wrappers(content: str) -> str:
    lines = content.splitlines()
    new_lines = []
    i = 0

    while i < len(lines):
        line = lines[i]

        if '<div class="table-wrapper">' in line:
            block_lines = [line]
            j = i + 1

            while j < len(lines):
                block_lines.append(lines[j])
                if '</div>' in lines[j]:
                    break
                j += 1

            block_text = "\n".join(block_lines)

            if any(s in block_text for s in REMOVE_STRINGS):
                i = j + 1
                continue

            new_lines.extend(block_lines)
            i = j + 1
        else:
            new_lines.append(line)
            i += 1

    return "\n".join(new_lines)

def process_html_file(file_path: Path):
    content = file_path.read_text(encoding="utf-8", errors="ignore")
    original = content

    content = remove_matching_wrappers(content)

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
