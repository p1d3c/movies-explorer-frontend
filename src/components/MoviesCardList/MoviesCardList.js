import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList() {
  return (
    <>
      <div className='card-list'>
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
      </div>
      <button type='button' className='card-list__more'>
        Ещё
      </button>
    </>
  );
}

export default MoviesCardList;
