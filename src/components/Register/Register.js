import { Link } from "react-router-dom";
import "./Register.css";
import headerLogo from "./../../image/logo.svg";

function Register() {
  return (
    <div className="login__container">
      <form className="login__form">
        <img className="header__logo" src={headerLogo} alt="Логотип" />
        <h2 className="login__title">Добро пожаловать!</h2>
        <label className="form__input-label">Имя</label>
        <input
          type="text"
          className="login__input popup__input_email_active"
          id="name-profile"
          name="name"
          minLength="2"
          maxLength="40"
          // value={email}
          // onChange={({ target }) => setEmail(target.value)}
          autoComplete="on"
          required
        />
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
        <button type="submit" className="login__submit">
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

export default Register;
