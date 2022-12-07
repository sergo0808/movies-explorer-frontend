class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getToken = () => localStorage.getItem("token");

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  registration(inputValueOject) {
    return fetch(this._baseUrl + `/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(inputValueOject),
    }).then(this._handleResponse);
  }

  login(inputValueOject) {
    return fetch(this._baseUrl + `/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(inputValueOject),
    }).then(this._handleResponse);
  }

  getUserInfo() {
    return fetch(this._baseUrl + `/users/me`, {
      headers: {
        authorization: `Bearer ${this._getToken()}`,
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }

  changeUserInfo(inputValueOject) {
    return fetch(this._baseUrl + `/users/me`, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${this._getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValueOject),
    }).then(this._handleResponse);
  }

  getMyMovies() {
    return fetch(this._baseUrl + `/movies`, {
      headers: {
        authorization: `Bearer ${this._getToken()}`,
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }

  saveMovie(inputValueOject) {
    return fetch(this._baseUrl + `/movies/`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${this._getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValueOject),
    }).then(this._handleResponse);
  }

  deleteMovie(id) {
    return fetch(this._baseUrl + `/movies/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${this._getToken()}`,
        "Content-Type": "application/json",
      },
    }).then(this._handleResponse);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.films.sovickiy.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
