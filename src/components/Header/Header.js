import React from "react";
import { Link, Route } from "react-router-dom";
import headerLogo from "../../image/logo.svg";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <div className="header__info">
        <Route exact path="/">
          <Link className="header__link-signup" to="signup">
            Регистрация
          </Link>
          <Link className="header__link-signin" to="signin">
            Войти
          </Link>
        </Route>
        <Route path="/signup"></Route>
        <Route path="/signin"></Route>
      </div>
    </div>
  );
}

export default Header;
