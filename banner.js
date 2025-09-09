// banner.js — injeta 2 banners em TODAS as páginas
(function () {
  "use strict";

  // link do afiliado
  const LINK = "https://app.aguiaprime119000.com/pr/y8X6LEBU";

  // caminhos RELATIVOS às páginas (sem "/" no começo)
  const IMG_TOPO   = "imagens/cotacao.webp";
  const IMG_QUADRO = "imagens/aguia300x300.webp";

  // blocos HTML dos banners
  const topHTML = `
    <div class="banner-afiliado-topo" style="text-align:center;margin:16px 0;">
      <a href="${LINK}" target="_blank" rel="noopener sponsored">
        <img src="${IMG_TOPO}" alt="Cotações Online Águia Prime"
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

  function inject() {
    // 1) coloca o banner do topo logo após o primeiro <h1> (se existir),
    //    senão no começo do <body>
    const h1 = document.querySelector("h1");
    if (h1) h1.insertAdjacentHTML("afterend", topHTML);
    else document.body.insertAdjacentHTML("afterbegin", topHTML);

    // 2) coloca o 300x300 antes de "Outras datas" se existir; senão no final do body
    const alvo = Array.from(document.querySelectorAll("h2,h3,p,div,span,strong"))
      .find(el => /outras datas/i.test(el.textContent || ""));
    if (alvo) alvo.insertAdjacentHTML("beforebegin", quadHTML);
    else document.body.insertAdjacentHTML("beforeend", quadHTML);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
