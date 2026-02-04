// Array of user objects
let users = [
  { name: "Zaid", age: 22, role: "Frontend Developer" },
  { name: "Aman", age: 21, role: "Backend Developer" },
  { name: "Sara", age: 23, role: "Full Stack Developer" }
];

let button = document.getElementById("showUsers");
let container = document.getElementById("userContainer");

button.addEventListener("click", function () {
  container.innerHTML = "";

  users.forEach(function (user) {
    let div = document.createElement("div");
    div.style.border = "1px solid black";
    div.style.margin = "10px";
    div.style.padding = "10px";

    div.innerHTML = `
      <p><strong>Name:</strong> ${user.name}</p>
      <p><strong>Age:</strong> ${user.age}</p>
      <p><strong>Role:</strong> ${user.role}</p>
    `;

    container.appendChild(div);
  });
});



