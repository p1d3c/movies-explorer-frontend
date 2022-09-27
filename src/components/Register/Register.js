import {Formik} from 'formik';
import {Link} from 'react-router-dom';
import * as yup from 'yup';
import logo from '../../images/logo.svg';
import './Register.css';

function Register() {
  const validationSchema = yup.object().shape({
    name: '',
    email: '',
    password: '',
  });
  return (
    <section className='auth'>
      <img className='auth__logo' src={logo} />
      <h1 className='auth__title'>Добро пожаловать!</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
          <>
            <div className='auth__form'>
              <fieldset className='auth__fieldset'>
                <label className='auth__label'>Имя</label>
                <input
                  className='auth__input'
                  type='text'
                  name='name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </fieldset>
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
              Зарегистрироваться
            </button>
            <p className='auth__text'>
              Уже зарегистрированы?{' '}
              <Link className='auth__redirect' to='/signin'>
                Войти
              </Link>
            </p>
          </>
        )}
      </Formik>
    </section>
  );
}

export default Register;
