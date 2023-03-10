function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanRef = document.querySelector(".color");
const colorBtn = document.querySelector(".change-color");

colorBtn.addEventListener("click", onColorChangeBtn);

function onColorChangeBtn() {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  spanRef.textContent = document.body.style.backgroundColor;
}
