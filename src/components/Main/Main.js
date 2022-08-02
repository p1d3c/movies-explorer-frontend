import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function Main() {
  return (
    <>
      <section className='banner'>
        <Promo />
      </section>
      <section>
        <AboutProject />
      </section> 
      <section className='technologies'>
        <Techs />
      </section>
    </>
  )
}

export default Main;