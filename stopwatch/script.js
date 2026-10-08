const timer = document.getElementById("timer");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let count = 0;
let intervalId;
let isRunning = false;

function formatTime(count) {
    const seconds = count % 60;
    const totalMin = Math.floor(count / 60);
    const hours = Math.floor(totalMin / 60);
    const minutes = totalMin % 60;

    return (String(hours).padStart(2, "0") + ":" + String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0"));
}

startButton.addEventListener("click", function () {
    if (isRunning) return;
    timer.textContent = formatTime(count);
    intervalId = setInterval(function () {
        count++;
        timer.textContent = formatTime(count);
    }, 1000);
    isRunning = true;
});

pauseButton.addEventListener("click", function () {
    if (!isRunning) return;
    clearInterval(intervalId);
    isRunning = false;
})

resetButton.addEventListener("click", function () {
    clearInterval(intervalId);
    count = 0;
    isRunning = false;
    timer.textContent = formatTime(count);
})