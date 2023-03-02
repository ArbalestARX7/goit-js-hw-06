const formRef = document.querySelector(".login-form");
const emailRef = document.querySelector("#email");
const passwordRef = document.querySelector("#password");
const btnRef = document.querySelector("#submit");

formRef.addEventListener("submit", onSubmitBtn);

function onSubmitBtn(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email.length === 0 || password.length === 0) {
    alert("все поля должны быть заполнены!");
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  formRef.reset();
}
