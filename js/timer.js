let countInterValId;
let count = 0;


document.getElementById('start-btn').addEventListener('click', function () {
    countInterValId = setInterval(() => {
        count++;
        document.getElementById('num-count').innerText = count;

    }, 1000);
})
document.getElementById('push-btn').addEventListener('click', function () {
    clearInterval(countInterValId);
})
document.getElementById('restart-btn').addEventListener('click', function () {
    count = 0;
    const zero = '00';
    clearInterval(countInterValId);
    document.getElementById('num-count').innerText = zero;
})


document.getElementById('bank-clock-btn').addEventListener('click', function () {
    window.location.href = '../index.html';

})