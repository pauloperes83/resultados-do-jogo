// banner.js v4 — injeta 1 banner topo (testetodos.webp) + 1 banner 300x300, sem duplicar e no tamanho certo
(function () {
  "use strict";

  // trava anti-duplicação
  if (window.__AFILIADO_BANNERS__) return;
  window.__AFILIADO_BANNERS__ = true;

  const LINK       = "https://app.aguiaprime119000.com/pr/y8X6LEBU";
  const IMG_TOPO   = "imagens/testetodos.webp";   // topo (largura cheia)
  const IMG_QUADRO = "imagens/aguia300x300.webp"; // 300x300

  // remove restos antigos: containers nossos + imagens cotacao.webp que estavam no HTML
  function limparAntigos() {
    document.getElementById("afiliado-topo")?.remove();
    document.getElementById("afiliado-quad")?.remove();
    document.querySelectorAll('img[src*="imagens/cotacao.webp"]').forEach((img) => {
      const a = img.closest("a");
      if (a && a.children.length === 1) a.remove(); else img.remove();
    });
  }

  function isPaginaResultado() {
    const h1 = document.querySelector("h1");
    const t  = (h1 ? h1.textContent : "").toLowerCase();
    return location.pathname.includes("resultado-") || t.includes("resultado");
  }

  function inject() {
    if (!isPaginaResultado()) return;

    limparAntigos();

    // 1) topo: testetodos.webp (depois do H1, ou no início do body)
    if (!document.getElementById("afiliado-topo")) {
      const topHTML = `
        <div id="afiliado-topo" style="text-align:center;margin:16px 0;">
          <a href="${LINK}" target="_blank" rel="noopener sponsored">
            <img src="${IMG_TOPO}" alt="Banner Águia Prime"
                 style="width:100%;max-width:980px;height:auto;border-radius:10px;display:block;margin:0 auto;"
                 onerror="this.closest('#afiliado-topo')?.remove()">
          </a>
        </div>`;
      const h1 = document.querySelector("h1");
      if (h1) h1.insertAdjacentHTML("afterend", topHTML);
      else document.body.insertAdjacentHTML("afterbegin", topHTML);
    }

    // 2) 300x300: antes de “Outras datas” (se existir) ou no fim do body
    if (!document.getElementById("afiliado-quad")) {
      const quadHTML = `
        <div id="afiliado-quad" style="text-align:center;margin:16px 0;">
          <a href="${LINK}" target="_blank" rel="noopener sponsored" style="display:inline-block">
            <div style="width:300px;max-width:100%;margin:0 auto;">
              <img src="${IMG_QUADRO}" alt="Águia Prime"
                   style="display:block;width:100% !important;height:auto;aspect-ratio:1/1;border-radius:10px;"
                   onerror="this.closest('#afiliado-quad')?.remove()">
            </div>
          </a>
        </div>`;
      const alvo = Array.from(document.querySelectorAll("h2,h3,p,div,span,strong"))
        .find(el => /outras datas/i.test((el.textContent || "").trim()));
      if (alvo) alvo.insertAdjacentHTML("beforebegin", quadHTML);
      else document.body.insertAdjacentHTML("beforeend", quadHTML);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
