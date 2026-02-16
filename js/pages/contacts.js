// /js/pages/contacts.js
import { t } from '../i18n.js';
import { openPopup } from '../components/popup.js';

const content = document.getElementById('content');

export function renderContacts() {
  content.innerHTML = `
    <section class="row-section row-section__page">
      <div class="container main-container">
        <div class="left-pagesection">
          <h1>${t('page.contacts.h1')}</h1>
        </div>
        <div class="right-pagesection">
          <div class="section-wrapper">
            <form id="contact-form">
              <label>${t('page.contacts.name')}</label>
              <input type="text" name="name" required>
              <label>E-Mail:</label>
              <input type="email" name="email" required>
              <label>${t('page.contacts.message')}</label>
              <textarea name="message" required></textarea>
              <p class="agree">${t('page.contacts.text')}</p>
              <button class="send-btn button" type="submit">${t('page.contacts.send')}</button>
            </form>
            <div class="main-data">
              <span>${t('country')}</span>
              <span>${t('city')}</span>
              <span>${t('email')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const spinner = document.getElementById('spinner'); // глобальный

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const spinner = document.getElementById('spinner');

    spinner.classList.remove('hidden');

    try {
      const response = await fetch('https://formspree.io/f/mjgewzwp', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        openPopup(`
          <p>${t('page.contacts.message-success')}
        `);
        form.reset();
      } else {
        openPopup(`
          <p>${t('page.contacts.message-error')}
        `);
      }

    } catch (err) {
      openPopup(`
        <p>${t('page.contacts.message-error2')}
      `);
    } finally {
      spinner.classList.add('hidden');
    }
  });
}
