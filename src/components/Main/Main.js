import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';

function Main() {
  return (
    <>
      {/* <section className='banner'>
        <Promo />
      </section> */}
      <section>
        <AboutProject />
      </section>
      {/* <section className='technologies'>
        <Techs />
      </section> */}
      <section>
        <AboutMe />
      </section>
    </>
  );
}

export default Main;
