import {useEffect, useState} from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import './MoviesCardList.css';

function MoviesCardList(props) {
  const {movies = [], isPreloaderShown, isSaved, handleLikeMovie, handleDeleteMovie} = props;

  const [cardsCount, setCardsCount] = useState(12);
  const [cardsLoadCount, setCardsLoadCount] = useState(4);

  const isButtonHidden = movies.length === 0 || cardsCount >= movies.length;

  const handleLoadCards = (cardsLoadCount) => {
    setCardsCount((prev) => prev + cardsLoadCount);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsLoadCount(4);
        setCardsCount(12);
      }
      if (window.innerWidth <= 768 && window.innerWidth >= 450) {
        setCardsLoadCount(2);
        setCardsCount(8);
      }
      if (window.innerWidth <= 450) {
        setCardsLoadCount(2);
        setCardsCount(5);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='card-list'>
        {isPreloaderShown ? (
          <Preloader />
        ) : (
          movies.map((item, index) => {
            if (index < cardsCount) {
              return (
                <MoviesCard
                  movie={item}
                  key={item.id || item._id || item.movieId}
                  isSaved={isSaved}
                  handleLikeMovie={handleLikeMovie}
                  handleDeleteMovie={handleDeleteMovie}
                />
              );
            }
          })
        )}
      </div>
      <button
        type='button'
        className='card-list__more'
        onClick={() => handleLoadCards(cardsLoadCount)}
        hidden={isButtonHidden}
      >
        Ещё
      </button>
    </>
  );
}

export default MoviesCardList;
