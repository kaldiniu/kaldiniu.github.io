// /js/i18n.js
import { MAIN_LANG } from './constants.js';
let currentLang = MAIN_LANG
let cache = {};

export async function loadLang(lang) {
  if (cache[lang]) {
    currentLang = lang;
    return cache[lang];
  }

  try {
    const res = await fetch(`i18n/${lang}.json`);
    if (!res.ok) throw new Error('Lang load failed');

    const json = await res.json();
    cache[lang] = json;
    currentLang = lang;
    return json;
  } catch (e) {
    console.warn(`i18n: fallback to MAIN_LANG (${e.message})`);
    if (lang !== MAIN_LANG) return loadLang(MAIN_LANG);
  }
}

export function t(path) {
  const keys = path.split('.');
  let value = cache[currentLang];

  for (const k of keys) {
    if (!value) return path;
    value = value[k];
  }
  return value ?? path;
}
