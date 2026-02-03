// Select elements
let addBtn = document.getElementById("addBtn");
let subBtn = document.getElementById("subBtn");
let nameBtn = document.getElementById("nameBtn");

// Calculator logic
addBtn.addEventListener("click", function () {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  document.getElementById("result").innerText =
    "Result: " + (a + b);
});

subBtn.addEventListener("click", function () {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  document.getElementById("result").innerText =
    "Result: " + (a - b);
});

// Name display logic
nameBtn.addEventListener("click", function () {
  let name = document.getElementById("username").value;

  if (name === "") {
    document.getElementById("nameResult").innerText =
      "Please enter your name";
    return;
  }

  document.getElementById("nameResult").innerText =
    "Hello, " + name + " 👋";
});


