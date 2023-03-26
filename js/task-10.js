function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const control = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const btnCreate = control.querySelector("[data-create]");

btnCreate.addEventListener("click", onClick);
control.lastElementChild.addEventListener("click", onClick);

function onClick(evt) {
  const btn = evt.currentTarget;
  if (btn.dataset === btnCreate.dataset) {
    boxes.insertAdjacentHTML(
      "beforeend",
      createBox(control.firstElementChild.value)
    );
    boxStyle([...boxes.children]);
  } else {
    boxes.innerHTML = "";
  }
}

function createBox(arg) {
  let str = "";
  for (let i = 0; i < arg; i += 1) {
    str += `<div></div>`;
  }
  return str;
}

function boxStyle(arr) {
  let count = 0;
  arr.forEach((item) => {
    count += 30;
    item.style.backgroundColor = getRandomHexColor();
    item.style.width = `${count}px`;
    item.style.height = `${count}px`;
  });
}
