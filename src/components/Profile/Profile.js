import './Profile.css';
import {Formik} from 'formik';
import * as yup from 'yup';

function Profile() {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Обязательное поле')
      .min(2, 'Минимальное количество символов - 2')
      .max(30, 'Максимальное количество символов - 30'),
    email: yup.string().email().required(),
  });
  return (
    <section className='profile'>
      <Formik
        initialValues={{
          name: '',
          email: '',
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => {
          return (
            <div className='profile__form'>
              <h1 className='profile__title'>Привет, Виталий!</h1>
              <label className='profile__label' htmlFor='name'>
                Имя
              </label>
              <input
                className='profile__input'
                type='text'
                name='name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <label className='profile__label' htmlFor='email'>
                E-mail
              </label>
              <input
                className='profile__input'
                type='text'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <div className='profile__wrap'>
                <button type='button' className='profile__button'>
                  Редактировать
                </button>
                <button type='button' className='profile__button profile__button_logout'>
                  Выйти из аккаунта
                </button>
              </div>
            </div>
          );
        }}
      </Formik>
    </section>
  );
}

export default Profile;
