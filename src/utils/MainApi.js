const BASE_URL = "https://api.films.sovickiy.nomoredomains.icu";

export const getToken = () => localStorage.getItem("token");

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};

export const getUserInfo = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
  }).then((res) => handleResponse(res));
};

export const changeUserInfo = (input) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  }).then((res) => handleResponse(res));
};

export const getMyMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
  }).then((res) => handleResponse(res));
};

export const saveMovie = (input) => {
  return fetch(`${BASE_URL}/movies/`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  }).then((res) => handleResponse(res));
};

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
  }).then((res) => handleResponse(res));
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => handleResponse(res));
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => handleResponse(res))
    .then((data) => {
      localStorage.setItem("token", data.token);
      return data;
    });
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => handleResponse(res));
};
