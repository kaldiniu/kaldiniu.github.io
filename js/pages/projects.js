// /js/pages/privacy.js
import { t } from '../i18n.js';

export function renderProjects() {
  document.getElementById('content').innerHTML = `
    <section class="row-section row-section__page">
      <div class="container main-container">
        <div class="left-pagesection">
          <h1>${t('page.projects.menu')}</h1>
        </div>
        <div class="right-pagesection">
          <div class="section-wrapper">
            ${t('page.projects.text')}
          </div>
        </div>
      </div>
    </section>
  `;
}
