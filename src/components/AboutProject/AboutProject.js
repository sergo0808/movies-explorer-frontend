import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="aboutprojec">
      <h2 className="about-project__title"> О проекте</h2>
      <div className="about-project__text">
        <div className="about-project__container">
          <h4 className="about-project__brief">Дипломный проект включал 5 этапов</h4>
          <p className="about-project__paragraph">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div className="about-project__container">
          <h4 className="about-project__brief">На выполнение диплома ушло 5 недель</h4>
          <p className="about-project__paragraph">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__schedule">
        <div className="schedule__text">1 неделя</div>
        <div className="schedule__text schedule__text-frontend">4 недели</div>
        <p className="schedule__lable">Back-end</p>
        <p className="schedule__lable">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
