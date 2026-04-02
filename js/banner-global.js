document.addEventListener("DOMContentLoaded", function () {
  const bannerLink = "https://app.aguiaprime119000.com/pr/y8X6LEBU";
  const bannerImage = "/imagens/geminiii-300x250.webp";
  const bannerAlt = "Jogos de sorte online";

  const bannerHTML = `
    <a href="${bannerLink}" target="_blank" rel="noopener noreferrer" class="promo-banner-link">
      <img src="${bannerImage}" alt="${bannerAlt}" class="promo-banner-img">
    </a>
  `;

  const bannerCSS = `
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
  `;

  if (!document.getElementById("promo-banner-style")) {
    const style = document.createElement("style");
    style.id = "promo-banner-style";
    style.textContent = bannerCSS;
    document.head.appendChild(style);
  }

  if (document.querySelector(".promo-banner-link")) {
    return;
  }

  const bannerWrapper = document.createElement("div");
  bannerWrapper.innerHTML = bannerHTML;

  const target =
    document.querySelector("main") ||
    document.querySelector(".container") ||
    document.querySelector(".content") ||
    document.querySelector("body");

  if (target) {
    target.insertAdjacentElement("afterbegin", bannerWrapper.firstElementChild);
  }
});
