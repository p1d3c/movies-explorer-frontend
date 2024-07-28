export const checkData = (res) => {
  if (res.ok) {
    return res.json();
  }

  if (!res.ok && res.status >= 400) {
    return res.json();
  }

  Promise.reject(`Ошибка ${res.status}`);
};
