import './AboutMe.css';
import avatar from '../../images/avatar.jpg';

function AboutMe() {
  return (
    <div className='me'>
      <h2 className='me__heading'>Студент</h2>
      <div className='me__content'>
        <div className='me__wrap'>
          <h2 className='me__title'>Владислав</h2>
          <h3 className='me__subtitle'>Фронтенд-разработчик, 22 года</h3>
          <p className='me__paragraph'>
            Еще в школе заинтересовался программированием. Поступил на прикладную информатику в Московский
            Энергетический Институт и получил степень бакалавра. Прошел дополнительные курсы веб-разработчика в
            Яндекс.Практикум. Помимо написания кода увлекаюсь волейболом и настольным теннисом.
          </p>
          <div className='me__links'>
            <a className='me__link' href='https://t.me/p1d3c'>
              Telegram
            </a>
            <a className='me__link' href='https://github.com/p1d3c'>
              GitHub
            </a>
          </div>
        </div>
        <img className='me__avatar' src={avatar} />
      </div>
    </div>
  );
}

export default AboutMe;
