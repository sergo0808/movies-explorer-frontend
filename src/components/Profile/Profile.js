/* eslint-disable react-hooks/exhaustive-deps */
import "./Profile.css";
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useForm from "../Form/useForm";

function Profile({ logout, resStatus, setResStatus, onEditProfile }) {
  const history = useHistory();
  const currentUser = useContext(CurrentUserContext);
  const [onEdit, setOnEdit] = useState(false);
  const { values, setValues, isValid, isValidForm, handleChange } = useForm();

  const handleEditAccount = () => {
    setOnEdit(!onEdit);
  };

  const handleSubmit = () => {
    setOnEdit(false);
    onEditProfile(values);
  };

  const handleExitAccount = () => {
    logout();
    history.push("/");
  };

  useEffect(() => {
    setValues(currentUser);
  }, []);

  useEffect(() => {
    setResStatus("");
  }, [onEdit]);

  const validTextName = !isValid.name && "Введен недопустимый символ для имени";
  const validTextEmail = !isValid.email && "Здесь должен быть E-mail";

  const bntDisabled =
    (currentUser.name === values.name && currentUser.email === values.email) || !isValidForm;

  const classButton = `profile__button-save ${bntDisabled && "profile__button-save_inactive"}`;
  const classTextResponse = `profile__text ${resStatus === 200 && "profile__text-response_green"}`;

  const successfulText = resStatus === 200 && "Данные пользователя обновлены";
  const errorTextConflict = resStatus === 409 && "Пользователь с таким email уже существует";
  const errorTextBadRequest =
    resStatus === 400 && "При редактировании пользователя произошла ошибка";
  const errorTextInternalServer = resStatus === 500 && "На сервере произошла ошибка";
  const textResponse =
    errorTextConflict || errorTextInternalServer || successfulText || errorTextBadRequest;

  return (
    <section className="profile">
      <h2 className="profile__title">{`Привет, ${currentUser.name}!`}</h2>
      {onEdit ? (
        <>
          <form className="profile__form" autoComplete="off">
            <span id="name-error" className="profile__text-error profile__text-error_top">
              {validTextName}
            </span>
            <div className="profile__input-cotainer">
              <label htmlFor="name" className="profile__input-label">
                Имя
              </label>
              <input
                className="profile__input"
                type="text"
                name="name"
                id="name"
                value={values.name || currentUser.name || ""}
                required
                onChange={handleChange}
                placeholder="Имя"
              />
            </div>
            <div className="profile__input-cotainer">
              <label htmlFor="email" className="profile__input-label">
                E-mail
              </label>
              <input
                className="profile__input"
                type="email"
                name="email"
                id="email"
                value={values.email || currentUser.email || ""}
                required
                onChange={handleChange}
                placeholder="E-mail"
              />
            </div>
            <span id="email-error" className="profile__text-error profile__text-error_bottom">
              {validTextEmail}
            </span>
            <button
              type="submit"
              name="save"
              onClick={handleSubmit}
              className={classButton}
              disabled={bntDisabled}>
              Сохранить
            </button>
          </form>
        </>
      ) : (
        <>
          <form className="profile__form">
            <span id="name-error" className="profile__text-error profile__text-error_top"></span>
            <div className="profile__input-cotainer">
              <label htmlFor="name" className="profile__input-label">
                Имя
              </label>
              <input
                className="profile__input"
                type="text"
                name="name"
                id="name"
                value={values.name || currentUser.name || ""}
                placeholder="Имя"
                disabled
              />
            </div>
            <div className="profile__input-cotainer">
              <label htmlFor="email" className="profile__input-label">
                E-mail
              </label>
              <input
                className="profile__input"
                type="email"
                name="email"
                id="email"
                value={values.email || currentUser.email || ""}
                placeholder="E-mail"
                disabled
              />
            </div>
            <span
              id="email-error"
              className="profile__text-error profile__text-error_bottom"></span>
            <span className={classTextResponse}>{textResponse}</span>
            <button
              type="button"
              name="edit"
              onClick={handleEditAccount}
              className="profile__button-edit">
              Редактировать
            </button>
            <button
              type="button"
              name="exit"
              onClick={handleExitAccount}
              className="profile__button-exit">
              Выйти из аккаунта
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default Profile;
