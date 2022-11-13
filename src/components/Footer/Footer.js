import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__year">©2022</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a href="https://github.com/sergo0808?tab=repositories" className="footer__link" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
