const login = document.querySelector(".loginBtn");
const email = document.querySelector(".emailSize");
const password = document.querySelector(".passSize");
const regis = document.querySelector(".registerBtn");

const visible = document.querySelector(".login");

login.addEventListener("click", () => {
  if (validateEmail(email.value) && validatePassword(password.value)) {
    console.log("click");
    window.location.href = "menu.html";
  }
});

regis.addEventListener("click", () => {
  window.location.href = "register.html";
});

function validateEmail(email) {
  if (email === "TravelwithFaiz@gmail.com") {
    return true;
  } else {
    alert("This email does not exist. Please register.");
    return false;
  }
}

function validatePassword(password) {
  if (password == 12345678) {
    return true;
  } else {
    alert("Wrong Password ");
    return false;
  }
}
