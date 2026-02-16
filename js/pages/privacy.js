// /js/pages/privacy.js
import { t } from '../i18n.js';

export function renderPrivacy() {
  document.getElementById('content').innerHTML = `
    <section class="row-section row-section__page">
      <div class="container main-container">
        <div class="left-pagesection">
          <h1>${t('page.privacy.menu')}</h1>
        </div>
        <div class="right-pagesection">
          <div class="section-wrapper">
            <p>${t('page.privacy.text')}</p>
            <p>${t('name')}</p>
            <p>${t('address')}</p>
            <p>${t('email')}</p><br>
            <p>${t('page.privacy.text1')}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
