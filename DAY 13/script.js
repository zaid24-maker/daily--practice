// Countdown using setInterval
let countdownEl = document.getElementById("countdown");
let startBtn = document.getElementById("startTimer");

startBtn.addEventListener("click", function () {
  let time = 5;

  countdownEl.innerText = time;

  let intervalId = setInterval(function () {
    time--;
    countdownEl.innerText = time;

    if (time === 0) {
      clearInterval(intervalId);
      countdownEl.innerText = "Time's up! ⏰";
    }
  }, 1000);
});


// setTimeout example
let msgBtn = document.getElementById("showMsg");
let msgEl = document.getElementById("message");

msgBtn.addEventListener("click", function () {
  msgEl.innerText = "Loading...";

  setTimeout(function () {
    msgEl.innerText = "Hello after 3 seconds 👋";
  }, 3000);
});






