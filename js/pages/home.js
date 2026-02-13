// /js/pages/home.js
import { t } from '../i18n.js';
const content = document.getElementById('content');
export function renderHome() {
  content.innerHTML = `
      <section class="row-section row-section__home">
        <div class="container main-container">
          <div class="left-pagesection">
            <h1 class="logo logo__home">${t('mydata.logo-alt')}</h1>
          </div>
          <div class="right-pagesection">
            <div class="section-wrapper">
              <div class="typewriter">
                <span class="brackets">&lt;code&gt;</span>
                  <p class="code-text">${t('home-page.text')} <span id="typewriter"></span><span class="cursor">|</span></p>
                <span class="brackets">&lt;/code&gt;</span>
              </div>
              <div class="home-data">
                <span>${t('mydata.country')}</span>
                <span>${t('mydata.city')}</span>
                <span>${t('mydata.email')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  `;
}
