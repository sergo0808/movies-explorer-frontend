import "./MoviesCard.css";
import { useState } from "react";

function MoviesCard() {
  const [isSaved, setIsSaved] = useState(false);
  const cardSavedButtonClassName = `movies-card__saved ${isSaved && "movies-card__saved_active "}`;

  function handleSaveClick() {
    if (!isSaved) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }

  return (
    <article className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <img
        className="movies-card__image"
        alt="картинка фильма"
        src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
      />
      <button className={cardSavedButtonClassName} onClick={handleSaveClick}></button>
    </article>
  );
}

export default MoviesCard;
