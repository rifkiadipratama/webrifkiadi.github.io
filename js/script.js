const form = document.getElementById("form");
const submitButton = document.getElementById("submit-button");

form.addEventListener("button", function(event) {
  event.preventDefault();

  const name = document.getElementById("username").value;
  const email = document.getElementById("password").value;

  if (name && email) {
    window.location.href = "Dashboard.html?name=" + encodeURIComponent(name) + "&email=" + encodeURIComponent(email);
  }
});