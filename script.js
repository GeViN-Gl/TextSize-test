// const btns = document.querySelectorAll(`.btn`);
const parent = document.querySelector(`.container`);
const textEl = document.querySelector(`.header`);
const desireFontSize = document.querySelector(`.input-field`);
const formEl = document.querySelector(`.form`);
let fontSize = 10;

/// init

const changeFontSize = (size) => {
  if (size <= 1) return;

  textEl.style.fontSize = `${size}rem`;
  return size;
};

changeFontSize(10);

///

const fnName = function (e) {
  e.preventDefault();

  const btn = e.target.closest(`.btn`);

  if (!btn) return;
  console.log(btn);
  ///
  if (btn.classList.contains(`btn--min`)) fontSize = changeFontSize(--fontSize);
  if (btn.classList.contains(`btn--pls`)) fontSize = changeFontSize(++fontSize);
  if (btn.classList.contains(`btn--nor`)) fontSize = changeFontSize(10);
  if (btn.classList.contains(`btn--rnd`))
    fontSize = changeFontSize(Math.floor(Math.random() * 25));

  console.log(this);
};

///
parent.addEventListener(`click`, fnName);

formEl.addEventListener(`submit`, function (e) {
  e.preventDefault();
  let val = formEl.querySelector(`.input-field`).value;
  val = val / 10;
  console.log(val);
  if (+val <= 1) return;

  fontSize = changeFontSize(+val);
});
