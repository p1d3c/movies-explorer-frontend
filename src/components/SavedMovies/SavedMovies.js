import {useState} from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './SavedMovies.css';

function SavedMovies(props) {
  const {
    isPreloaderShown,
    setIsPreloaderShown,
    movies,
    setSavedMovies,
    handleDeleteMovie,
    isShort,
    setIsShort,
    isNothingFound,
    setIsNothingFound,
  } = props;

  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);

  const handleSearch = (inputText) => {
    setIsNothingFound(false);

    let data = movies.filter((item) => {
      return item.nameRU.toLowerCase().includes(inputText.toLowerCase());
    });

    if (isShort) {
      data = data.filter((item) => item.duration <= 40);
    }

    if (data.length === 0) {
      setIsNothingFound(true);
      setFilteredSavedMovies([]);
      setIsPreloaderShown(false);
      return;
    }

    setFilteredSavedMovies(data);
    setIsPreloaderShown(false);
  };

  return (
    <>
      <Header />
      <main className='main'>
        <section className='saved'>
          <div className='form'>
            <div className='form__border'>
              <SearchForm handleSearch={handleSearch} setIsPreloaderShown={setIsPreloaderShown} />
              <FilterCheckbox isShort={isShort} setIsShort={setIsShort} />
            </div>
          </div>
        </section>
        <section className='list'>
          {isNothingFound ? (
            <h1 className='list__nothing'>Ничего не найдено</h1>
          ) : (
            <MoviesCardList
              movies={filteredSavedMovies.length === 0 ? movies : filteredSavedMovies}
              isPreloaderShown={isPreloaderShown}
              isSaved={true}
              handleDeleteMovie={handleDeleteMovie}
            />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
