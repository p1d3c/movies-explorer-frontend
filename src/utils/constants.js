export const URL_REG_EXP = new RegExp(
  /https?:\/\/(www\.)?[a-zA-Z0-9._\-/#]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9():%_/+.~#?&=]*)/
);

export const JWT_REG_EXP = new RegExp(/(^[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*\.[A-Za-z0-9-_]*$)/);

export const BASE_URL = 'https://api.p1d3c.moviesexplorer.nomoredomains.icu';
// export const BASE_URL = 'http://localhost:3000';

export const SHORT_DURAION = 40;

export const AUTH_ERROR_MESSAGE = 'Необходима авторизация';
