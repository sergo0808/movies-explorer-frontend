import NavTab from "../NavTab/NavTab";
import "./Promo.scss";

function Promo() {
  return (
    <div className="promo__container">
      <section className="promo">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <NavTab />
      </section>
    </div>
  );
}

export default Promo;
