const toggleBtn = document.querySelector('button.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu li');

toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const code = urlParams.get('lang');
const lang = code ? code.toUpperCase() : 'ES';

function switchLang(lang) {
  const elements = document.querySelectorAll(`[data-lang]`);
  elements.forEach(element => {
    const attr = element.getAttribute('data-lang');
    if (attr === lang)
      element.classList.remove('hidden');
    else
      element.classList.add('hidden');
  });
}
switchLang(lang);

const langBtns = document.querySelectorAll('.language a');
langBtns.forEach(element => {
  const lang = element.getAttribute('data-target');
  element.addEventListener('click', () => {
    switchLang(lang);
  });
});

