// arquivo: /banner.js
(function () {
  "use strict";

  // link do afiliado
  const LINK = "https://app.aguiaprime119000.com/pr/y8X6LEBU";

  // imagens: usam o caminho do site raiz /imagens/...
  const IMG_TOPO   = "/imagens/cotacao.webp";
  const IMG_QUADRO = "/imagens/aguia300x300.webp";

  const topHTML = `
    <div class="banner-afiliado-topo" style="text-align:center;margin:16px 0;">
      <a href="${LINK}" target="_blank" rel="noopener sponsored">
        <img src="${IMG_TOPO}" alt="Cotações Online Águia Prime"
             style="width:100%;max-width:980px;height:auto;border-radius:10px;display:block;margin:0 auto;">
      </a>
    </div>`;

  const quadHTML = `
    <div class="banner-afiliado-quad" style="text-align:center;margin:16px 0;">
      <a href="${LINK}" target="_blank" rel="noopener sponsored" style="display:inline-block">
        <img src="${IMG_QUADRO}" alt="Águia Prime"
             style="width:300px;height:300px;border-radius:10px;">
      </a>
    </div>`;

  // opcional: injeta só nas páginas de "resultado-*"
  function isPaginaResultado() {
    const h1 = document.querySelector("h1");
    const t  = h1 ? h1.textContent.toLowerCase() : "";
    return location.pathname.includes("resultado-") || t.includes("resultado");
  }

  function inject() {
    if (!isPaginaResultado()) return;

    // topo: logo após o H1
    const h1 = document.querySelector("h1");
    if (h1) h1.insertAdjacentHTML("afterend", topHTML);

    // quadrado: antes de "Outras datas:" se existir; senão, no final
    const outras = Array.from(document.querySelectorAll("*"))
      .find(el => el.textContent && el.textContent.trim().toLowerCase().startsWith("outras datas"));
    if (outras) {
      outras.insertAdjacentHTML("beforebegin", quadHTML);
    } else {
      document.body.insertAdjacentHTML("beforeend", quadHTML);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
