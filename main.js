const startButton = document.getElementById('start'); //スタートボタン
const stopButton = document.getElementById('stop');　//ストップボタン
const resetButton = document.getElementById('reset'); //リセットボタン
const watchTime = document.getElementById('time');　//表示時間

let startTime;
let stopTime = 0;
let timeoutID;

function displayTime(){
    const currentTime = new Date(Date.now() - startTime + stopTime);
    const h = String(currentTime.getHours() -9).padStart(1, '0');
    const m = String(currentTime.getMinutes()).padStart(1, '0');
    const s = String(currentTime.getSeconds()).padStart(1,'0');
    const ms = String(currentTime.getMilliseconds()).padStart(1,'0');
    
    watchTime.textContent = `${h}:${m}:${s}.${ms}`;
    timeoutID = setTimeout(displayTime, 10);
}

startButton.addEventListener('click',() => {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    startTime = Date.now();
    displayTime();
});

stopButton.addEventListener('click',function(){
    startButton.disabled = true;
    stopButton.disabled = true;
    resetButton.disabled = false;
    clearTimeout(timeoutID);
    stopTime += ((Date.now) - startTime);
});

resetButton.addEventListener('click',function(){
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    watchTime.textContent = '0:0:0.0';
    stopTime = 0;
});