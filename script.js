let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('timer').innerText = '00:00:00';
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }
    const formattedTime = 
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');
    document.getElementById('timer').innerText = formattedTime;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
