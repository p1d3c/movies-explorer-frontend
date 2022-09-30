import './Main.css';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main() {
  return (
    <>
      <Header />
      <main>
        <section className='banner'>
          <Promo />
        </section>
        <section>
          <AboutProject />
        </section>
        <section className='technologies'>
          <Techs />
        </section>
        <section>
          <AboutMe />
        </section>
        <section>
          <Portfolio />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
