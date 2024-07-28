import './Profile.css';
import {Formik} from 'formik';
import * as yup from 'yup';
import Header from '../Header/Header';
import {useContext, useEffect, useState} from 'react';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import {updateUserProfile} from '../../utils/MainApi';
import {AUTH_ERROR_MESSAGE} from '../../utils/constants';

function Profile(props) {
  const {handleLogOut, handleEditProfile} = props;

  const currentUser = useContext(CurrentUserContext);
  const [isSaveBtnHidden, setIsSaveBtnHidden] = useState(false);
  const [apiError, setApiError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Заполните поле «Имя»')
      .min(2, 'Минимальное количество символов - 2')
      .max(30, 'Максимальное количество символов - 30'),
    email: yup.string().email('Некорректный E-mail').required('Заполните поле «E-mail»'),
  });

  const handleEdit = () => {
    setIsSaveBtnHidden(!isSaveBtnHidden);
  };

  const handleSaveChanges = (userData) => {
    if (!localStorage.getItem('jwt')) {
      handleLogOut();
      return;
    }

    updateUserProfile(userData)
      .then((res) => {
        if (res.message === AUTH_ERROR_MESSAGE) {
          handleLogOut();
          return;
        }

        if (res.data) {
          setIsSuccess(true);
          setApiError('');
          handleEditProfile(res.data.name, res.data.email);
          handleEdit();
        }

        if (res.message) {
          setApiError(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    return () => {
      setIsSuccess(false);
    };
  }, []);

  return (
    <>
      <Header />
      <main className='main'>
        <section className='profile'>
          <Formik
            initialValues={{
              name: currentUser.name,
              email: currentUser.email,
            }}
            onSubmit={(values) => handleSaveChanges(values)}
            validationSchema={validationSchema}
          >
            {({values, errors, handleChange, handleBlur, isValid, handleSubmit}) => {
              return (
                <div className='profile__form'>
                  <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                  <label className='profile__label' htmlFor='name'>
                    Имя
                  </label>
                  <input
                    className={`profile__input ${errors.name ? 'profile__input_error' : ''}`}
                    type='text'
                    name='name'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    disabled={!isSaveBtnHidden}
                  />
                  <label className='profile__label' htmlFor='email'>
                    E-mail
                  </label>
                  <input
                    className={`profile__input ${errors.email ? 'profile__input_error' : ''}`}
                    type='text'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    disabled={!isSaveBtnHidden}
                  />
                  <div className='profile__wrap'>
                    <button
                      type='button'
                      className='profile__save'
                      hidden={!isSaveBtnHidden}
                      disabled={
                        (values.name === currentUser.name || !isValid) &&
                        (values.email === currentUser.email || !isValid)
                      }
                      onClick={handleSubmit}
                    >
                      Сохранить
                    </button>
                    <p className='profile__back' onClick={handleEdit} hidden={!isSaveBtnHidden}>
                      Назад
                    </p>
                    <p className='profile__error' hidden={!isSaveBtnHidden}>
                      {apiError || errors.name || errors.email}
                    </p>
                    {isSuccess && (
                      <p className='profile__success' hidden={isSaveBtnHidden}>
                        Изменения сохранены
                      </p>
                    )}
                    <button type='button' className='profile__button' hidden={isSaveBtnHidden} onClick={handleEdit}>
                      Редактировать
                    </button>
                    <button
                      type='button'
                      className='profile__button profile__button_logout'
                      onClick={handleLogOut}
                      hidden={isSaveBtnHidden}
                    >
                      Выйти из аккаунта
                    </button>
                  </div>
                </div>
              );
            }}
          </Formik>
        </section>
      </main>
    </>
  );
}

export default Profile;
