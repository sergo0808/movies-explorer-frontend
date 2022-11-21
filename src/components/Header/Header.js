import React from "react";
import headerLogo from "../../image/logo.svg";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ openNavBar }) {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      <Navigation openNavBar={openNavBar} />
    </div>
  );
}

export default Header;
