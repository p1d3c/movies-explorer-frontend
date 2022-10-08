import {Formik} from 'formik';
import {Link} from 'react-router-dom';
import * as yup from 'yup';
import logo from '../../images/logo.svg';
import './Register.css';

function Register(props) {
  const {handleRegister, apiError} = props;

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Минимальная длина имени 2 символа')
      .max(30, 'Максимальная длина имени 30 символов')
      .required('Обязательное поле'),
    email: yup.string().email('Некорректный email').required('Обязательное поле'),
    password: yup.string().min(8, 'Минимальная длина пароля 8 символов').required('Обязательное поле'),
  });

  return (
    <main>
      <section className='auth'>
        <Link to='/'>
          <img className='auth__logo' src={logo} alt='logo' />
        </Link>
        <h1 className='auth__title'>Добро пожаловать!</h1>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={(values) => handleRegister(values)}
          validationSchema={validationSchema}
        >
          {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
            <>
              <div className='auth__form'>
                <fieldset className='auth__fieldset'>
                  <label className='auth__label'>Имя</label>
                  <input
                    className={`auth__input ${errors.name ? 'auth__input_error' : ''}`}
                    type='text'
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  <span className='auth__error'>{errors.name}</span>
                </fieldset>
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
                Зарегистрироваться
              </button>
              <p className='auth__text'>
                Уже зарегистрированы?{' '}
                <Link className='auth__redirect' to='/signin'>
                  Войти
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

export default Register;
