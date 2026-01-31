// 1. Array of names
let names = ["Zaid", "Aman", "Rahul", "Sara"];

function showNames() {
  let list = document.getElementById("nameList");
  list.innerHTML = "";

  for (let i = 0; i < names.length; i++) {
    let li = document.createElement("li");
    li.innerText = names[i];
    list.appendChild(li);
  }
}


// 2. Array of marks
let marks = [78, 85, 90, 66];

function showMarks() {
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  document.getElementById("marksResult").innerText =
    "Total Marks: " + sum;
}


// 3. Real-life example: prices
let prices = [199, 299, 499];

function calculateTotal() {
  let total = 0;

  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }

  document.getElementById("totalResult").innerText =
    "Total Price: ₹" + total;
}

