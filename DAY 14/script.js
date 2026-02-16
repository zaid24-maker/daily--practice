let btn = document.getElementById("divideBtn");
let result = document.getElementById("result");

btn.addEventListener("click", function () {
  try {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
      throw new Error("Please enter valid numbers");
    }

    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }

    let output = a / b;
    result.innerText = "Result: " + output;
    result.style.color = "green";

  } catch (error) {
    result.innerText = error.message;
    result.style.color = "red";
  }
});







