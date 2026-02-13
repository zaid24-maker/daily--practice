let input = document.getElementById("username");
let output = document.getElementById("output");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");

// Load saved name on page load
let savedName = localStorage.getItem("username");

if (savedName) {
  output.innerText = "Welcome back, " + savedName + " 👋";
}

// Save to localStorage
saveBtn.addEventListener("click", function () {
  let name = input.value.trim();

  if (name === "") {
    output.innerText = "Please enter a name ❌";
    return;
  }

  localStorage.setItem("username", name);
  output.innerText = "Saved! Hello " + name + " ✅";
});

// Clear localStorage
clearBtn.addEventListener("click", function () {
  localStorage.removeItem("username");
  output.innerText = "Data cleared ❌";
});






