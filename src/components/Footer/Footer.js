import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title'>Учебный проект Яндекс.Практикум x BeatFilm.</h2>
      <div className='footer__wrap'>
        <span className='footer__copyright'>&#169; 2022</span>
        <div className='footer__links'>
          <a className='footer__link' href='https://practicum.yandex.ru'>
            Яндекс.Практикум
          </a>
          <a className='footer__link' href='https://github.com/p1d3c'>
            GitHub
          </a>
          <a className='footer__link' href='https://t.me/p1d3c'>
            Telegram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
