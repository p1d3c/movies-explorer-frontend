import cardImage from '../../images/kek.jpeg';

function MoviesCard() {
  return (
    <div className='card'>
      <img className='card__img' src={cardImage} />
      <div className='card__wrap'>
        <h2 className='card__title'>33 words about design</h2>
        <button className='card__like' type='button' />
      </div>
      <h3 className='card__duration'>1ч 42м</h3>
    </div>
  );
}

export default MoviesCard;
