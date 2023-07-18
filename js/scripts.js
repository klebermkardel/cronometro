const minutesEl = document.querySelector("minutes")
const secondsEl = document.querySelector("seconds")
const millisecondsEl = document.querySelector("minutes")
const startBtn = document.querySelector("startBtn")
const pauseBtn = document.querySelector("pauseBtn")
const resumeBtn = document.querySelector("resumeBtn")
const resetBtn = document.querySelector("resetBtn")

let minutes = 0
let seconds = 0
let milliseconds = 0
let isPauses = false;