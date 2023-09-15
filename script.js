const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const seconds = document.querySelector(".seconds");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");

let intervalId;
let h = 0;
let m = 0;
let s = 0;

startBtn.addEventListener("click", stopWatch);
function stopWatch() {
  intervalId = setInterval(() => {
    s++;
    if (s >= 60) {
      m++;
      s = 0;
    }
    if (m >= 60) {
      s++;
      m = 0;
    }
    hour.textContent = pad(h);
    minute.textContent = pad(m);
    seconds.textContent = pad(s);
  }, 1000);
}
pauseBtn.addEventListener("click", function () {
  clearInterval(intervalId);
});
resetBtn.addEventListener("click", function () {
  h = s = m = 0;

  hour.textContent = pad(h);
  minute.textContent = pad(m);
  seconds.textContent = pad(s);
});

function pad(time) {
  return time.toString().padStart(2, 0);
}
