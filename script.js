let startTime = 0;
let elapsedTime = 0;
let interval;
let isRunning = false;

function formatTime(time) {
    let milliseconds = Math.floor((time % 1000) / 10);
    let seconds = Math.floor((time / 1000) % 60);
    let minutes = Math.floor((time / (1000 * 60)) % 60);
    let formattedTime = 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds + ":" + 
        (milliseconds < 10 ? "0" : "") + milliseconds;
    return formattedTime;
}

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(function () {
            elapsedTime = Date.now() - startTime;
            document.getElementById("display").innerText = formatTime(elapsedTime);
        }, 10);
        isRunning = true;
    }
}

function pauseStopwatch() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
    }
}

function resetStopwatch() {
    clearInterval(interval);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    if (isRunning) {
        const lapTime = formatTime(elapsedTime);
        const lapItem = document.createElement("div");
        lapItem.innerText = `Lap: ${lapTime}`;
        document.getElementById("laps").appendChild(lapItem);
    }
}
