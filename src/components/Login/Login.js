import { Link } from "react-router-dom";
import "./Login.css";
import headerLogo from "./../../image/logo.svg";

function Login() {
  return (
    <div className="login__container">
      <form className="login__form">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
        <h2 className="login__title">Рады видеть!</h2>
        <label className="form__input-label">Email</label>
        <input
          type="Email"
          className="login__input login__input_green"
          id="email-profile"
          name="email"
          minLength="2"
          maxLength="40"
          // value={email}
          // onChange={({ target }) => setEmail(target.value)}
          autoComplete="on"
          required
        />
        <label className="form__input-label">Пароль</label>

        <input
          type="password"
          className="login__input login__input_password_active"
          id="password-profile"
          name="password"
          autoComplete="on"
          minLength="2"
          maxLength="200"
          required
        // value={password}
        // onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit" className="login__submit login__submit_margin-login">
          Зарегистрироваться
        </button>
        <p className="login__link-text">
          Уже зарегистрированы?
          <Link to="signin" className="login__link  ">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
