document.addEventListener("DOMContentLoaded", function () {
  const banners = [
    {
      link: "https://app.superbancas.club/pr/FBlv7ZAw",
      image: "/imagens/super.webp",
      alt: "Banner 1"
    },
    {
      link: "https://chat.whatsapp.com/EiTxEEswEt4G23R8EtG1q5",
      image: "/imagens/grupozap.png",
      alt: "Banner 2"
    },
    {
      link: "https://vegasloterias.com/login?friendlyCode=649922870",
      image: "/imagens/VEGAS 1_11zon.webp",
      alt: "Sorte Premiada Carioca JB"
    }
  ];

  const bannerCSS = `
    .promo-banner-area {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      margin: 20px auto;
      width: 100%;
    }

    .promo-banner-link {
      display: block;
      width: fit-content;
      max-width: 300px;
      text-align: center;
    }

    .promo-banner-img {
      width: 100%;
      max-width: 300px;
      height: auto;
      display: block;
      border-radius: 12px;
      box-shadow: 0 4px 14px rgba(0,0,0,0.18);
    }
  `;

  if (!document.getElementById("promo-banner-style")) {
    const style = document.createElement("style");
    style.id = "promo-banner-style";
    style.textContent = bannerCSS;
    document.head.appendChild(style);
  }

  if (document.querySelector(".promo-banner-area")) {
    return;
  }

  const area = document.createElement("div");
  area.className = "promo-banner-area";

  banners.forEach((banner) => {
    const a = document.createElement("a");
    a.href = banner.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.className = "promo-banner-link";

    const img = document.createElement("img");
    img.src = banner.image;
    img.alt = banner.alt;
    img.className = "promo-banner-img";

    a.appendChild(img);
    area.appendChild(a);
  });

  const target =
    document.querySelector("main") ||
    document.querySelector(".container") ||
    document.querySelector(".content") ||
    document.querySelector("body");

  if (target) {
    target.insertAdjacentElement("afterbegin", area);
  }
});
