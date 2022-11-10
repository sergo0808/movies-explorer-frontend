import React from "react";
import "./AboutMe.css";
import arrow from '../../image/link_img.svg'

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <h3 className="about-me__subtitle">Сергей</h3>
        <p className="about-me__spicialist">Фронтенд-разработчик, 32 года</p>
        <p className="about-me__text">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать
          музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того,
          как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
        </p>
        <a className="about-me__link-github" href="https://github.com/sergo0808?tab=repositories">
          Github
        </a>
        <p className="about-me__portfolio-text">Портфолио</p>
        <ul className="about-me__list-links">
          <li className="list-links__container">
            <a className="about-me__list-link" href="fdg">
              Статичный сайт
            </a>
            <img className="list-links__img" src={arrow} alt="Картинка стрелка" />
          </li>
          <li className="list-links__container">
            <a className="about-me__list-link" href="fdg">
              Адаптивный сайт
            </a>
            <img className="list-links__img" src={arrow} alt="Картинка стрелка" />
          </li>
          <li className="list-links__container">
            <a className="about-me__list-link" href="fdg">
              Одностраничное приложение
            </a>
            <img className="list-links__img" src={arrow} alt="Картинка стрелка" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
