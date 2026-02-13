// /js/pages/contacts.js
import { t } from '../i18n.js';
const content = document.getElementById('content');
export function renderContacts() {
  content.innerHTML = `
    <section class="row-section row-section__page">
      <div class="container main-container">
        <div class="left-pagesection">
          <h1>${t('contacts-page.h1')}</h1>
        </div>
        <div class="right-pagesection">
          <div class="section-wrapper">
            <div class="card">
              <ul>
                <li>${t('mydata.country')}</li>
                <li>${t('mydata.city')}</li>
                <li>${t('mydata.street')}</li>
              </ul>
            </div>
            <div class="card">
              <ul>
                <li>${t('mydata.email')}</li>
                <li>${t('mydata.telegram')}</li>
                <li>${t('mydata.whatsup')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
