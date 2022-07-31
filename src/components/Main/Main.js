import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';

function Main() {
  return (
    <>
      <section className='banner'>
        <Promo />
      </section>
      <section>
        <AboutProject />
      </section>
    </>
  )
}

export default Main;