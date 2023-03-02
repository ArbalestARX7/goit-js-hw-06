function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const a = document.querySelector("#boxes");

const b = document.createElement("h1");
b.textContent = "ДОДЕЛАЮ КОГДА ВЫРОВНЯЮСЬ ПО ДОМАШКАМ:(";
a.appendChild(b);
