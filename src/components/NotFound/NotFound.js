import {Link} from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <section className='notfound'>
      <div className='notfound__wrap'>
        <h1 className='notfound__title'>404</h1>
        <h2 className='notfound__subtitle'>Страница не найдена</h2>
      </div>
      <Link to='/' className='notfound__back'>
        Назад
      </Link>
    </section>
  );
}

export default NotFound;
