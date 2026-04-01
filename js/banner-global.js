document.addEventListener("DOMContentLoaded", function () {
  const bannerLink = "https://app.aguiaprime119000.com/pr/y8X6LEBU";
  const bannerImage = "/imagens/geminiii%20300x250.webp";
  const bannerAlt = "Jogos de sorte online";

  const bannerHTML = `
    <a href="${bannerLink}" target="_blank" rel="noopener noreferrer" class="promo-banner-link">
      <img src="${bannerImage}" alt="${bannerAlt}" class="promo-banner-img">
    </a>
  `;

  const bannerCSS = `
    <style>
      .promo-banner-link {
        display: block;
        width: fit-content;
        max-width: 300px;
        margin: 20px auto;
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
    </style>
  `;

  if (!document.getElementById("promo-banner-style")) {
    const styleWrapper = document.createElement("div");
    styleWrapper.id = "promo-banner-style";
    styleWrapper.innerHTML = bannerCSS;
    document.head.appendChild(styleWrapper);
  }

  const bannerContainer = document.getElementById("banner-global");

  if (bannerContainer) {
    bannerContainer.innerHTML = bannerHTML;
  }
});
