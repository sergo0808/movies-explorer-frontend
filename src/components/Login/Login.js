import { Link } from "react-router-dom";
import "./Login.css";
import formLogo from "./../../image/logo.svg";

function Login() {
  return (
    <section className="login">
      <form className="login__form" >
        <img className="form__logo" src={formLogo} alt="Логотип" />
        <h2 className="form__title">Рады видеть!</h2>
        <label className="form__input-label">E-mail</label>
        <input
          type="Email"
          className="form__input"
          id="email-profile"
          name="email"
          minLength="2"
          maxLength="40"
          autoComplete="on"
          required
        />
        <span class="form__error" id="email-error"></span>

        <label className="form__input-label">Пароль</label>
        <input
          type="password"
          className="form__input form__input_password_active"
          id="password-profile"
          name="password"
          autoComplete="on"
          minLength="2"
          maxLength="200"
          required
        />
        <span class="form__error" id="password-error"></span>
        <button type="submit" className="form__submit form__submit_margin-login">
          Войти
        </button>
        <p className="form__link-text">
          Ещё не зарегистрированы?
          <Link to="signin" className="form__link  ">
            Регистрация
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
