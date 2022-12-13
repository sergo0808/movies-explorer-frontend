export class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
  }
  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(this.url, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }
}

const api = new Api({
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
