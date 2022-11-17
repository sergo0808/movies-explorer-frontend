import { Link } from "react-router-dom";
import "./Register.css";
import headerLogo from "./../../image/logo.svg";

function Register() {
  return (
    <div className="register">
      <form className="register__form">
        <img className="form__logo" src={headerLogo} alt="Логотип" />
        <h2 className="form__title">Добро пожаловать!</h2>
        <label className="form__input-label">Имя</label>
        <input
          type="text"
          className="form__input"
          id="name-profile"
          name="name"
          minLength="2"
          maxLength="40"
          autoComplete="on"
          required
        />
        <span class="form__error-signup" id="name-error"></span>

        <label className="form__input-label">Email</label>
        <input
          type="Email"
          className="form__input form__input_green"
          id="email-profile"
          name="email"
          minLength="2"
          maxLength="40"
          autoComplete="on"
          required
        />
        <span class="form__error-signup" id="email-error"></span>

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
        <span class="form__error-signup" id="password-error"></span>
        <button type="submit" className="form__submit">
          Зарегистрироваться
        </button>
        <p className="form__link-signup-text">
          Уже зарегистрированы?
          <Link to="signin" className="form__link  ">
            Войти
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
