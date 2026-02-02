// Calculator functions
function add() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  document.getElementById("output").innerText =
    "Result: " + (a + b);
}

function subtract() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  document.getElementById("output").innerText =
    "Result: " + (a - b);
}

function multiply() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);

  document.getElementById("output").innerText =
    "Result: " + (a * b);
}


// Name display
function showName() {
  let name = document.getElementById("username").value;

  if (name === "") {
    document.getElementById("nameOutput").innerText =
      "Please enter your name";
    return;
  }

  document.getElementById("nameOutput").innerText =
    "Hello, " + name + " 👋";
}

