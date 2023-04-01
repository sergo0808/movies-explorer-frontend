import { useLocation } from "react-router-dom";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.scss";
import NotFound from "../NotFound/NotFound";
import { useEffect } from "react";

function MoviesCardList({
  cards,
  savedMovies,
  setResStatus,
  resStatus,
  isVisibleButton,
  onRenderCard,
  textSearch,
  onSave,
}) {
  const textLocalStorage = localStorage.getItem("textSearch");
  const { pathname } = useLocation();
  const textSearchFronPath = pathname === "/movies" ? textLocalStorage : textSearch;
  const errorText =
    resStatus === 500 &&
    "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";

  const enterWordText =
    !textSearchFronPath &&
    (pathname === "/movies" ? "Введите ключевое слово" : "Сохраненных фильмов нет");

  const notFoundText = cards.length === 0 && "Ничего не найдено";
  const text = errorText || enterWordText || notFoundText;
  const isLiked = (card) => {
    return savedMovies.some((i) => i.movieId === card.id);
  };

  useEffect(() => {
    return () => {
      setResStatus();
    };
  }, []);

  return (
    <>
      {cards.length !== 0 && (textLocalStorage || pathname === "/saved-movies") ? (
        <>
          <section className="movies__card-list">
            <div className="movies__card-list__container">
              {cards.map((card, i) => (
                <MoviesCard
                  key={i}
                  img={
                    pathname === "/movies"
                      ? `https://api.nomoreparties.co/${card.image.url}`
                      : card.image
                  }
                  name={card.nameRU}
                  duration={`${Math.floor(card.duration / 60)}ч ${card.duration % 60}м`}
                  onSave={onSave}
                  card={card}
                  like={isLiked(card)}
                  trailerLink={card.trailerLink}
                />
              ))}
            </div>

            {isVisibleButton && (
              <button className="movies__btn-add" type="button" onClick={onRenderCard}>
                Ещё
              </button>
            )}
          </section>
        </>
      ) : (
        <NotFound text={text} />
      )}
    </>
  );
}

export default MoviesCardList;
