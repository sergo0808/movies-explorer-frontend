import React from "react";
import "./AboutMe.css";
import arrow from "../../image/link_img.svg";
import imageMe from "../../image/me.jpg";

function AboutMe() {
  return (
    <section className="about-me" id="aboutme">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <img className="about-me__image-me" src={imageMe} alt="Моё фото" />
        <h3 className="about-me__subtitle">Сергей</h3>
        <p className="about-me__spicialist">Фронтенд-разработчик, 32 года</p>
        <p className="about-me__text">
          Я родился и живу в Московской области п.Деденево, оканчиваю ДИНО "Дмитров" кафедра
          цифровой трансформации. У меня есть жена и двое детей.В свободное время узучаю
          программирование и читаю техническую документацию. Работаю в одном из столичных
          аэропортов.
        </p>
        <a
          className="about-me__link-github"
          href="https://github.com/sergo0808?tab=repositories"
          target="_blank"
          rel="noreferrer">
          Github
        </a>
        <p className="about-me__portfolio-text">Портфолио</p>

        <ul className="about-me__list-links">
          <li>
            <a
              className="list-links__container"
              href="https://sergo0808.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer">
              Статичный сайт
              <img className="list-links__img" src={arrow} alt="Картинка стрелка" />
            </a>
          </li>
          <li>
            <a
              className="list-links__container"
              href="https://sergo0808.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer">
              Адаптивный сайт
              <img className="list-links__img" src={arrow} alt="Картинка стрелка" />
            </a>
          </li>
          <li>
            <a
              className="list-links__container"
              href="https://mesto.frontend.sovickiy.nomoredomains.sbs/"
              target="_blank"
              rel="noreferrer">
              Одностраничное приложение
              <img className="list-links__img" src={arrow} alt="Картинка стрелка" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
