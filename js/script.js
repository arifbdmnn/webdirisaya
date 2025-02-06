// Elements
const loginBox = document.getElementById("loginBox");
const aboutSection = document.getElementById("aboutSection");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const logoutButton = document.getElementById("logoutButton");

// Login Logic
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "arif" && password === "123") {
    loginBox.style.display = "none";
    aboutSection.style.display = "block";
  } else {
    loginMessage.textContent = "Invalid username or password.";
    loginMessage.style.color = "red";
  }
});

// Logout Logic
logoutButton.addEventListener("click", function () {
  aboutSection.style.display = "none";
  loginBox.style.display = "block";
  loginForm.reset();
  loginMessage.textContent = "";
});