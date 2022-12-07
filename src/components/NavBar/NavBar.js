import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ isOpen, onClose }) {
  return (
    <nav className={`nav-bar ${isOpen && "nav-bar_opened"}`}>
      <div className="nav-bar__container">
        <button className="nav-bar__btn-close" onClick={onClose}></button>
        <ul className="nav-bar__links">
          <li className="links__container">
            <NavLink
              className="container__link"
              exact
              to="/"
              activeClassName="container__link_active"
              onClick={onClose}>
              Главная
            </NavLink>
          </li>
          <li className="links__container">
            <NavLink
              className="container__link"
              to="/movies"
              onClick={onClose}
              activeClassName="container__link_active">
              Фильмы
            </NavLink>
          </li>
          <li className="links__container">
            <NavLink
              className="container__link"
              to="/saved-movies"
              onClick={onClose}
              activeClassName="container__link_active">
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <NavLink className="container__link-profile" to="/profile" onClick={onClose}>
          Аккаунт
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
