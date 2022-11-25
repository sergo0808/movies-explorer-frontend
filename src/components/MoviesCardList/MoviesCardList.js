import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <section className="movies__card-list">
      <div className="movies__card-list__container">
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <button className="movies__btn-close">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
