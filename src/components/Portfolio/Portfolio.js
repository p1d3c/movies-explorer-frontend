import './Portfolio.css';

function Portfolio(props) {
  return (
    <div className='portfolio'>
      <h2 className='portfolio__heading'>Портфолио</h2>
      <div className='portfolio__links'>
        <a className='portfolio__link'>Статичный сайт</a>
        <a className='portfolio__link'>Адаптивный сайт</a>
        <a className='portfolio__link'>Одностраничное приложение</a>
      </div>
    </div>
  );
}

export default Portfolio;
