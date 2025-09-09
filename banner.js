// banner.js — injeta 2 banners em TODAS as páginas de resultado
(function () {
  "use strict";

  // Seu link
  const LINK = "https://app.aguiaprime119000.com/pr/y8X6LEBU";

  // Detecta a raiz onde o arquivo está servindo
  const thisScript = document.currentScript || (function(){const s=document.getElementsByTagName('script');return s[s.length-1];})();
  const siteRoot  = thisScript && thisScript.src ? thisScript.src.replace(/\/[^\/?#]+(?:\?.*)?$/, "") : location.origin;

  // ⬇️ ALTERADO AQUI: usa testetodos.webp
  const IMG_TOPO   = siteRoot + "/imagens/testetodos.webp";
  const IMG_QUADRO = siteRoot + "/imagens/aguia300x300.webp";

  const topHTML = `
    <div class="banner-afiliado-topo" style="text-align:center;margin:16px 0;">
      <a href="${LINK}" target="_blank" rel="noopener sponsored">
        <img src="${IMG_TOPO}" alt="Banner Águia Prime"
             style="width:100%;max-width:980px;height:auto;border-radius:10px;display:block;margin:0 auto;"
             onerror="this.closest('.banner-afiliado-topo').remove()">
      </a>
    </div>`;

  const quadHTML = `
    <div class="banner-afiliado-quad" style="text-align:center;margin:16px 0;">
      <a href="${LINK}" target="_blank" rel="noopener sponsored" style="display:inline-block">
        <img src="${IMG_QUADRO}" alt="Águia Prime"
             style="width:300px;height:300px;border-radius:10px;"
             onerror="this.closest('.banner-afiliado-quad').remove()">
      </a>
    </div>`;

  function isPaginaResultado() {
    const h1 = document.querySelector("h1");
    const t  = h1 ? h1.textContent.toLowerCase() : "";
    return location.pathname.includes("resultado-") || /resultado/.test(t);
  }

  function inject() {
    if (!isPaginaResultado()) return;

    const h1 = document.querySelector("h1");
    if (h1) h1.insertAdjacentHTML("afterend", topHTML);
    else    document.body.insertAdjacentHTML("afterbegin", topHTML);

    const alvo = Array.from(document.querySelectorAll("h2,h3,p,div,span,strong"))
      .find(el => /outras datas/i.test(el.textContent || ""));
    if (alvo) alvo.insertAdjacentHTML("beforebegin", quadHTML);
    else      document.body.insertAdjacentHTML("beforeend", quadHTML);
  }

  if (document.re
