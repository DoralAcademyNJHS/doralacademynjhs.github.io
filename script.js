function signUp() {
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  if (!name || !email || !password) {
    document.getElementById("authMessage").textContent = "Please fill out all signup fields.";
    return;
  }

  localStorage.setItem("njhsName", name);
  localStorage.setItem("njhsEmail", email);
  localStorage.setItem("njhsPassword", password);
  localStorage.setItem("njhsLoggedIn", "true");

  document.getElementById("authMessage").textContent = "Account created. You are now logged in.";
}

function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const savedEmail = localStorage.getItem("njhsEmail");
  const savedPassword = localStorage.getItem("njhsPassword");

  if (email === savedEmail && password === savedPassword) {
    localStorage.setItem("njhsLoggedIn", "true");
    document.getElementById("authMessage").textContent = "Login successful.";
  } else {
    document.getElementById("authMessage").textContent = "Incorrect email or password.";
  }
}

function logout() {
  localStorage.setItem("njhsLoggedIn", "false");
  document.getElementById("authMessage").textContent = "You have been logged out.";
}

window.addEventListener("DOMContentLoaded", function () {
  const authButton = document.querySelector(".auth-button");
  const loggedIn = localStorage.getItem("njhsLoggedIn");
  const name = localStorage.getItem("njhsName");

  if (authButton && loggedIn === "true" && name) {
    authButton.textContent = "Logged in: " + name;
  }
});
