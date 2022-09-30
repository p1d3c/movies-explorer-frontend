import {Formik} from 'formik';
import * as yup from 'yup';
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Login.css';

function Login() {
  const validationSchema = yup.object().shape({
    email: '',
    password: '',
  });
  return (
    <main>
      <section className='auth'>
        <img className='auth__logo' src={logo} alt='logo' />
        <h1 className='auth__title'>Рады видеть!</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
            <>
              <div className='auth__form auth__form_login'>
                <fieldset className='auth__fieldset'>
                  <label className='auth__label'>E-mail</label>
                  <input
                    className='auth__input'
                    type='text'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </fieldset>
                <fieldset className='auth__fieldset'>
                  <label className='auth__label'>Пароль</label>
                  <input
                    className='auth__input auth__input_error'
                    type='password'
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </fieldset>
              </div>
              <button type='button' className='auth__button' onClick={handleSubmit} disabled={!isValid && !dirty}>
                Войти
              </button>
              <p className='auth__text'>
                Еще не зарегистрированы?{' '}
                <Link className='auth__redirect' to='/signup'>
                  Регистрация
                </Link>
              </p>
            </>
          )}
        </Formik>
      </section>
    </main>
  );
}

export default Login;
