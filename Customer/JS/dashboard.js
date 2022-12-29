const current = document.querySelector('#current');
const tomorrow = document.querySelector('#tomorrow');

const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const today = new Date();
const currentdate = (today).toString().split(' ').splice(1,3).join(' ');
const day = week[today.getDay()];

today.setDate(today.getDate() + 1);
const tomorrowdate = (today).toString().split(' ').splice(1,3).join(' ');
const day2 = week[today.getDay()];

current.innerHTML = day + ", " + currentdate;
tomorrow.innerHTML = day2 + ", " + tomorrowdate;

const progressBar = document.querySelector(".circular-progress");
const valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 80;

let progress = setInterval(() => 
{
    progressValue++;
    valueContainer.textContent = `${progressValue}%`;
    progressBar.style.background = `conic-gradient( #5960c7 ${progressValue * 3.6}deg, #8e94e6 ${progressValue * 3.6}deg )`;
    if (progressValue == progressEndValue) 
    {
        clearInterval(progress);
    }
}, 30);

const package = document.querySelector("#package");
const money = document.querySelector("money");

let dpackage = sessionStorage.getItem("package");
let dprice = sessionStorage.getItem("price");

package.innerHTML = dpackage;
money.innerHTML = dprice;

const upgrade = document.querySelector(".upgrade");

upgrade.addEventListener("click", function() 
{
    location.replace("Booking.html");
});
