import {Link, useLocation} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className='nav'>
      <input id='burger' type='checkbox' className='nav__input' />
      <label htmlFor='burger' className='nav__label'></label>
      <div className='nav__menu'>
        <label htmlFor='burger' className='nav__overlay'></label>
        <div className='nav__content'>
          <ul id='menu'>
            <Link to='/' className='nav__link'>
              <li className={location.pathname === '/' ? 'nav__border' : ''}>Главная</li>
            </Link>
            <Link to='/movies' className='nav__link'>
              <li className={location.pathname === '/movies' ? 'nav__border' : ''}>Фильмы</li>
            </Link>
            <Link to='/saved-movies' className='nav__link'>
              <li className={location.pathname === '/saved-movies' ? 'nav__border' : ''}>Сохранённые фильмы</li>
            </Link>
          </ul>
          <Link to='/profile' className='nav__link nav__link_profile-menu'>
            Аккаунт
          </Link>
        </div>
      </div>
      <div className='nav__wrap'>
        <Link to='/movies' className={`nav__link ${location.pathname === '/movies' ? 'nav__link_active' : ''}`}>
          Фильмы
        </Link>
        <Link
          to='/saved-movies'
          className={`nav__link ${location.pathname === '/saved-movies' ? 'nav__link_active' : ''}`}
        >
          Сохранённые фильмы
        </Link>
      </div>
      <Link
        to='/profile'
        className={`nav__link nav__link_profile ${location.pathname === '/' ? 'nav__link_main' : ''}`}
      >
        Аккаунт
      </Link>
    </nav>
  );
}

export default Navigation;
