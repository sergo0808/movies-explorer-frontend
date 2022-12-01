import "./SearchForm.css";
import lupa from "./../../image/lupa.svg";
import border from "./../../image/border.svg";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="form__group-find">
          <img className="search-form__lupa" src={lupa} alt="картинка лупа" />
          <input className="search-form__input" type="text" placeholder="Фильм" required></input>
          <button className="search-form__find"></button>
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
