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
}