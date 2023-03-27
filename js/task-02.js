const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.querySelector("#ingredients");

function attachLi(arr) {
  const result = [];
  arr.forEach((item) => {
    const li = document.createElement("li");
    li.classList = "item";
    li.textContent = item;
    result.push(li);
  });
  return result;
}

ul.append(...attachLi(ingredients));
