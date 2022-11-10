import React from "react";
import './Techs.css'


function Techs() {
  return (
    <section className="about-techs">
      <h2 className="about-project__title">Технологии</h2>
      <div className="about-techs__container">
        <h3 className="about-techs__subtitle">7 технологий</h3>
        <p className="about-techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="about-techs__list-technology">
          <li className="list-technology__element">HTML</li>
          <li className="list-technology__element">CSS</li>
          <li className="list-technology__element">JS</li>
          <li className="list-technology__element">React</li>
          <li className="list-technology__element">Git</li>
          <li className="list-technology__element">Express.js</li>
          <li className="list-technology__element">mongoDB</li>
        </ul>
      </div>

    </section>
  );
}

export default Techs;