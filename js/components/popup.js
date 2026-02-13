// /js/components/popup.js
const popupBg = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const popupClose = document.getElementById('popup-botton-close');

const ALLOWED_TAGS = ['B', 'STRONG', 'P', 'BR', 'EM', 'I'];

function sanitizeHTML(html) {
  const tpl = document.createElement('template');
  tpl.innerHTML = html;

  tpl.content.querySelectorAll('*').forEach(el => {
    if (!ALLOWED_TAGS.includes(el.tagName)) {
      el.replaceWith(document.createTextNode(el.textContent));
    } else {
      [...el.attributes].forEach(attr => {
        el.removeAttribute(attr.name);
      });
    }
  });

  return tpl.content;
}

export function openPopup(content) {
  popupContent.innerHTML = '';

  if (typeof content === 'string') {
    popupContent.append(sanitizeHTML(content));
  } else if (content instanceof HTMLElement) {
    popupContent.append(content);
  }

  popupBg.classList.add('open');
  popupBg.classList.remove('hidden');
  popupBg.setAttribute('role', 'dialog');
  popupBg.setAttribute('aria-modal', 'true');
}

export function closePopup() {
  popupBg.classList.remove('open');
  popupBg.classList.add('hidden');
}

popupClose.addEventListener('click', closePopup);
popupBg.addEventListener('click', e => {
  if (e.target === popupBg) closePopup();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closePopup();
});
