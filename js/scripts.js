const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", toggleTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer() {
  interval = setInterval(() => {
    if (!isPaused) {
      milliseconds += 10;
      if (milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds === 60) {
        minutes++;
        seconds = 0;
      }
      minutesEl.textContent = formatTime(minutes);
      secondsEl.textContent = formatTime(seconds);
      millisecondsEl.textContent = formatMilliseconds(milliseconds);
    }
  }, 10);

  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
}

function toggleTimer() {
  isPaused = !isPaused;
  if (isPaused) {
    clearInterval(interval);
    pauseBtn.textContent = "Continuar";
  } else {
    startTimer();
    pauseBtn.textContent = "Pausar";
  }
}

function resetTimer() {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  minutesEl.textContent = formatTime(minutes);
  secondsEl.textContent = formatTime(seconds);
  millisecondsEl.textContent = formatMilliseconds(milliseconds);
  pauseBtn.style.display = "none";
  startBtn.style.display = "block";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(time) {
  return time < 100 ? `${time}`.padStart(3, "0") : time;
}
