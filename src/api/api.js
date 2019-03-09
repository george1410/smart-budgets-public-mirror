import axios from 'axios';

const JWT_TOKEN = 'token';

const api = axios.create();

if (localStorage.getItem(JWT_TOKEN)) {
  const token = localStorage.getItem(JWT_TOKEN);
  api.defaults.headers.authorization = token;
}

export function login(token) {
  api.defaults.headers.authorization = token;
  localStorage.setItem(JWT_TOKEN, token);
}

export function logout() {
  delete api.defaults.headers.authorization;
  localStorage.removeItem(JWT_TOKEN);
  localStorage.removeItem('uid');
}

export default api;
