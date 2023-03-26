const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);
function onBlur(evt) {
 
  const input = evt.currentTarget;

  console.log(typeof Number(input.dataset.length))
  if (input.value.length === Number(input.dataset.length)) {
    input.classList = "valid";
  } else {
    input.classList = "invalid";
  }
}
