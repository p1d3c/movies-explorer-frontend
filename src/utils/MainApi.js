import {checkData} from './utils';

export const registration = (userData) => {
  return fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(userData),
  }).then((res) => {
    return checkData(res);
  });
};

export const authorization = (userData) => {
  return fetch('http://localhost:3000/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(userData),
  }).then((res) => {
    return checkData(res);
  });
};

export const getUserData = () => {
  return fetch('http://localhost:3000/users/me', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    if (res.status === 401) {
      return res.json();
    }

    Promise.reject(`Ошибка ${res.status}`);
  });
};

export const getSavedMovies = () => {
  return fetch('http://localhost:3000/movies', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    Promise.reject(`Ошибка ${res.status}`);
  });
};

export const updateUserProfile = (userData) => {
  return fetch('http://localhost:3000/users/me', {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify(userData),
  }).then((res) => {
    return checkData(res);
  });
};

export const likeMovie = (movieData) => {
  return fetch('http://localhost:3000/movies', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify(movieData),
  }).then((res) => {
    return checkData(res);
  });
};

export const deleteMovie = (id) => {
  return fetch(`http://localhost:3000/movies/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then((res) => {
    return checkData(res);
  });
};
