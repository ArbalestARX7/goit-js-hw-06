const valueRef = document.querySelector("#value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let value = 0;

function onDecrementBtn() {
  value -= 1;
  valueRef.textContent = value;
}

function onIncrementBtn() {
  value += 1;
  valueRef.textContent = value;
}

decrementBtn.addEventListener("click", onDecrementBtn);
incrementBtn.addEventListener("click", onIncrementBtn);
