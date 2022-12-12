import { useEffect } from "react";
import "./SearchForm.css";
import lupa from "./../../image/lupa.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm({ onSearch, textSearch, handleTextSearch, isChecked, onChecked }) {
  function handleChange(evt) {
    handleTextSearch(evt.target.value);
  }

  function handleChecked(evt) {
    onChecked(evt.target.checked);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch({ textSearch, isChecked });
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
            value={textSearch || ""}
            onChange={handleChange}></input>
          <button type="submit" className="search-form__find"></button>
        </div>
        <FilterCheckbox onChecked={handleChecked} isChecked={isChecked} />
      </form>
      <div className="serch__border"></div>
    </section>
  );
}

export default SearchForm;
