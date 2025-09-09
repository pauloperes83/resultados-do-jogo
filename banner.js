// banner.js — injeta banner no topo (e opcionalmente um 300x300 lá embaixo)
(function () {
  "use strict";

  // Evita duplicar se o script for carregado mais de uma vez
  if (window.__AFILIADO_BANNERS__) return;
  window.__AFILIADO_BANNERS__ = true;

  const LINK = "https://app.aguiaprime119000.com/pr/y8X6LEBU";

  // >>> TOP: usa testetodos.webp
  const IMG_TOPO   = "imagens/testetodos.webp";

  // >>> QUADRADO (se for usar)
  const IMG_QUADRO = "imagens/aguia300x300.webp";

  // HTML topo
  const topHTML = `
    <div id="afiliado-topo" style="text-align:center;margin:16px 0;">
      <a href="${LINK}" target="_blank" rel="noopener sponsored">
        <img src="${IMG_TOPO}" alt="Banner Águia Prime"
             style="width:100%;max-width:980px;height:auto;border-radius:10px;display:block;margin:0 auto;"
             onerror="this.closest('#afiliado-topo')?.remove()">
      </a>
    </div>`;

  // HTML 300x300 (OPCIONAL)
  const quadHTML = `
  <div id="afiliado-quad" class="banner-afiliado-quad" style="text-align:center;margin:16px 0;">
    <a href="${LINK}" target="_blank" rel="noopener sponsored" style="display:inline-block">
      <div style="width:300px;max-width:100%;margin:0 auto;">
        <img src="${IMG_QUADRO}" alt="Águia Prime"
             style="display:block;width:100% !important;height:auto;aspect-ratio:1/1;border-radius:10px;"
             onerror="this.closest('#afiliado-quad')?.remove()">
      </div>
    </a>
  </div>`;

  // Considero páginas de resultado
  function isPaginaResultado() {
    const h1 = document.querySelector("h1");
    const t  = (h1 ? h1.textContent : "").toLowerCase();
    return location.pathname.includes("resultado-") || t.includes("resultado");
  }

  function inject() {
    if (!isPaginaResultado()) return;

    // 1) TOP — sempre
    if (!document.getElementById("afiliado-topo")) {
      const h1 = document.querySelector("h1");
      if (h1) h1.insertAdjacentHTML("afterend", topHTML);
      else document.body.insertAdjacentHTML("afterbegin", topHTML);
    }

    // 2) 300x300 — insere antes de “Outras datas” (se existir), senão no fim do body
if (!document.getElementById("afiliado-quad")) {
  const alvo = Array.from(document.querySelectorAll("h2,h3,p,div,span,strong"))
    .find(el => /outras datas/i.test((el.textContent || "").trim()));
  if (alvo) alvo.insertAdjacentHTML("beforebegin", quadHTML);
  else      document.body.insertAdjacentHTML("beforeend", quadHTML);
}
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();


