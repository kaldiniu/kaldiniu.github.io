// /js/pages/notFound.js
import { t } from '../i18n.js';
const content = document.getElementById('content');
export function renderNotFound() {
  content.innerHTML = `
    <section class="row-section row-section__page">
      <div class="container main-container">
        <div class="left-pagesection">
          <h1>${t('page.404.h1')}</h1>
        </div>
        <div class="right-pagesection">
          <div class="section-wrapper">
            <p>${t('page.404.text')}</p>
          </div>
        </div>
      </div>
    </section>
    `;
}
