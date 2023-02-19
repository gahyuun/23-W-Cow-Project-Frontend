import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = (value) => {
  return cookies.set('token', value);
};

export function getCookie() {
  return cookies.get('token');
}

export const removeCookie = () => {
  return cookies.remove('token');
};
