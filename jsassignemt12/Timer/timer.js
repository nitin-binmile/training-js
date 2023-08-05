let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function updateTimerDisplay(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  document.getElementById("timer").innerHTML = `${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      const currentTime = Date.now();
      elapsedTime = (currentTime - startTime) / 1000;
      updateTimerDisplay(elapsedTime);
    }, 1000);
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function stopTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    updateTimerDisplay(elapsedTime);
  }
}

// Attach event listeners to buttons
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("pauseBtn").addEventListener("click", pauseTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
