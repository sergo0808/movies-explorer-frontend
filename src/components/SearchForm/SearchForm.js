import { useState } from "react";
import "./SearchForm.css";
import lupa from "./../../image/lupa.svg";
import border from "./../../image/border.svg";

function SearchForm({ onAddMovies }) {
  const [movies, setMovies] = useState("");

  function handleChangeMovies(event) {
    setMovies(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddMovies({ movies });
  }

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="form__group-find">
          <img className="search-form__lupa" src={lupa} alt="картинка лупа" />
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            onChange={handleChangeMovies}
            required></input>
          <button type="submit" className="search-form__find"></button>
        </div>
        <div className="form__group-checkbox">
          <img className="search-form__border" src={border} alt="картинка бордер" />
          <input type="checkbox" className="checkbox" id="box" />
          <label htmlFor="box" className="checkbox__lable"></label>
          <label htmlFor="box" className="checkbox__lable-text">
            Короткометражки
          </label>
        </div>
      </form>
      <div className="serch__border"></div>
    </section>
  );
}

export default SearchForm;
