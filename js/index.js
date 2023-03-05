document.getElementById('num-count-secent').addEventListener('click', function () {
    console.log('click btn');
})

let secent = 0;

const inntervalSecendId = setInterval(() => {
    secent += 1;
    if (secent < 60) {
        document.getElementById('num-count-secent').innerText = secent;
    } else {
        return secent = -1;
    }


}, 1000);
let minit = 0;

const inntervalMinitId = setInterval(() => {
    minit++;

    if (secent < 60) {
        document.getElementById('num-count-minit').innerText = minit;
    } else {
        return secent = -1;
    }

}, 60000);
let hour = 0;

const inntervalHourId = setInterval(() => {
    hour++;

    if (secent < 12) {
        document.getElementById('num-count-hour').innerText = hour;
    } else {
        return secent = 0;
    }

}, 36000000)
document.getElementById('timer-btn').addEventListener('click', function () {
    window.location.href = '../timer.html';

})