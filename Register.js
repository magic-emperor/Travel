const button = document.querySelector(".button");
const fullName = document.querySelector(".fullName");
const cont = document.querySelector(".cont");
const DOB = document.querySelector(".DOB");
const mail = document.querySelector(".mail");
const password = document.querySelector(".password");

button.addEventListener("click", () => {
  if (
    validateFullName(fullName.value) &&
    validateContactNumber(cont.value) &&
    DOB.value &&
    validateEmail(mail.value) &&
    validatePassword(password.value)
  ) {
    window.location.href = "menu.html";
  }
});

function validateFullName(name) {
  return name.trim() !== "";
}

function validateContactNumber(contact) {
  if (/^\d{10}$/.test(contact)) {
    return true;
  } else {
    alert("Please check contact number");
    return false;
  }
}

function validateEmail(email) {
  if (/\S+@\S+\.\S+/.test(email)) {
    return true;
  } else {
    alert("Please check Email ID");
    return false;
  }
}

function validatePassword(password) {
  if (password.length >= 8) {
    return true;
  } else {
    alert("Password should be 8 or more");
    return false;
  }
}
