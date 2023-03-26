const input = document.querySelector("#validation-input");

input.addEventListener("blur", onBlur);
function onBlur(evt) {
  const input = evt.currentTarget;
  if (input.value.length <= input.dataset.length) {
    input.classList = "valid";
  } else {
    input.classList = "invalid";
  }
}
