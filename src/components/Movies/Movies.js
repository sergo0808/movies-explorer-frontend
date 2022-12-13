import { useEffect, useState } from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies({
  onSearch,
  isLoading,
  cards,
  getSavedMovies,
  savedMovies,
  renderedFoundCards,
  amountRenderedCards,
  setResStatus,
  resStatus,
  isVisibleButton,
  onSave,
  setIsLoading,
  onRenderCard,
  isLoggedIn,
}) {
  const foundCardsLocalStorage = JSON.parse(localStorage.getItem("foundCards"));
  const textLocalStorage = localStorage.getItem("textSearch");

  const isCheckedLocalStorage = () => {
    if (localStorage.getItem("isChecked")) {
      return JSON.parse(localStorage.getItem("isChecked"));
    }
    return false;
  };

  const [textSearch, setTextSearch] = useState(textLocalStorage || "");
  const [isChecked, setIsChecked] = useState(isCheckedLocalStorage());

  const handleTextSearch = (text) => {
    setTextSearch(text);
  };

  const handleChecked = (isChecked) => {
    setIsChecked(isChecked);
  };

  useEffect(() => {
    getSavedMovies();
  }, [isLoggedIn]);

  useEffect(() => {
    if (foundCardsLocalStorage) {
      renderedFoundCards(foundCardsLocalStorage);
    }
    setIsLoading();
  }, [amountRenderedCards]);

  return (
    <>
      <SearchForm
        onSearch={onSearch}
        textSearch={textSearch}
        handleTextSearch={handleTextSearch}
        isChecked={isChecked}
        onChecked={handleChecked}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          cards={cards}
          image={cards.image}
          savedMovies={savedMovies}
          setResStatus={setResStatus}
          resStatus={resStatus}
          isVisibleButton={isVisibleButton}
          textSearch={textSearch}
          onSave={onSave}
          onRenderCard={onRenderCard}
        />
      )}
    </>
  );
}

export default Movies;
