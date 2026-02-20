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
            <ul class="projects-list">
              <li><a href="projects/03-number-generator">Number generator</a></li>
              <li><a href="projects/02-simple-calculator">Simple calculator</a></li>
              <li><a href="projects/01-click-counter">Click Counter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;
}
