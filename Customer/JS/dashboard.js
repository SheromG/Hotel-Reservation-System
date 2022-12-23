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