import {login, logout} from '../services/LoginService';
import {
  getStorageItem,
  setStorageItem,
  removeStorageItem,
} from '../storage/Storage';
const TOKEN_KEY = 'x_forward_token';

export const isAuthenticated = () => {
  return getStorageItem(TOKEN_KEY) != null;
};

export const getToken = () =>
  isAuthenticated()
    ? JSON.parse(getStorageItem(TOKEN_KEY, {doNotParse: true}))
    : null;

export const setToken = (token, expiration) => {
  setStorageItem(TOKEN_KEY, JSON.stringify(token), {
    path: '/',
    expires: expiration,
  });
};

export const _login = userData => {
  return login(userData);
};

export const _logout = () => {
  logout()
    .then(() => {
      removeStorageItem(TOKEN_KEY);
      window.location.reload();
    })
    .catch(() => {
      removeStorageItem(TOKEN_KEY);
      window.location.reload();
    });
};
