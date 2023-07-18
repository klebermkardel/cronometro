const minutesEl = document.querySelector("minutes")
const secondsEl = document.querySelector("seconds")
const millisecondsEl = document.querySelector("minutes")
const startBtn = document.querySelector("startBtn")
const pauseBtn = document.querySelector("pauseBtn")
const resumeBtn = document.querySelector("resumeBtn")
const resetBtn = document.querySelector("resetBtn")

let interval
let minutes = 0
let seconds = 0
let milliseconds = 0
let isPaused = false;

startBtn.addEventListener("click", startTimer)

function startTime() {
    interval = setInterval(() => {
        if(!isPaused) {
            milliseconds += 10
            if(milliseconds === 1000) {
                seconds++
                milliseconds = 0
            }
        }
    }, 10)
}