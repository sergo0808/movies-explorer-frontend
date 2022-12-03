export class MainApi {
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

  addCardApi(input) {
    return fetch(this.url + `/movies`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    }).then(this._handleResponse);
  }

  getMyMovies() {
    return fetch(this.url, +`/movies`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi({
  url: "https://api.films.sovickiy.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
