// /js/pages/resume.js
import { t } from '../i18n.js';
const content = document.getElementById('content');
export function renderResume() {
  content.innerHTML = `
  <section class="row-section row-section__page">
  <div class="container main-container">
    <div class="left-pagesection">
      <h1>Über mich</h1>
    </div>
    <div class="right-pagesection">
      <div class="section-wrapper">
        <p><strong>Umschüler zum Fachinformatiker (Anwendungsentwicklung) in Deutschland</strong> mit wirtschaftlichem Hintergrund und mehrjähriger Berufserfahrung als Ökonom, Content-Manager, Marketing-Spezialist und Unternehmer. Strukturierte, verantwortungsbewusste und lernorientierte Persönlichkeit mit starkem Interesse an Webentwicklung und IT.</p>
        <p>Ich wurde in der Ukraine geboren. Nach meinem Schulabschluss absolvierte ich eine berufliche Ausbildung und erlangte anschließend ein wirtschaftliches Hochschulstudium. Meine akademische Ausbildung umfasst einen Bachelorabschluss in Betriebswirtschaft sowie ein Diplom als Spezialist im Bereich Finanzen. Beide Abschlüsse sind in Deutschland offiziell anerkannt (Zeugnisbewertung für ausländische Hochschulabschlüsse).</p>
        <p>Nach mehreren Jahren Berufserfahrung als Ökonom und später als selbstständiger Content-Manager und Online-Marketing-Spezialist entschied ich mich für eine berufliche Neuorientierung im Bereich IT und Webentwicklung.</p>
      </div>
    </div>
    </div>
  </section>
  <section class="row-section row-section__page">
  <div class="container main-container">
    <div class="left-pagesection">
      <h2>Berufserfahrung</h2>
    </div>
    <div class="right-pagesection">
      <div class="section-wrapper">
        <h3>Selbstständiger Unternehmer</h3>
        <p class="meta">2021 – 2022 (Ukraine)</p>
        <ul>
          <li>Verkauf von Heizungsanlagen</li>
          <li>Kundenberatung</li>
          <li>Organisation von Einkauf und Vertrieb</li>
        </ul>
        <h3>Freelancer – Content-Manager & Online-Marketing</h3>
        <p class="meta">2014 – 2020 (Ukraine)</p>
        <ul>
          <li>Pflege und Verwaltung von Online-Shops</li>
          <li>Erstellung und Optimierung von Produktinhalten</li>
          <li>Grundlagen SEO und Online-Marketing</li>
        </ul>
        <h3>Ökonom – Wärmeenergieunternehmen „Teploenergo“</h3>
        <p class="meta">2010 – 2014 (Ukraine)</p>
        <ul>
          <li>Wirtschaftliche Analyse</li>
          <li>Kalkulation und Kostenkontrolle</li>
          <li>Arbeit mit Berichten und Kennzahlen</li>
        </ul>
      </div>
    </div>
    </div>
  </section>
  <section class="row-section row-section__page">
  <div class="container main-container">
    <div class="left-pagesection">
      <h2>Ausbildung</h2>
    </div>
    <div class="right-pagesection">
      <div class="section-wrapper">
        <h3>Umschulung zum Fachinformatiker - Anwendungsentwicklung</h3>
        <p class="meta">seit 2026 · GFN GmbH, Essen</p>
        <h3>Vorbereitungskurs zur Umschulung (Zertifikat)</h3>
        <p class="meta">11/2025 – 12/2025 · dama.go GmbH, Essen</p>
        <h3>Deutschkurs für den Beruf – B2 (Zertifikat)</h3>
        <p class="meta">2024 – 2025 · Re/Init, Gelsenkirchen</p>
        <h3>Deutschkurs für Zuwanderer – B1 (Zertifikat)</h3>
        <p class="meta">2023 – 2024 · AWO, Gelsenkirchen</p>
        <h3>Hochschulbildung (anerkannt in Deutschland)</h3>
        <ul>
          <li>Bachelor – Betriebswirtschaft (2004 – 2008)<br>
            <i>Charkiwer Nationale Universität für innere Angelegenheiten, Charkiw</i><br>
            <i>Zeugnisbewertung für ausländische Hochschulabschlüsse vorhanden</i>
          </li>
          <li>Spezialist – Finanzen (2008 - 2009)<br>
            <i>Charkiwer Nationale Universität für innere Angelegenheiten, Charkiw</i><br>
            <i>Zeugnisbewertung für ausländische Hochschulabschlüsse vorhanden</i>
          </li>
        </ul>
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
        <ul>
          <li>HTML (semantisch)</li>
          <li>CSS (Flexbox, Grid, Responsive Design)</li>
          <li>JavaScript (Grundlagen)</li>
          <li>LESS / SASS</li>
          <li>Bootstrap</li>
          <li>BEM Methodologie</li>
          <li>Git</li>
          <li>Webpack (Grundlagen)</li>
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
        <ul>
          <li>Strukturierte und zuverlässige Arbeitsweise</li>
          <li>Hohe Lernbereitschaft</li>
          <li>Teamfähigkeit</li>
          <li>Analytisches Denken</li>
        </ul>
      </div>
    </div>
    </div>
  </section>
  <section class="row-section row-section__page">
  <div class="container main-container">
    <div class="left-pagesection">
      <h2>Sprachen</h2>
    </div>
    <div class="right-pagesection">
      <div class="section-wrapper">
        <ul>
          <li>Russisch – Muttersprache</li>
          <li>Ukrainisch – fließend</li>
          <li>Deutsch – B2 (Zertifikat)</li>
          <li>Englisch – B1</li>
        </ul>
      </div>
    </div>
    </div>
  </section>
  <section class="row-section row-section__page">
  <div class="container main-container">
    <div class="left-pagesection">
      <h2>Hobbys & Sport</h2>
    </div>
    <div class="right-pagesection">
      <div class="section-wrapper">
        <ul>
          <li>Fußball (Hallenfußball)</li>
          <li>Skifahren</li>
          <li>Laufen</li>
          <li>Sammeln von Musikschallplatten</li>
        </ul>
      </div>
    </div>
    </div>
  </section>
  `;
}
