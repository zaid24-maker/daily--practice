let form = document.getElementById("signupForm");
let message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (name === "" || email === "" || password === "") {
    message.innerText = "All fields are required ❌";
    message.style.color = "red";
    return;
  }

  if (password.length < 6) {
    message.innerText = "Password must be at least 6 characters ❌";
    message.style.color = "red";
    return;
  }

  message.innerText = "Signup successful ✅";
  message.style.color = "green";
});





