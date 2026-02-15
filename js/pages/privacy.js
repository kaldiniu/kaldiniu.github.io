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
            ${t('page.privacy.text')}
          </div>
        </div>
      </div>
    </section>
  `;
}
