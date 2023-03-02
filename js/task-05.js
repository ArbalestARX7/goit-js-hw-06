const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

function onInputChange(event) {
  spanRef.textContent = event.currentTarget.value;
  if (spanRef.textContent === "") {
    spanRef.textContent = "Anonymous";
  }
}

console.log(spanRef.textContent);
inputRef.addEventListener("input", onInputChange);
