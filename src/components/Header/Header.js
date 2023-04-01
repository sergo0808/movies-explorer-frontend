import React from "react";
import headerLogo from "../../image/logo.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.scss";

function Header({ openNavBar, isLoggedIn }) {
  return (
    <header className="header">
      <a href="/">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
      </a>
      <Navigation openNavBar={openNavBar} isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
