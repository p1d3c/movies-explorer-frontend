import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default SavedMovies;
