const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

function onInputChange(event) {
  spanRef.textContent = event.currentTarget.value;
}

inputRef.addEventListener("input", onInputChange);
