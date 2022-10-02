import './Header.css';
import logo from '../../images/logo.svg';
import {Link, useLocation} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header() {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === '/' ? '' : 'header_black'}`}>
      <div className='header__limiter'>
        <Link to='/'>
          <img className='header__logo' src={logo} alt='logo' />
        </Link>
        {location.pathname !== '/' ? (
          <Navigation />
        ) : (
          <div className='header__container'>
            <Link to='/signup' className='header__register'>
              Регистрация
            </Link>
            <Link to='/signin' className='header__login'>
              Войти
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
