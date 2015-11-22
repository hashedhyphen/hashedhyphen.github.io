'use strict';

document.addEventListener(`DOMContentLoaded`, (ev) => {
  const $$ = (selector) => document.querySelector(selector)
      , rotate = (ev) => ev.target.style.transform = `rotate(360deg)`
      , reset  = (ev) => ev.target.style.transform = `rotate(0deg)`
      ;

  $$(`#logo`).style.transform = `rotate(0deg)`;
  $$(`#logo`).addEventListener(`click`,         rotate, true);
  $$(`#logo`).addEventListener(`touchstart`,    rotate, true);
  $$(`#logo`).addEventListener(`transitionend`, reset,  true);
});
