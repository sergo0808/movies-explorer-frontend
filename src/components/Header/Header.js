import React from "react";
import { Link, Route } from "react-router-dom";
import headerLogo from "../../image/logo.svg";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <Route exact path="/">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
        <div className="header__info">
          <Link className="header__link-signup" to="signup">
            Регистрация
          </Link>
          <Link className="header__link-signin" to="signin">
            Войти
          </Link>
        </div>
      </Route>
      <Route path="/movies">
        <div className="header__info">
          <img className="header__logo" src={headerLogo} alt="Логотип" />
          <Link className="header__link-movies" to="/movies">
            Фильмы
          </Link>
          <Link className="header__link-movies" to="/saved-movies">
            Сохранённые фильмы
          </Link>
        </div>
        <Link className="header__link-profile" to="/profile">
          Аккаунт
        </Link>
      </Route>
      <Route path="/saved-movies">
        <div className="header__info">
          <img className="header__logo" src={headerLogo} alt="Логотип" />
          <Link className="header__link-movies" to="/movies">
            Фильмы
          </Link>
          <Link className="header__link-movies" to="/saved-movies">
            Сохранённые фильмы
          </Link>
        </div>
        <Link className="header__link-profile" to="/profile">
          Аккаунт
        </Link>
      </Route>
      <Route path="/signup"></Route>
      <Route path="/signin"></Route>
    </div>
  );
}

export default Header;
