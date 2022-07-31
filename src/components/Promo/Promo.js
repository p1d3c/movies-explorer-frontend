import './Promo.css';
import web from '../../images/web.svg'

function Promo() {
  return (
    <div className='promo'>
      <div className='promo__container'>
        <h1 className='promo__title'>
          Учебный проект студента факультета <br/>Веб-разработки.
        </h1>
        <h2 className='promo__subtitle'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </h2>
        <button className='promo__more'>
          Узнать больше
        </button>
      </div>
      <img className='promo__img' src={web} alt='web' />
    </div>
  )
}

export default Promo;