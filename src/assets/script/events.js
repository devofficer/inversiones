console.log("start");

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


function animate(obj, initVal, lastVal, duration) {
  let startTime = null;

  //get the current timestamp and assign it to the currentTime variable
  let currentTime = Date.now();

  //pass the current timestamp to the step function
  const step = (currentTime ) => {
    //if the start time is null, assign the current time to startTime
    if (!startTime) {
      startTime = currentTime ;
    }

    //calculate the value to be used in calculating the number to be displayed
    const progress = Math.min((currentTime - startTime) / duration, 1);

    //calculate what to be displayed using the value gotten above
    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal).toLocaleString('en-US', {style:"currency", currency:"EUR", minimumFractionDigits: 3});

    //checking to make sure the counter does not exceed the last value (lastVal)
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };

//start animating
  window.requestAnimationFrame(step);
}

const counter = document.querySelector("#counter");
console.log(counter);
animate(counter, 0, 300, 5000);
