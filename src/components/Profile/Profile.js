import React from "react";
import "./Profile.css";

function Profile(props) {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Виталий!</h2>
      <form className="profile__form">
        <span id="name-error" className="profile__text-error profile__text-error_top">
        </span>
        <div className="profile__input-cotainer">
          <label htmlFor="name" className="profile__input-label">Имя</label>
          <input className="profile__input" type="text" name="name" id="name" placeholder="Имя" />
        </div>
        <div className="profile__input-cotainer">
          <label htmlFor="email" className="profile__input-label">E-mail</label>
          <input className="profile__input " type="email" name="email" id="email" placeholder="E-mail"></input>
        </div>
        <span id="email-error" className="profile__text-error profile__text-error_bottom"></span>
        <span className="profile__text-response false"></span>
        <button type="button" name="edit" className="profile__button-edit">Редактировать</button>
        <button type="button" name="exit" className="profile__button-exit">Выйти из аккаунта</button>
      </form>
    </section>
  );
}

export default Profile;
