import './Header.css';
import logo from '../../images/logo.svg'
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className={`header ${location.pathname === '/' ? '' : 'header_black' }`}>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='logo' />
      </Link>
      <div className='header__container'>
        <p className='header__register'>Регистрация</p>
        <button className='header__login'>Войти</button>
      </div>
    </header>
  )
}

export default Header;