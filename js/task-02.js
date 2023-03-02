const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredList = document.querySelector("#ingredients");

const ingredientsCreator = (ingredients) =>
  ingredients.map((ingredient) => {
    const ingredItem = document.createElement("li");
    ingredItem.classList.add("item");
    ingredItem.textContent = ingredient;

    return ingredItem;
  });

ingredList.append(...ingredientsCreator(ingredients));
