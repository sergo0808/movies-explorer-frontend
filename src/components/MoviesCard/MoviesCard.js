import "./MoviesCard.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ card }) {
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
      <h3 className="movies-card__name">{card.nameRU}</h3>
      <p className="movies-card__duration">{card.duration}</p>
      <button
        className={
          location.pathname === "/movies" ? cardSavedButtonClassName : "movies-card__delete"
        }
        onClick={handleLikeClick}></button>
      <img
        className="movies-card__image"
        alt="картинка фильма"
        src={`https://api.nomoreparties.co/` + card.image.url}
      />
    </article>
  );
}

export default MoviesCard;
