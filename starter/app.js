const WORK_SECONDS = 0.25 * 60; // 15 seconds for testing
const BREAK_SECONDS = 0.05 * 60;  // 5 seconds for testing

let remaining = WORK_SECONDS;
let isWork = true;
let intervalId = null;
let sessionCount = 0; // Track completed work sessions

const timeEl = document.getElementById('time');
const modeEl = document.getElementById('mode');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const sessionCountEl = document.getElementById('sessionCount');

// Format seconds to MM:SS display
function formatTime(sec){
  const m = Math.floor(sec / 60).toString().padStart(2,'0');
  const s = (sec % 60).toString().padStart(2,'0');
  return `${m}:${s}`;
}

// Update user interface elements
function updateUI(){
  timeEl.textContent = formatTime(remaining);
  modeEl.textContent = isWork ? 'Arbete' : 'Paus';
  sessionCountEl.textContent = sessionCount;
  startBtn.disabled = !!intervalId;
  pauseBtn.disabled = !intervalId;
}

// Timer tick function called every second
function tick(){
  if (remaining > 0){
    remaining -= 1;
    updateUI();
    return;
  }

  // Switch between work and break when timer reaches 0
  if (isWork){
    sessionCount += 1; // Increment completed sessions
    isWork = false;
    remaining = BREAK_SECONDS;
  } else {
    isWork = true;
    remaining = WORK_SECONDS;
  }
  updateUI();
}

// Start the timer
function startTimer(){
  if (intervalId) return;
  intervalId = setInterval(tick, 1000);// Call tick every second
  updateUI();
}

// Pause the timer
function pauseTimer(){
  if (!intervalId) return;
  clearInterval(intervalId);
  intervalId = null;
  updateUI();
}

// Reset timer to initial state
function resetTimer(){
  pauseTimer();
  isWork = true;
  remaining = WORK_SECONDS;
  sessionCount = 0; // Reset session counter
  updateUI();
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateUI();
