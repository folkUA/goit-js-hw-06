const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");
let str = "";
ingredients.forEach((item) => {
  const li = document.createElement("li");
  li.classList = "item";
  li.textContent = item;
  ul.append(li)
});


