import {useState} from 'react';
import {urlRegExp} from '../../utils/utils';

function MoviesCard(props) {
  const {movie, isSaved, handleLikeMovie, handleDeleteMovie} = props;

  const [isLikeActive, setIsLikeActive] = useState(false);

  const duration = `${parseInt(movie.duration / 60)} ч. ${movie.duration % 60} м.`;
  const isLiked = movie.isLiked;

  const onLikeClick = () => {
    if (isLiked || isLikeActive) {
      handleDeleteMovie(movie);
      return;
    }

    setIsLikeActive(true);

    const movieData = Object.assign({}, movie);
    movieData.trailerLink = movieData.trailerLink.match(urlRegExp)
      ? movieData.trailerLink
      : 'https://www.youtube.com/watch?v=MbnZtG-rZdk';
    movieData.movieId = movie.id;
    movieData.image = `https://api.nomoreparties.co${movie.image.url}`;
    movieData.thumbnail = `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
    delete movieData.id;
    delete movieData.created_at;
    delete movieData.updated_at;

    handleLikeMovie(movieData);
  };

  const onDeleteClick = () => {
    handleDeleteMovie(movie);
  };

  return (
    <div className='card'>
      <a className='card__link' title='Смотреть трейлер' href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img
          className='card__img'
          src={isSaved ? movie.image : `https://api.nomoreparties.co${movie.image.url}`}
          alt={movie.nameRU}
        />
      </a>
      <div className='card__wrap'>
        <h2 className='card__title'>{movie.nameRU}</h2>
        {isSaved ? (
          <button className='card__delete' type='button' onClick={onDeleteClick} />
        ) : (
          <button
            className={`card__like ${isLiked || isLikeActive ? 'card__like_active' : ''}`}
            type='button'
            onClick={onLikeClick}
          />
        )}
      </div>
      <h3 className='card__duration'>{duration}</h3>
    </div>
  );
}

export default MoviesCard;
