// /js/pages/documents.js
import { t } from '../i18n.js';
import { openPopup } from '../components/popup.js';

const content = document.getElementById('content');

const DOCUMENTS = [
  {
    name: 'certificate-b2',
    authority: 'authority-b2',
    city: 'city-certificate',
    img: 'certificate-b2.jpg',
    period: '2024'
  },
  {
    name: 'certificate-b1',
    authority: 'authority-b1',
    city: 'city-certificate',
    img: 'certificate-b1.jpg',
    period: '2023'
  },
  {
    name: 'diplom-specialist-zab',
    authority: 'authority-zab',
    city: 'city-zab',
    img: 'zab-2.jpg',
    period: '2024'
  },
  {
    name: 'diplom-bachelor-zab',
    authority: 'authority-zab',
    city: 'city-zab',
    img: 'zab-1.jpg',
    period: '2024'
  },
  {
    name: 'diplom-specialist',
    authority: 'authority-diplom',
    city: 'city-diplom',
    img: 'diplom.jpg',
    period: '2008–2009'
  },
  {
    name: 'diplom-bachelor',
    authority: 'authority-diplom',
    city: 'city-diplom',
    img: 'diplom.jpg',
    period: '2004–2008'
  }
];

function renderCard({ name, authority, city, img, period }) {
  return `
    <div class="card card-documents" data-src="./assets/images/${img}">
      <h2>${t(`documents-page.${name}`)}</h2>
      <ul>
        <li>${t(`documents-page.${authority}`)}</li>
        <li>${t(`documents-page.${city}`)}</li>
        <li>${period}</li>
      </ul>
      <img src="./assets/images/${img}" alt="${name}">
    </div>
  `;
}

export function renderDocuments() {
  content.innerHTML = `
      <section class="row-section row-section__page">
        <div class="container main-container">
          <div class="left-pagesection">
            <h1>${t('documents-page.h1')}</h1>
          </div>
          <div class="right-pagesection">
            <div class="section-wrapper">
              <section class="cards">
                ${DOCUMENTS.map(renderCard).join('')}
              </section>
            </div>
          </div>
        </div>
      </section>
  `;

  content.onclick = e => {
    const card = e.target.closest('.card-documents');
    if (!card) return;

    const img = document.createElement('img');
    img.src = card.dataset.src;
    openPopup(img);
  };
}

