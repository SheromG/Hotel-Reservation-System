const timer = document.querySelector('#timer');

const countDownDate = new Date("Jan 1, 2023 23:59:59").getTime();
const x = setInterval(function() 
{
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    timer.innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000);
