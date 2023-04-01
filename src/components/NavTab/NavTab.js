import { NavLink } from "react-router-dom";
import "./NavTab.scss";

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__links">
        <li>
          <a className="navtab__link" href="#aboutproject">
            О проекте
          </a>
        </li>
        <li>
          <a className="navtab__link" href="#about">
            Технологии
          </a>
        </li>
        <li>
          <a className="navtab__link" href="#aboutme">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
