
import './SearchForm.css'
import lupa from './../../image/lupa.svg'
import border from './../../image/border.svg'

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <form className='search-form__contant'>
          <img className='search-form__lupa' src={lupa} alt='картинка лупа' />
          <input className='search-form__input' type='text' placeholder='Фильм'></input>
          <button className='search-form__find'></button>
          <img className='search-form__border' src={border} alt='картинка бордер' />
          <input type="checkbox" className="checkbox" id="box" />
          <label htmlFor="box" className='checkbox__lable'></label>
          <label htmlFor="box" className='checkbox__lable-text'>Короткометражки </label>
        </form>
      </div>



    </section>
  )
}

export default SearchForm;