import "./Form.scss";
import logo from "../../image/logo.svg";
import { Link } from "react-router-dom";

function Form({
  title,
  children,
  textButton,
  text,
  textLink,
  link,
  onSubmit,
  isValidForm,
  textError,
  isLoading,
  errorResponse,
  resStatus,
}) {
  console.log(resStatus);
  const isValid = isLoading && isValidForm;

  const classButton = isValid ? "form__button" : "form__button form__button_inactive";

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <Link to="/">
          <img src={logo} alt="logo" className="form__logo" />
        </Link>
        <h2 className="form__title">{title}</h2>
        <div className="form__container-input">{children}</div>
        <span className="form__error-response">{resStatus}</span>
        <button type="submit" name="submit" className={classButton} disabled={!isValid}>
          {textButton}
        </button>
        <p className="form__text">
          {text}
          <Link className="form__link" to={link}>
            {textLink}
          </Link>
        </p>
      </form>
    </>
  );
}

export default Form;
