import React from "react";
import { useHistory } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <section className="pagenotfound">
      <h1 className="pagenotfound__title">404</h1>
      <p className="pagenotfound__text">Страница не найдена</p>
      <button className="pagenotfound__link" onClick={handleClick}>
        Назад
      </button>
    </section>
  );
}

export default PageNotFound;
