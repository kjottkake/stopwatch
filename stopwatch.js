//selects stopwatch ui element
const watch = document.querySelector("#stopwatch");
const testTimer = document.querySelector("#testTimer");
//defines variables
let millisecound = 0;
let timer;

let second = 0;

//start time function
function timeStart() {
    watch.style.color = "#0f62fe";
    clearInterval(timer);
    timer = setInterval(() => {
        millisecound += 10;
        // second += 1000;
        testTimer.innerHTML = millisecound / 1000; //my code to test what miliseconds looks like
        // testTimer.innerHTML = second;
        let dateTimer = new Date(millisecound);

        watch.innerHTML =
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, 10);
}


//pause time function
function timePaused() {
    watch.style.color = "red";
    clearInterval(timer);
}

function timeReset() {
    setInterval(timer)
    millisecound = 0;
    watch.innerHTML = "00:00:00:00";
}

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.id === 'start') timeStart();
    if (el.id === 'pause') timePaused();
    if (el.id === 'reset') timeReset();
})