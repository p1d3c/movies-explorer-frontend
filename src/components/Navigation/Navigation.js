import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='nav'>
      <input id='burger' type='checkbox' className='nav__input' />
      <label htmlFor='burger' className='nav__label'></label>
      <div className='nav__menu'>
        <label htmlFor='burger' className='nav__overlay'></label>
        <div className='nav__content'>
          <ul id='menu'>
            <Link to='/' className='nav__link'>
              <li>Главная</li>
            </Link>
            <Link to='/movies' className='nav__link'>
              <li className='nav__border'>Фильмы</li>
            </Link>
            <Link to='/saved-movies' className='nav__link'>
              <li>Сохранённые фильмы</li>
            </Link>
          </ul>
          <Link to='/profile' className='nav__link nav__link_profile-menu'>
            Аккаунт
          </Link>
        </div>
      </div>
      <div className='nav__wrap'>
        <Link to='/movies' className='nav__link nav__link_active'>
          Фильмы
        </Link>
        <Link to='/saved-movies' className='nav__link'>
          Сохранённые фильмы
        </Link>
      </div>
      <Link to='/profile' className='nav__link nav__link_profile'>
        Аккаунт
      </Link>
    </nav>
  );
}

export default Navigation;
