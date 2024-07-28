import {checkData} from './utils';
import {BASE_URL} from './constants';

export const registration = (userData) => {
  return fetch(`${BASE_URL}/signup`, {
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
  return fetch(`${BASE_URL}/signin`, {
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
  return fetch(`${BASE_URL}/users/me`, {
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
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then((res) => {
    return checkData(res);
  });
};

export const updateUserProfile = (userData) => {
  return fetch(`${BASE_URL}/users/me`, {
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
  return fetch(`${BASE_URL}/movies`, {
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
  return fetch(`${BASE_URL}/movies/${id}`, {
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
