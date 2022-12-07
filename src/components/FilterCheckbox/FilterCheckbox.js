import "./FilterCheckbox.css";
import border from "./../../image/border.svg";

function FilterCheckbox({ onChecked, isChecked }) {
  return (
    <div className="form__group-checkbox">
      <img className="search-form__border" src={border} alt="картинка бордер" />
      <input
        type="checkbox"
        className="checkbox"
        id="box"
        onChange={onChecked}
        checked={isChecked}
      />
      <label htmlFor="box" className="checkbox__lable"></label>
      <label htmlFor="box" className="checkbox__lable-text">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
