import React from "react";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <section class="pagenotfound">
      <h1 class="pagenotfound__title">404</h1>
      <p class="pagenotfound__text">Страница не найдена</p>
      <a class="pagenotfound__link" href="/">Назад</a>
    </section>
  );
}

export default PageNotFound;
