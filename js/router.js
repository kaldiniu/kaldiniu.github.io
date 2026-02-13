// /js/router.js
import { loadLang } from './i18n.js';
import { ROUTES, MAIN_LANG, MAIN_PAGE, LANG_KEY, ERROR_PAGE } from './constants.js';


export async function resolveRoute() {
  const rawHash = location.hash.slice(1);
  const [hashLang, hashSlug = ''] = rawHash.split('/');

  const lang =
    ROUTES[hashLang]
      ? hashLang
      : localStorage.getItem(LANG_KEY) || MAIN_LANG;

  await loadLang(lang);
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang;

  let page = MAIN_PAGE;

  if (hashSlug) {
    const found = Object.entries(ROUTES[lang])
      .find(([, slug]) => slug === hashSlug);

    page = found ? found[0] : ERROR_PAGE;
  }

  return { lang, page };
}

export function buildHash(lang, page) {
  const slug = ROUTES[lang]?.[page] ?? '';
  return `#${lang}${slug ? '/' + slug : ''}`;
}
