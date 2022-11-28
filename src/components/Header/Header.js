import React from "react";
import headerLogo from "../../image/logo.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ openNavBar }) {
  return (
    <div className="header">
      <a href="/">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
      </a>
      <Navigation openNavBar={openNavBar} />
    </div>
  );
}

export default Header;
