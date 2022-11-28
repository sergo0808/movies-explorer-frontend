import "./MoviesCard.css";
import { useState } from "react";

function MoviesCard() {
  const [isLiked, setIsLiked] = useState(false);
  const cardLikeButtonClassName = `movies-card__saved ${isLiked && "movies-card__saved_active "}`;

  function handleLikeClick() {
    if (!isLiked) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
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
      <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
    </article>
  );
}

export default MoviesCard;
