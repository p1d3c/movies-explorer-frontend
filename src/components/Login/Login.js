import {Formik} from 'formik';
import * as yup from 'yup';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

function Login(props) {
  const {handleAuthorize, apiError} = props;

  const validationSchema = yup.object().shape({
    email: yup.string().email('Некорректный email').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
  });

  return (
    <main>
      <section className='auth'>
        <Link to='/'>
          <img className='auth__logo' src={logo} alt='logo' />
        </Link>
        <h1 className='auth__title'>Рады видеть!</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => handleAuthorize(values)}
          validationSchema={validationSchema}
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
            <>
              <div className='auth__form auth__form_login'>
                <fieldset className='auth__fieldset'>
                  <label className='auth__label'>E-mail</label>
                  <input
                    className={`auth__input ${errors.email ? 'auth__input_error' : ''}`}
                    type='text'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <span className='auth__error'>{errors.email}</span>
                </fieldset>
                <fieldset className='auth__fieldset'>
                  <label className='auth__label'>Пароль</label>
                  <input
                    className={`auth__input ${errors.password ? 'auth__input_error' : ''}`}
                    type='password'
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <span className='auth__error'>{errors.password}</span>
                </fieldset>
              </div>
              <button type='button' className='auth__button' onClick={handleSubmit} disabled={!isValid}>
                Войти
              </button>
              <p className='auth__text'>
                Еще не зарегистрированы?{' '}
                <Link className='auth__redirect' to='/signup'>
                  Регистрация
                </Link>
              </p>
              {apiError && <p className='auth__error_promise'>{apiError}</p>}
            </>
          )}
        </Formik>
      </section>
    </main>
  );
}

export default Login;
