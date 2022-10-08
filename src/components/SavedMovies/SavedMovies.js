import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies(props) {
  const {isPreloaderShown, setIsPreloaderShown, movies, handleDeleteMovie} = props;

  return (
    <>
      <Header />
      <main className='main'>
        <section className='saved'>
          <div className='form'>
            <div className='form__border'>
              <SearchForm setIsPreloaderShown={setIsPreloaderShown} />
              <FilterCheckbox />
            </div>
          </div>
        </section>
        <section className='list'>
          <MoviesCardList
            movies={movies}
            isPreloaderShown={isPreloaderShown}
            isSaved={true}
            handleDeleteMovie={handleDeleteMovie}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
