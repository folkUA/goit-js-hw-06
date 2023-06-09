const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;
  if (!password.value || !email.value) {
    alert("Всі поля обов'язкові для заповнення");
  } else {
    console.log({ email: email.value, password: password.value });
    evt.currentTarget.reset();
  }
}
