// 1. Simple function
function sayHello() {
  document.getElementById("helloResult").innerText =
    "Hello! Welcome to JavaScript 🚀";
}


// 2. Even or Odd
function checkEvenOdd() {
  let number = document.getElementById("num").value;

  if (number === "") {
    document.getElementById("result").innerText = "Please enter a number";
    return;
  }

  if (number % 2 === 0) {
    document.getElementById("result").innerText = "Even Number";
  } else {
    document.getElementById("result").innerText = "Odd Number";
  }
}


// 3. Voting eligibility
function checkVote() {
  let age = document.getElementById("age").value;

  if (age === "") {
    document.getElementById("voteResult").innerText = "Please enter age";
    return;
  }

  if (age >= 18) {
    document.getElementById("voteResult").innerText =
      "Eligible to vote ✅";
  } else {
    document.getElementById("voteResult").innerText =
      "Not eligible to vote ❌";
  }
}
