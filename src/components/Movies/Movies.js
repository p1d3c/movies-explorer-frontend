import {useEffect} from 'react';
import {SHORT_DURAION} from '../../utils/constants';
import {getMovies} from '../../utils/MoviesApi';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import './Movies.css';

function Movies(props) {
  const {
    isPreloaderShown,
    setIsPreloaderShown,
    handleLikeMovie,
    handleDeleteMovie,
    savedMovies,
    filteredMovies,
    setFilteredMovies,
    isShort,
    setIsShort,
    isNothingFound,
    setIsNothingFound,
  } = props;

  const handleSearch = (inputText) => {
    setIsNothingFound(false);
    setIsPreloaderShown(true);
    getMovies()
      .then((res) => {
        let data = res.filter((item) => {
          return item.nameRU.toLowerCase().includes(inputText.toLowerCase());
        });

        if (isShort) {
          data = data.filter((item) => item.duration <= SHORT_DURAION);
        }

        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < savedMovies.length; j++) {
            if (data[i].id === savedMovies[j].movieId) {
              data[i].isLiked = true;
            }
          }
        }

        if (data.length === 0) {
          setIsNothingFound(true);
          setFilteredMovies([]);
          return;
        }

        setFilteredMovies(data);

        localStorage.setItem(
          'searchData',
          JSON.stringify({
            searchText: inputText,
            isShort,
            movies: data,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloaderShown(false);
      });
  };

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem('searchData'));
    if (!storageData) {
      return;
    }

    for (let i = 0; i < storageData.movies.length; i++) {
      for (let j = 0; j < savedMovies.length; j++) {
        if (storageData.movies[i].id === savedMovies[j].movieId) {
          storageData.movies[i].isLiked = true;
        }
      }
    }

    setFilteredMovies(storageData.movies);
    setIsShort(storageData.isShort);
  }, []);

  return (
    <>
      <Header />
      <main className='main'>
        <section className='form'>
          <div className='form__border'>
            <SearchForm handleSearch={handleSearch} setIsPreloaderShown={setIsPreloaderShown} />
            <FilterCheckbox isShort={isShort} setIsShort={setIsShort} />
          </div>
        </section>
        <section className='list'>
          {isNothingFound ? (
            <h1 className='list__nothing'>Ничего не найдено</h1>
          ) : (
            <MoviesCardList
              movies={filteredMovies}
              isPreloaderShown={isPreloaderShown}
              isSaved={false}
              handleLikeMovie={handleLikeMovie}
              handleDeleteMovie={handleDeleteMovie}
            />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
