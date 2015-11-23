'use strict';

document.addEventListener(`DOMContentLoaded`, (ev) => {
  const $$ = (selector) => document.querySelector(selector)
      , converge = (ev) => {
          ev.target.style.transform  = `rotate(360deg) scale(0, 0)`;
        }
      ;

  $$(`#logo`).addEventListener(`click`,      converge, true);
  $$(`#logo`).addEventListener(`touchstart`, converge, true);
  $$(`#logo`).addEventListener(`transitionend`, (ev) => {
    location.href = "https://twitter.com/hashedhyphen";
  },  true);
});
