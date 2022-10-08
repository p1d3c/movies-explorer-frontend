export const checkData = (res) => {
  if (res.ok) {
    return res.json();
  }

  if (!res.ok && res.status >= 400) {
    return res.json();
  }

  Promise.reject(`Ошибка ${res.status}`);
};

export const urlRegExp = new RegExp(
  /https?:\/\/(www\.)?[a-zA-Z0-9._\-/#]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9():%_/+.~#?&=]*)/
);

export const BASE_URL = 'api.p1d3c.moviesexplorer.nomoredomains.icu';
