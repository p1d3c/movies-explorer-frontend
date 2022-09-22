import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <section className='form'>
      <SearchForm />
      <FilterCheckbox />
    </section>
  );
}

export default Movies;
