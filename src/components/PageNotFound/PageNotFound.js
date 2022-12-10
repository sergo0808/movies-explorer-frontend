import React from "react";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <section className="pagenotfound">
      <h1 className="pagenotfound__title">404</h1>
      <p className="pagenotfound__text">Страница не найдена</p>
      <a className="pagenotfound__link" href="/">
        Назад
      </a>
    </section>
  );
}

export default PageNotFound;
