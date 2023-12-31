const buttonSubmit = document.querySelector(".btn");

function checkEmail(e) {
  e.preventDefault();
  const form = document.querySelector(".form");
  const emailToValidate = document.getElementById("email");
  const info = document.querySelector(".info");

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  if (emailToValidate.value === "" || emailToValidate.value === " ") {
    form.classList.add("error");
    info.innerText = "Oops! Please add your email";
  } else if (!validateEmail(emailToValidate.value)) {
    form.classList.add("error");
    info.innerText = "Oops! Please check your email";
  } else {
    form.classList.remove("error");
    info.innerText = "";
  }
}

buttonSubmit.addEventListener("click", checkEmail);
