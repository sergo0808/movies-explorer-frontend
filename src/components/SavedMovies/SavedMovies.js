import { useEffect, useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function SavedMovies({
  onSearch,
  isLoading,
  cards,
  savedMovies,
  getSavedMovies,
  setResStatus,
  onDelete,
  resStatus,
  onRenderCard,
}) {
  const [textSearch, setTextSearch] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleTextSearch = (text) => {
    setTextSearch(text);
  };

  const handleChecked = (isChecked) => {
    setIsChecked(isChecked);
  };

  useEffect(() => {
    getSavedMovies();
  }, []);

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
          savedMovies={savedMovies}
          setResStatus={setResStatus}
          resStatus={resStatus}
          isVisibleButton={false}
          textSearch={textSearch}
          onSave={onDelete}
          onRenderCard={onRenderCard}
        />
      )}
    </>
  );
}

export default SavedMovies;
