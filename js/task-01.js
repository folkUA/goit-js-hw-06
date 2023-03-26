const catArr = [...document.querySelector("#categories").children];
console.log("Number of categories:", catArr.length);
catArr.forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.childElementCount);
});