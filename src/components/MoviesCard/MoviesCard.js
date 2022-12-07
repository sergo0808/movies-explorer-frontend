import "./MoviesCard.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function MoviesCard({ img, name, duration, like, trailerLink, onLike, card }) {
  const location = useLocation();
  const [isSaved, setIsLiked] = useState(false);
  const cardSavedButtonClassName = `movies-card__saved ${isSaved && "movies-card__saved_active "}`;

  function handleCardLike() {
    if (!isSaved) {
      setIsLiked(true);
      onLike(card);
    } else {
      setIsLiked(false);
      onLike(card);
    }
  }

  return (
    <article className="movies-card">
      <h3 className="movies-card__name">{name}</h3>
      <p className="movies-card__duration">{duration}</p>
      <button
        className={
          location.pathname === "/movies" ? cardSavedButtonClassName : "movies-card__delete"
        }
        onClick={handleCardLike}></button>
      <a href={trailerLink} className="card__link-trailer" target="_blank" rel="noreferrer">
        <img className="movies-card__image" alt="картинка фильма" src={img} />
      </a>
    </article>
  );
}

export default MoviesCard;
