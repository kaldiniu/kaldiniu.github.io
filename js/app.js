// /js/app.js
import { resolveRoute, buildHash } from './router.js';
import { t } from './i18n.js';

import { renderHome } from './pages/home.js';
import { renderResume } from './pages/resume.js';
import { renderContacts } from './pages/contacts.js';
import { renderPrivacy } from './pages/privacy.js';
import { renderLegal } from './pages/legal.js';
import { renderNotFound } from './pages/notFound.js';
import { openPopup } from './components/popup.js';

import { isAuth, logout } from './auth.js';
import { renderAuth } from './pages/auth.js';
import { ROUTES, PROTECTED_PAGES, MAIN_LANG, MAIN_PAGE, HIDDEN_PAGES, ERROR_PAGE, AUTH_PAGE, LEGAL_PAGE, PRIVACY_PAGE} from './constants.js';

/* ---------- state ---------- */
let currentRoute = { lang: MAIN_LANG, page: MAIN_PAGE };

/* ---------- pages map ---------- */
const PAGE_RENDERERS = {
  home: renderHome,
  resume: renderResume,
  contacts: renderContacts,
  privacy: renderPrivacy,
  legal: renderLegal,
  auth: renderAuth,
  ERROR_PAGE: renderNotFound
};

/* ---------- elements ---------- */
const spinner = document.getElementById('spinner');
const menu = document.getElementById('menu');
const navEl = document.getElementById('nav');
const logoEl = document.getElementById('logo');
const breadcrumbs = document.getElementById('link-to-main');
const footerText = document.getElementById('footer-text');
const legal = document.getElementById('legal');
const privacy = document.getElementById('privacy');
const langButtons = document.querySelectorAll('[data-lang]');
const themeToggle = document.getElementById('theme-toggle');
const burger = document.getElementById('menu-toggle');
const popupOpen = document.getElementById('popup-button-open');
const popupClose = document.getElementById('popup-botton-close');
const logoutBtn = document.getElementById('logout-btn');


/* ---------- spinner ---------- */
const MIN_SPINNER_TIME = 300;
const MAX_SPINNER_TIME = 2000;
const spinnerStart = performance.now();

let spinnerKilled = false;

function hideSpinner() {
  if (spinnerKilled) return;
  spinnerKilled = true;
  spinner.classList.add('hidden');
}

setTimeout(hideSpinner, MAX_SPINNER_TIME);

/* ---------- theme ---------- */
function getTheme() {
  return localStorage.getItem('theme') || 'light';
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);

  const icon = theme === 'dark' ? 'icon-sun' : 'icon-moon';
  themeToggle.innerHTML = `
    <svg class="icon" aria-hidden="true">
      <use href="#${icon}"></use>
    </svg>
  `;
}

themeToggle.addEventListener('click', () => {
  setTheme(getTheme() === 'dark' ? 'light' : 'dark');
});

/* ---------- burger ---------- */
function updateBurgerIcon() {
  const isOpen = navEl.classList.contains('open');
  const icon = isOpen ? 'icon-close' : 'icon-burger';

  burger.setAttribute('aria-expanded', String(isOpen));
  burger.innerHTML = `
    <svg class="icon" aria-hidden="true">
      <use href="#${icon}"></use>
    </svg>
  `;
}

function closeMenu() {
  navEl.classList.remove('open');
  navEl.classList.add('hidden');
  updateBurgerIcon();
}

burger.addEventListener('click', () => {
  navEl.classList.toggle('open');
  navEl.classList.toggle('hidden');
  updateBurgerIcon();
});

/* ---------- logout button ---------- */
function updateLogoutButton() {
  if (!isAuth()) {
    logoutBtn.classList.add('hidden');
    return;
  }

  logoutBtn.classList.remove('hidden');
  logoutBtn.innerHTML = `${t('auth.logout')}`

  logoutBtn.onclick = () => {
    logout();
    location.reload();
  };
}

/* ---------- UI ---------- */
function renderMenu(lang, currentPage) {
  menu.innerHTML = '';
  const fragment = document.createDocumentFragment();
  

  Object.keys(ROUTES[lang]).forEach(page => {
    if (HIDDEN_PAGES.includes(page)) return;

    const label = t(`page.${page}.menu`);

    if (page === currentPage) {
      const span = document.createElement('span');
      span.className = 'current';
      span.textContent = label;
      span.dataset.text = label;
      fragment.append(span);
    } else {
      const a = document.createElement('a');
      a.href = buildHash(lang, page);
      a.textContent = label;
      a.dataset.text = label;
      fragment.append(a);
    }
  });

  menu.append(fragment);
}

function renderBreadcrumbs(lang, page) {
  breadcrumbs.innerHTML = '';
  if (page === MAIN_PAGE || page === ERROR_PAGE) return;

  /*breadcrumbs.innerHTML = `
    <a href="${buildHash(lang, MAIN_PAGE)}">
      <svg class="icon" aria-hidden="true">
        <use href="#icon-home"></use>
      </svg>
      ${t(`page.${MAIN_PAGE}.breadcrumbs`)}
    </a>
    /
    <span>${t(`page.${page}.breadcrumbs`)}</span>
  `;*/
  breadcrumbs.innerHTML = `
    <a href="${buildHash(lang, MAIN_PAGE)}">
      <svg class="icon" aria-hidden="true">
        <use href="#icon-close"></use>
      </svg>
    </a>
  `;
}

function updateHead(page) {
  if (page === MAIN_PAGE || page === ERROR_PAGE) {
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', t(`page.${page}.meta-description`));

  } else {
    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', t(`page.${MAIN_PAGE}.meta-description`));
  }

  document.title = t(`page.${page}.title`);
  
  document
    .querySelector('meta[name="author"]')
    .setAttribute('content', t('meta-author'));

}

function updateLangButtons(activeLang) {
  langButtons.forEach(btn => {
    btn.classList.toggle('current', btn.dataset.lang === activeLang);
  });
}

function updateUI(route) {
  closeMenu();

  let page = route.page;

  if (PROTECTED_PAGES.includes(route.page) && !isAuth()) {
    page = AUTH_PAGE;
  }

  const renderPage = PAGE_RENDERERS[page] || renderNotFound;
  renderPage();

  // печатная машинка
  if (page === MAIN_PAGE) {
    requestAnimationFrame(() => {
      runTypewriter({
        text: t(`page.${MAIN_PAGE}.typetext`),
        speed: 100,
        delay: 1200
      });
    });
  }

  renderMenu(route.lang, route.page);
  renderBreadcrumbs(route.lang, route.page);
  updateHead(route.page);
  updateLangButtons(route.lang);

  const logo = (page, label) =>
    route.page === page
      ? `<span class="current">${label}</span>`
      : `<a href="${buildHash(route.lang, page)}">${label}</a>`;

  logoEl.innerHTML =
    logo(MAIN_PAGE, t('logo'));

  const footerLink = (page, label) =>
    route.page === page
      ? `<span class="current">${label}</span>`
      : `<a href="${buildHash(route.lang, page)}">${label}</a>`;

  legal.innerHTML =
    footerLink(LEGAL_PAGE, t('page.legal.menu'));

  privacy.innerHTML =
    footerLink(PRIVACY_PAGE, t('page.privacy.menu'));

  popupOpen.textContent = t('popup.button');
  footerText.textContent = t('meta-author');
  popupClose.textContent = t('popup.close');

  updateLogoutButton();
}

/* ---------- language switch ---------- */
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.dataset.lang === currentRoute.lang) return;
    location.hash = buildHash(btn.dataset.lang, currentRoute.page);
  });
});

/* ---------- init ---------- */
async function init() {
  setTheme(getTheme());

  currentRoute = await resolveRoute();
  updateUI(currentRoute);

  const elapsed = performance.now() - spinnerStart;
  setTimeout(
    hideSpinner,
    Math.max(0, MIN_SPINNER_TIME - elapsed)
  );

  document.getElementById('current-year').textContent =
    new Date().getFullYear();
}

// в начале app.js
let typewriterTimeouts = [];

// функция typewriter
function runTypewriter({ text, targetId = 'typewriter', speed = 120, delay = 500 }) {
  const target = document.getElementById(targetId);
  if (!target) return;

  // отменяем предыдущие таймауты
  typewriterTimeouts.forEach(id => clearTimeout(id));
  typewriterTimeouts = [];

  target.textContent = '';
  let i = 0;

  const startTimeout = setTimeout(() => {
    function type() {
      if (i < text.length) {
        target.textContent += text[i];
        i++;
        const t = setTimeout(type, speed);
        typewriterTimeouts.push(t);
      }
    }
    type();
  }, delay);

  typewriterTimeouts.push(startTimeout);
}

async function onRouteChange() {
  currentRoute = await resolveRoute();
  updateUI(currentRoute);
}

window.addEventListener('DOMContentLoaded', init);
window.addEventListener('hashchange', onRouteChange);

/* ---------- popup ---------- */
popupOpen.addEventListener('click', () =>
  openPopup(t('popup.content'))
);