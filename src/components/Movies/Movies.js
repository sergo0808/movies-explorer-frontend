import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./Movies.css";

function Movies({ cards, onFindCard, onAddMovies }) {
  return (
    <main>
      <SearchForm onFindCard={onFindCard} onAddMovies={onAddMovies} />
      <MoviesCardList cards={cards} />
    </main>
  );
}

export default Movies;
