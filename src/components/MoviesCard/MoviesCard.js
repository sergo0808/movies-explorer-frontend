import "./MoviesCard.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard() {
  const location = useLocation();
  const [isSaved, setIsLiked] = useState(false);
  const cardSavedButtonClassName = `movies-card__saved ${isSaved && "movies-card__saved_active "}`;

  function handleLikeClick() {
    if (!isSaved) {
      setIsLiked(true);
    } else {
      setIsLiked(false);
    }
  }

  return (
    <article className="movies-card">
      <h3 className="movies-card__name">33 слова о дизайне</h3>
      <p className="movies-card__duration">1ч 47м</p>
      <button
        className={
          location.pathname === "/movies" ? cardSavedButtonClassName : "movies-card__delete"
        }
        onClick={handleLikeClick}></button>
      <img
        className="movies-card__image"
        alt="картинка фильма"
        src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"
      />
    </article>
  );
}

export default MoviesCard;
