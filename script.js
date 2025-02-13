let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function formatTime() {
    return (
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds
    );
}

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById("startStop").innerHTML = "Start";
    } else {
        timer = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            document.getElementById("time").innerHTML = formatTime();
        }, 1000);

        document.getElementById("startStop").innerHTML = "Stop";
    }
    isRunning = !isRunning;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("time").innerHTML = formatTime();
    document.getElementById("startStop").innerHTML = "Start";
}
