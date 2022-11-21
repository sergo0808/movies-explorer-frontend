import React from "react";
import { Link, Route } from "react-router-dom";
import "./Navigation.css";

function Navigation({ openNavBar }) {
  return (
    <div className="navigation">
      <Route exact path="/">
        <nav className="navigation__info">
          <Link className="navigation__link-signup" to="signup">
            Регистрация
          </Link>
          <Link className="navigation__link-signin" to="signin">
            Войти
          </Link>
        </nav>
      </Route>
      <Route path="/movies">
        <nav className="navigation__info-auth">
          <Link className="navigation__link-movies" to="/movies">
            Фильмы
          </Link>
          <Link className="navigation__link-movies" to="/saved-movies">
            Сохранённые фильмы
          </Link>
          <Link className="navigation__link-profile" to="/profile">
            Аккаунт
          </Link>
        </nav>
      </Route>
      <Route path="/saved-movies">
        <nav className="navigation__info">
          <Link className="navigation__link-movies" to="/movies">
            Фильмы
          </Link>
          <Link className="navigation__link-movies" to="/saved-movies">
            Сохранённые фильмы
          </Link>
          <Link className="navigation__link-profile" to="/profile">
            Аккаунт
          </Link>
        </nav>
      </Route>
      <Route path="/signup"></Route>
      <Route path="/signup"></Route>
      <Route path="/profile">
        <nav className="navigation__info">
          <Link className="navigation__link-movies" to="/movies">
            Фильмы
          </Link>
          <Link className="navigation__link-movies" to="/saved-movies">
            Сохранённые фильмы
          </Link>
          <Link className="navigation__link-profile" to="/profile">
            Аккаунт
          </Link>
        </nav>
      </Route>
      <button className="hamburger" onClick={openNavBar}></button>
    </div>
  );
}

export default Navigation;
