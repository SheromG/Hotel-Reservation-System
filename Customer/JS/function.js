function load() 
{
    const name = document.querySelector('#name');
    const id = document.querySelector('#id');
    const room = document.querySelector('#room');

    let firstname = sessionStorage.getItem("username");
    let lastname = sessionStorage.getItem("password");
    let roomvar = sessionStorage.getItem("room");
    let idvar = sessionStorage.getItem("id");

    firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
    lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
    
    name.innerHTML = firstname + " " + lastname;
    room.innerHTML = roomvar;
    id.innerHTML = idvar;

    //Dashboard
    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const current = document.querySelector('#current');
    const tomorrow = document.querySelector('#tomorrow');

    const today = new Date();
    const currentdate = (today).toString().split(' ').splice(1,3).join(' ');
    const day = week[today.getDay()];

    today.setDate(today.getDate() + 1);
    const tomorrowdate = (today).toString().split(' ').splice(1,3).join(' ');
    const day2 = week[today.getDay()];

    current.innerHTML = day + ", " + currentdate;
    tomorrow.innerHTML = day2 + ", " + tomorrowdate;
}