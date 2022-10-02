import './Portfolio.css';

function Portfolio(props) {
  return (
    <div className='portfolio'>
      <h2 className='portfolio__heading'>Портфолио</h2>
      <ul className='portfolio__links'>
        <li>
          <a className='portfolio__link' href='https://p1d3c.github.io/how-to-learn/' target='_blank' rel='noreferrer'>
            Статичный сайт
          </a>
        </li>
        <li>
          <a className='portfolio__link' href='https://p1d3c.github.io/russia/' target='_blank' rel='noreferrer'>
            Адаптивный сайт
          </a>
        </li>
        <li>
          <a className='portfolio__link' href='https://p1d3c.github.io/mestoProject/' target='_blank' rel='noreferrer'>
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
