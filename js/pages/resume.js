// /js/pages/resume.js
import { t } from '../i18n.js';
import { openPopup } from '../components/popup.js';

const content = document.getElementById('content');
export function renderResume() {
  content.innerHTML = `
  <section class="row-section row-section__page">
    <div class="container main-container">
      <div class="left-pagesection">
        <h1>${t('page.resume.about-header')}</h1>
      </div>
      <div class="right-pagesection">
        <div class="section-wrapper">
          <p class="resume-about">${t('page.resume.about-text')}</p>
        </div>
      </div>
    </div>
  </section>
  <section class="row-section row-section__page">
    <div class="container main-container">
      <div class="left-pagesection">
        <h2>${t('page.resume.lang-header')}</h2>
      </div>
      <div class="right-pagesection">
        <div class="section-wrapper">
          <ol class="resume-list">
            <li>${t('page.resume.lang.01')} <i>${t('page.resume.lang.01-level')}</i></li>
            <li>${t('page.resume.lang.02')} <i>${t('page.resume.lang.02-level')}</i></li>
            <li>${t('page.resume.lang.03')} <i>${t('page.resume.lang.03-level')}</i></li>
            <li>${t('page.resume.lang.04')} <i>${t('page.resume.lang.04-level')}</i></li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <section class="row-section row-section__page">
    <div class="container main-container">
      <div class="left-pagesection">
        <h2>Hard Skills</h2>
      </div>
      <div class="right-pagesection">
        <div class="section-wrapper">
          <ul class="resume-skills">
            <li>HTML</li>
            <li>CSS (Flexbox, Grid)</li>
            <li>JavaScript</li>
            <li>LESS / SASS</li>
            <li>Bootstrap</li>
            <li>BEM Methodologie</li>
            <li>Git / GitHub</li>
            <li>Webpack</li>
            <li>npm</li>
            <li>REST, JSON, Fetch</li>
            <li>SPA</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="row-section row-section__page">
    <div class="container main-container">
      <div class="left-pagesection">
        <h2>Soft Skills</h2>
      </div>
      <div class="right-pagesection">
        <div class="section-wrapper">
          <ul class="resume-skills resume-skills__50">
            <li>${t('page.resume.skill.01')}</li>
            <li>${t('page.resume.skill.02')}</li>
            <li>${t('page.resume.skill.03')}</li>
            <li>${t('page.resume.skill.04')}</li>
            <li>${t('page.resume.skill.05')}</li>
            <li>${t('page.resume.skill.06')}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="row-section row-section__page">
    <div class="container main-container">
      <div class="left-pagesection">
        <h2>${t('page.resume.education-header')}</h2>
      </div>
      <div class="right-pagesection">
        <div class="section-wrapper">
          <div class="resume-cards">
            <section class="resume-cards__item">
              <p class="resume-card__year">${t('page.resume.education.year-01')}</p>
              <h3>${t('page.resume.education.name-01')}</h3>
              <p class="resume-card__org">${t('page.resume.education.org-01')}</p>
            </section>
            <section class="resume-cards__item">
              <p class="resume-card__year">${t('page.resume.education.year-02')}</p>
              <h3>${t('page.resume.education.name-02')}</h3>
              <p class="resume-card__org">${t('page.resume.education.org-02')}</p>
              <button class="popup-button-open button" data-src="${t('page.resume.education.doc-02')}">${t('page.resume.education.cert-02')}</button>
            </section>
            <section class="resume-cards__item">
              <p class="resume-card__year">${t('page.resume.education.year-03')}</p>
              <h3>${t('page.resume.education.name-03')}</h3>
              <p class="resume-card__org">${t('page.resume.education.org-03')}</p>
              <button class="popup-button-open button" data-src="${t('page.resume.education.doc-03')}">${t('page.resume.education.cert-03')}</button>
            </section>
            <section class="resume-cards__item">
              <p class="resume-card__year">${t('page.resume.education.year-04')}</p>
              <h3>${t('page.resume.education.name-04')}</h3>
              <p class="resume-card__org">${t('page.resume.education.org-04')}</p>
              <button class="popup-button-open button" data-src="${t('page.resume.education.doc-04')}">${t('page.resume.education.cert-04')}</button>
            </section>
            <section class="resume-cards__item">
              <p class="resume-card__year">${t('page.resume.education.year-05')}</p>
              <h3>${t('page.resume.education.name-05')}</h3>
              <p class="resume-card__org">${t('page.resume.education.org-05')}</p>
            </section>
            <section class="resume-cards__item">
              <p class="resume-card__year">${t('page.resume.education.year-06')}</p>
              <h3>${t('page.resume.education.name-06')}</h3>
              <p class="resume-card__org">${t('page.resume.education.org-06')}</p>
              <button class="popup-button-open button" data-src="${t('page.resume.education.doc-06')}">${t('page.resume.education.cert-06')}</button>
            </section> 
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="row-section row-section__page">
    <div class="container main-container">
      <div class="left-pagesection">
        <h2>${t('page.resume.work-header')}</h2>
      </div>
      <div class="right-pagesection">
        <div class="section-wrapper">
          <div class="resume-cards">
            <section class="resume-cards__item resume-cards-alt">
              <p class="resume-card__year">${t('page.resume.work.year-01')}</p>
              <h3 class="resume-card__name">${t('page.resume.work.name-01')}</h3>
              <p class="resume-card__task">${t('page.resume.work.task-01')}</p>
            </section>
            <section class="resume-cards__item resume-cards-alt">
              <p class="resume-card__year">${t('page.resume.work.year-02')}</p>
              <h3 class="resume-card__name">${t('page.resume.work.name-02')}</h3>
              <p class="resume-card__task">${t('page.resume.work.task-02')}</p>
            </section>
            <section class="resume-cards__item resume-cards-alt">
              <p class="resume-card__year">${t('page.resume.work.year-03')}</p>
              <h3 class="resume-card__name">${t('page.resume.work.name-03')}</h3>
              <p class="resume-card__task">${t('page.resume.work.task-03')}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="row-section row-section__page">
    <div class="container main-container">
      <div class="left-pagesection">
        <h2>${t('page.resume.hobby-header')}</h2>
      </div>
      <div class="right-pagesection">
        <div class="section-wrapper">
          <ul class="resume-list">
            <li>${t('page.resume.hobby.01')}</li>
            <li>${t('page.resume.hobby.02')}</li>
            <li>${t('page.resume.hobby.03')}</li>
            <li>${t('page.resume.hobby.04')}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  `;

    content.onclick = e => {
      const card = e.target.closest('.popup-button-open');
      if (!card) return;
  
      const img = document.createElement('img');
      img.src = card.dataset.src;
      openPopup(img);
    };
}
