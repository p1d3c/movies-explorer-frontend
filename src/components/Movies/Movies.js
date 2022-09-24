import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <>
      <section className='form'>
        <div className='form__border'>
          <SearchForm />
          <FilterCheckbox />
        </div>
      </section>
      <section className='list'>
        <MoviesCardList />
      </section>
    </>
  );
}

export default Movies;
