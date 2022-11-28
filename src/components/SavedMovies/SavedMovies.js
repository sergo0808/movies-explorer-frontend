import React from "react";
// import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

import "./SavedMovies.css";

function SavedMovies() {
  return (
    <main>
      <SearchForm />
      <MoviesCardList />
      {/* <MoviesCard /> */}
    </main>
  );
}

export default SavedMovies;
