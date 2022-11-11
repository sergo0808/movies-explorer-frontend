import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section class="footer">
      <p class="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div class="footer__container">
        <p class="footer__year">©2022</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" class="footer__link" target="_blank" rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a href="https://github.com/sergo0808?tab=repositories" class="footer__link" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
