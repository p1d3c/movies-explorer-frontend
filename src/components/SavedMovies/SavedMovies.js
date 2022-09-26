import {useLocation, useParams} from 'react-router-dom';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <>
      <section className='saved'>
        <div className='form'>
          <div className='form__border'>
            <SearchForm />
            <FilterCheckbox />
          </div>
        </div>
      </section>
      <section className='list'>
        <MoviesCardList />
      </section>
    </>
  );
}

export default SavedMovies;
