// /js/pages/privacy.js
import { t } from '../i18n.js';

export function renderLegal() {
  document.getElementById('content').innerHTML = `
    <section class="row-section row-section__page">
      <div class="container main-container">
        <div class="left-pagesection">
          <h1>${t('legal-page.h1')}</h1>
        </div>
        <div class="right-pagesection">
          <div class="section-wrapper">
            <p>${t('legal-page.text')}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
