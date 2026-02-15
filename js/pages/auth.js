// /js/pages/auth.js
import { t } from '../i18n.js';
import { login } from '../auth.js';

const content = document.getElementById('content');

export function renderAuth() {
  content.innerHTML = `
      <section class="row-section row-section__auth">
        <div class="container main-container">
          <div class="left-pagesection">
            <h1 class="logo logo__auth">${t('logo-alt')}</h1>
          </div>
          <div class="right-pagesection">
            <div class="section-wrapper">
              <h2>${t('auth.title')}</h2>
              <p id="auth-text">${t('auth.text')}</p>
              <form id="auth-form">
                <input type="password" id="auth-password" placeholder="${t('auth.password')}" required><button type="submit" class="login-btn button" aria-label="Log in">${t('auth.submit')}</button>
                <p id="auth-error"></p>
              </form>
            </div>
          </div>
        </div>
      </section>
  `;

  document.getElementById('auth-form').onsubmit = async e => {
    e.preventDefault();

    const pwd = document.getElementById('auth-password').value;
    const error = document.getElementById('auth-error');

    const success = await login(pwd);

    if (success) {
      location.reload(); // ок, пусть так
    } else {
      error.textContent = t('auth.error');
    }
  };
}
