// /js/auth.js
import { HASH, AUTH_KEY } from './constants.js';

async function hashString(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

export function isAuth() {
  return localStorage.getItem(AUTH_KEY) === 'true';
}

export async function login(password) {
  const hash = await hashString(password);

  if (hash === HASH) {
    localStorage.setItem(AUTH_KEY, 'true');
    return true;
  }

  return false;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

//hashString('поменять-пароль').then(console.log);
