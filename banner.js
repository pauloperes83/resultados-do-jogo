// banner.js — injeta 2 banners sem duplicar
(function () {
  "use strict";

  // --- trava anti-duplicação ---
  if (window.__AFILIADO_BANNERS__) return;
  window.__AFILIADO_BANNERS__ = true;

  const LINK = "https://app.aguiaprime119000.com/pr/y8X6LEBU";

  // TOP: alterado para testetodos.webp
  const IMG_TOPO   = "imagens/testetodos.webp";
  const IMG_QUADRO = "imagens/aguia300x300.webp";

  const topHTML = `
    <div id="afiliado-topo" class="banner-afiliado-topo" style="text-align:center;margin:16px 0;">
      <a href="${LINK}" target="_blank" rel="noopener sponsored">
        <img src="${IMG_TOPO}" alt="Banner Águia Prime"
             style="width:100%;max-width:980px;height:auto;border-radius:10px;display:block;margin:0 auto;"
             onerror="this.closest('#afiliado-topo')?.remove()">
      </a>
    </div>`;

  const quadHTML = `
    <div id="afiliado-quad" class="banner-afiliado-quad" style="text-align:center;margin:16px 0;">
      <a href="${LINK}" target="_blank" rel="noopener sponsored" style="display:inline-block">
        <img src="${IMG_QUADRO}" alt="Águia Prime"
             style="width:300px;height:300px;border-radius:10px;"
             onerror="this.closest('#afiliado-quad')?.remove()">
      </a>
    </div>`;

  function isPaginaResultado() {
    const h1 = document.querySelector("h1");
    const t  = (h1 ? h1.textContent : "").toLowerCase();
    return location.pathname.includes("resultado-") || t.includes("resultado");
  }

  function inject() {
    if (!isPaginaResultado()) return;

    // TOP (só se ainda não existir)
    if (!document.getElementById("afiliado-topo")) {
      const h1 = document.querySelector("h1");
      if (h1) h1.insertAdjacentHTML("afterend", topHTML);
      else document.body.insertAdjacentHTML("afterbegin
