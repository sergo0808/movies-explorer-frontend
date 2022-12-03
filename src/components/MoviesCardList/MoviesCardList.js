import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cards }) {
  return (
    <section className="movies__card-list">
      <div className="movies__card-list__container">
        {cards.map((card) => (
          <MoviesCard key={card.id} card={card}></MoviesCard>
        ))}
      </div>
      <button className="movies__btn-add">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
