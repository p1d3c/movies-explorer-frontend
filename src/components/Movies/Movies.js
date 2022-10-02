import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies() {
  return (
    <>
      <Header />
      <main>
        <section className='form'>
          <div className='form__border'>
            <SearchForm />
            <FilterCheckbox />
          </div>
        </section>
        <section className='list'>
          <MoviesCardList />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
