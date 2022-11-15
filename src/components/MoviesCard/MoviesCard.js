import './MoviesCard.css'


function MoviesCard() {


  return (
    <article className='movies-card'>
      <h3 className='movies-card__name'>33 слова о дизайне</h3>
      <p className='movies-card__duration'>1ч 47м</p>
      <img className='movies-card__image' alt='картинка фильма' src='https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg' />
      <button className='movies-card__saved'></button>

    </article>
  )
}

export default MoviesCard;