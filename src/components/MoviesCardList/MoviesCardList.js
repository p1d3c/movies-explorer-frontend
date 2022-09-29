import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <>
      <div className='card-list'>
        {/* <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard />
        <MoviesCard /> */}
        <Preloader />
      </div>
      <button type='button' className='card-list__more'>
        Ещё
      </button>
    </>
  );
}

export default MoviesCardList;
