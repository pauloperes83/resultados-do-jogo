// arquivo: /banner.js
(function () {
  "use strict";

  // Seu link de afiliado
  const LINK = "https://app.aguiaprime119000.com/pr/y8X6LEBU";

  // URLs absolutas das imagens (evita erro de caminho)
  const IMG_TOPO   = "https://resultadosdojogo.com/img/cotacao.webp";
  const IMG_QUADRO = "https://resultadosdojogo.com/img/aguia300x300.webp";

  // HTML dos banners
  const topHTML = `
    <div class="banner-afiliado-topo" style="text-align:center;margin:16px 0;">
      <a href="${LINK}" target="_blank" rel="noopener sponsored">
        <img src="${IMG_TOPO}" alt="Cotações Online Águia Prime"
             style="width:100%;max-width:980px;height:auto;border-radius:10px;display:block;margin:0 auto;">
      </a>
    </div>
  `;

  const quadHTML = `
    <div class="banner-afiliado-quad" style="text-align:center;margin:16px 0;">
      <a href="${LINK}" target="_blank" rel="noopener sponsored" style="display:inline-block">
        <img src="${IMG_QUADRO}" alt="Águia Prime"
             style="width:300px;height:300px;border-radius:10px;">
      </a>
    </div>
  `;

  function isPaginaResultado() {
    const h1 = document.querySelector("h1");
    const t  = h1 ? h1.textContent.toLowerCase() : "";
    return location.pathname.includes("resultado-") || t.includes("resultado");
  }

  function inject() {
    if (!isPaginaResultado()) return; // só injeta nas páginas de resultado

    // 1) Banner topo logo após o H1
    const h1 = document.querySelector("h1");
    if (h1) h1.insertAdjacentHTML("afterend", topHTML);

    // 2) Banner 300x300 antes de "Outras datas:" (se existir) ou no final do body
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
