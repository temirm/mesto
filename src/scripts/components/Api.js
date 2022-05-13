export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // gets user info
  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      method: 'GET',
      headers: this._headers
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(`Ошибка: ${response}`);
      });
  }

  // get cards array
  getCards() {
    return fetch(this._baseUrl + '/cards', {
      method: 'GET',
      headers: this._headers
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject(`Ошибка: ${response}`);
      })
  }
}
