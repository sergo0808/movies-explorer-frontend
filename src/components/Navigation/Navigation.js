import React from "react";
import { NavLink, Route } from "react-router-dom";
import "./Navigation.css";

function Navigation({ openNavBar, isLoggedIn }) {
  return (
    <div className="navigation">
      <Route exact path="/">
        {isLoggedIn ? (
          <>
            <nav className="navigation__info-auth">
              <NavLink
                className="navigation__link-movies"
                to="/movies"
                activeClassName="navigation__ink_active">
                Фильмы
              </NavLink>
              <NavLink
                className="navigation__link-movies"
                to="/saved-movies"
                activeClassName="navigation__ink_active">
                Сохранённые фильмы
              </NavLink>
              <NavLink
                className="navigation__link-profile"
                to="/profile"
                activeClassName="navigation__ink_active">
                Аккаунт
              </NavLink>
            </nav>
            <button className="hamburger" onClick={openNavBar}></button>
          </>
        ) : (
          <nav className="navigation__info">
            <NavLink
              className="navigation__link-signup"
              to="signup"
              activeClassName="navigation__ink_active">
              Регистрация
            </NavLink>
            <NavLink
              className="navigation__link-signin"
              to="signin"
              activeClassName="navigation__ink_active">
              Войти
            </NavLink>
          </nav>
        )}
      </Route>
      <Route path="/movies">
        <nav className="navigation__info-auth">
          <NavLink
            className="navigation__link-movies"
            to="/movies"
            activeClassName="navigation__ink_active">
            Фильмы
          </NavLink>
          <NavLink
            className="navigation__link-movies"
            to="/saved-movies"
            activeClassName="navigation__ink_active">
            Сохранённые фильмы
          </NavLink>
          <NavLink
            className="navigation__link-profile"
            to="/profile"
            activeClassName="navigation__ink_active">
            Аккаунт
          </NavLink>
        </nav>
        <button className="hamburger" onClick={openNavBar}></button>
      </Route>
      <Route path="/saved-movies">
        <nav className="navigation__info-auth">
          <NavLink
            className="navigation__link-movies"
            to="/movies"
            activeClassName="navigation__ink_active">
            Фильмы
          </NavLink>
          <NavLink
            className="navigation__link-movies"
            to="/saved-movies"
            activeClassName="navigation__ink_active">
            Сохранённые фильмы
          </NavLink>
          <NavLink
            className="navigation__link-profile"
            to="/profile"
            activeClassName="navigation__ink_active">
            Аккаунт
          </NavLink>
        </nav>
        <button className="hamburger" onClick={openNavBar}></button>
      </Route>
      <Route path="/signup"></Route>
      <Route path="/signup"></Route>
      <Route path="/profile">
        <nav className="navigation__info-auth">
          <NavLink
            className="navigation__link-movies"
            to="/movies"
            activeClassName="navigation__ink_active">
            Фильмы
          </NavLink>
          <NavLink
            className="navigation__link-movies"
            to="/saved-movies"
            activeClassName="navigation__ink_active">
            Сохранённые фильмы
          </NavLink>
          <NavLink
            className="navigation__link-profile"
            to="/profile"
            activeClassName="navigation__ink_active">
            Аккаунт
          </NavLink>
        </nav>
        <button className="hamburger" onClick={openNavBar}></button>
      </Route>
    </div>
  );
}

export default Navigation;
