import './App.css';
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from '../NotFound/NotFound';
import {useEffect, useState} from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {authorization, deleteMovie, getSavedMovies, getUserData, likeMovie, registration} from '../../utils/MainApi';
import {IsLoggedInContext} from '../../contexts/IsLoggedInContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [apiError, setApiError] = useState({loginError: '', regError: ''});
  const [isPreloaderShown, setIsPreloaderShown] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShort, setIsShort] = useState(false);
  const [isNothingFound, setIsNothingFound] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const checkToken = () => {
    const token = localStorage.getItem('jwt');

    if (token) {
      setIsLoggedIn(true);
      navigate(location.pathname);
    }
  };

  const handleRegister = (userData) => {
    registration(userData)
      .then((res) => {
        if (!res.message) {
          setApiError({
            ...apiError,
            regError: '',
          });
          handleAuthorize(userData);
          return;
        }

        setApiError({
          ...apiError,
          regError: res.message,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAuthorize = ({email, password}) => {
    const userData = {email, password};
    authorization(userData)
      .then((res) => {
        if (!res.message) {
          localStorage.setItem('jwt', res.token);
          setIsLoggedIn(true);
          navigate('/movies');
          setApiError({
            ...apiError,
            loginError: '',
          });
          return;
        }

        setApiError({
          ...apiError,
          loginError: res.message,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('searchData');
    setIsLoggedIn(undefined);
    setCurrentUser({});
    navigate('/');
  };

  const handleEditProfile = (name, email) => {
    setCurrentUser({
      ...currentUser,
      name,
      email,
    });
  };

  const handleLikeMovie = (movieData) => {
    likeMovie(movieData)
      .then((res) => {
        setSavedMovies((prev) => [...prev, res.newMovie]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteMovie = (id) => {
    deleteMovie(id)
      .then(() => {
        setSavedMovies((movies) => movies.filter((m) => m._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    getUserData()
      .then((res) => {
        setCurrentUser({
          ...currentUser,
          name: res.data.name,
          email: res.data.email,
          id: res.data._id,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }

    getSavedMovies().then((res) => {
      setSavedMovies(res.data);
    });
  }, [isLoggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <IsLoggedInContext.Provider value={isLoggedIn}>
        <div className='page'>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route
              path='/movies'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} redirectTo='/'>
                  <Movies
                    isPreloaderShown={isPreloaderShown}
                    setIsPreloaderShown={setIsPreloaderShown}
                    handleLikeMovie={handleLikeMovie}
                    savedMovies={savedMovies}
                    filteredMovies={filteredMovies}
                    setFilteredMovies={setFilteredMovies}
                    isShort={isShort}
                    setIsShort={setIsShort}
                    isNothingFound={isNothingFound}
                    setIsNothingFound={setIsNothingFound}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} redirectTo='/'>
                  <SavedMovies
                    movies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    isPreloaderShown={isPreloaderShown}
                    setIsPreloaderShown={setIsPreloaderShown}
                    handleDeleteMovie={handleDeleteMovie}
                    isShort={isShort}
                    setIsShort={setIsShort}
                    isNothingFound={isNothingFound}
                    setIsNothingFound={setIsNothingFound}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} redirectTo='/'>
                  <Profile handleLogOut={handleLogOut} handleEditProfile={handleEditProfile} />
                </ProtectedRoute>
              }
            />
            <Route
              path='/signin'
              element={<Login handleAuthorize={handleAuthorize} apiError={apiError.loginError} />}
            />
            <Route path='/signup' element={<Register handleRegister={handleRegister} apiError={apiError.regError} />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </IsLoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
