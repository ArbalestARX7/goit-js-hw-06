const categories = document.querySelector("#categories");
const items = document.querySelectorAll(".item");

console.dir(`Number of categories: ${categories.childElementCount}`);
console.log("");

const categoryShower = (items) => {
  items.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
    console.log("");
  });
};

categoryShower(items);
