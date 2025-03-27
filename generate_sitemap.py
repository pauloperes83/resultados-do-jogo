import os
from datetime import datetime, timedelta
import xml.etree.ElementTree as ET
from xml.dom import minidom

# Configurações
BASE_URL = "https://resultadosdojogo.com"  # Substitua pelo seu domínio real do GitHub Pages
SITEMAPS_DIR = "sitemaps"
UPDATED_PAGES = [
    "https://resultadosdojogo.com/resultado-maluca-bahia-de-hoje.html",
    "https://resultadosdojogo.com/resultado-paratodos-bahia-de-hoje.html",
    "https://resultadosdojogo.com/resultado-loteria-nacional-de-hoje.html",
    "https://resultadosdojogo.com/resultado-look-goias-de-hoje.html",
    "https://resultadosdojogo.com/resultado-lotep-pb-de-hoje.html",
    "https://resultadosdojogo.com/resultado-paratodos-pb-de-hoje.html",
    "https://resultadosdojogo.com/resultado-pt-rio-de-hoje.html",
    "https://resultadosdojogo.com/resultado-pt-sp-de-hoje.html",
    "https://resultadosdojogo.com/resultado-bandeirantes-sp-de-hoje.html",
    "https://resultadosdojogo.com/resultado-lotece-ceara-de-hoje.html",
    "https://resultadosdojogo.com/resultado-lbr-brasilia-de-hoje.html",
    "https://resultadosdojogo.com/resultado-minas-mg-de-hoje.html",
    "https://resultadosdojogo.com/resultado-bicho-rs-de-hoje.html",
    "https://resultadosdojogo.com/resultado-abaese-itabaiana-paratodos-de-hoje.html",
    "https://resultadosdojogo.com/resultado-aval-pernambuco-de-hoje.html",
    "https://resultadosdojogo.com/resultado-caminho-da-sorte-pe-de-hoje.html",
    "https://resultadosdojogo.com/resultado-cooperativa-de-petrolina-de-hoje.html",
    "https://resultadosdojogo.com/resultado-alianca-pe-de-hoje.html",
    "https://resultadosdojogo.com/resultado-loteria-popular-de-hoje.html",
    "https://resultadosdojogo.com/resultado-nordeste-monte-carlos-pe-de-hoje.html"
]

DIRECTORIES = [
    "resultado-maluca-bahia",
    "resultado-paratodos-bahia",
    "resultado-loteria-nacional",
    "resultado-look-goias",
    "resultado-lotep-pb",
    "resultado-paratodos-pb",
    "resultado-pt-rio",
    "resultado-pt-sp",
    "resultado-bandeirantes-sp",
    "resultado-lotece-ceara",
    "resultado-lbr-brasilia",
    "resultado-minas-mg",
    "resultado-bicho-rs",
    "resultado-abaese-itabaiana-paratodos",
    "resultado-aval-pernambuco",
    "resultado-caminho-da-sorte-pe",
    "resultado-cooperativa-de-petrolina",
    "resultado-alianca-pe",
    "resultado-loteria-popular",
    "resultado-nordeste-monte-carlos-pe"
]

# Função para criar um XML bem formatado
def prettify(elem):
    rough_string = ET.tostring(elem, "utf-8")
    reparsed = minidom.parseString(rough_string)
    return reparsed.toprettyxml(indent="  ")

# Gera sitemap para páginas atualizadas diariamente
def generate_updated_daily_sitemap():
    root = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    today = datetime.now().strftime("%Y-%m-%dT12:00:00-03:00")
    
    for url in UPDATED_PAGES:
        url_elem = ET.SubElement(root, "url")
        ET.SubElement(url_elem, "loc").text = url
        ET.SubElement(url_elem, "lastmod").text = today
        ET.SubElement(url_elem, "changefreq").text = "daily"
        ET.SubElement(url_elem, "priority").text = "1.0"
    
    with open(f"{SITEMAPS_DIR}/updated-daily.xml", "w", encoding="utf-8") as f:
        f.write(prettify(root))

# Gera sitemap para novas páginas diárias com data do dia anterior
def generate_new_daily_sitemap():
    today = datetime.now()
    yesterday = today - timedelta(days=1)  # Data do dia anterior
    date_str = yesterday.strftime("%d-%m-%y")  # Formato dd-mm-aa
    today_str = today.strftime("%Y-%m-%d")  # Para o nome do arquivo
    yesterday_iso = yesterday.strftime("%Y-%m-%dT00:00:00-03:00")  # Para lastmod
    
    root = ET.Element("urlset", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    
    # Geração de 20 novas páginas, uma por diretório
    for directory in DIRECTORIES:
        url_elem = ET.SubElement(root, "url")
        ET.SubElement(url_elem, "loc").text = f"{BASE_URL}/{directory}/{date_str}.html"
        ET.SubElement(url_elem, "lastmod").text = yesterday_iso
        ET.SubElement(url_elem, "changefreq").text = "daily"
        ET.SubElement(url_elem, "priority").text = "0.8"
    
    new_file = f"{SITEMAPS_DIR}/new-daily-{today_str}.xml"
    with open(new_file, "w", encoding="utf-8") as f:
        f.write(prettify(root))
    return new_file

# Atualiza o sitemapindex.xml e remove arquivos antigos
def update_sitemap_index(new_daily_file):
    today = datetime.now()
    cutoff_date = today - timedelta(days=15)  # Limite de 15 dias
    today_str = today.strftime("%Y-%m-%dT00:00:00-03:00")
    
    # Lista todos os arquivos new-daily-*.xml
    sitemap_files = [f for f in os.listdir(SITEMAPS_DIR) if f.startswith("new-daily-") and f.endswith(".xml")]
    sitemap_files.append("updated-daily.xml")  # Adiciona o fixo
    
    root = ET.Element("sitemapindex", xmlns="http://www.sitemaps.org/schemas/sitemap/0.9")
    
    for sitemap_file in sorted(sitemap_files):
        if sitemap_file == "updated-daily.xml":
            lastmod = today_str
        else:
            date_str = sitemap_file.split("new-daily-")[1].replace(".xml", "")
            file_date = datetime.strptime(date_str, "%Y-%m-%d")
            if file_date < cutoff_date:
                # Remove o arquivo do repositório
                file_path = os.path.join(SITEMAPS_DIR, sitemap_file)
                if os.path.exists(file_path):
                    os.remove(file_path)
                continue  # Ignora arquivos com mais de 15 dias
            lastmod = f"{date_str}T00:00:00-03:00"
        
        sitemap_elem = ET.SubElement(root, "sitemap")
        ET.SubElement(sitemap_elem, "loc").text = f"{BASE_URL}/sitemaps/{sitemap_file}"
        ET.SubElement(sitemap_elem, "lastmod").text = lastmod
    
    with open("sitemapindex.xml", "w", encoding="utf-8") as f:
        f.write(prettify(root))

# Executa o processo
if __name__ == "__main__":
    os.makedirs(SITEMAPS_DIR, exist_ok=True)
    generate_updated_daily_sitemap()
    new_daily_file = generate_new_daily_sitemap()
    update_sitemap_index(new_daily_file)
