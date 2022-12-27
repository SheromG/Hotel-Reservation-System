let firstname = sessionStorage.getItem("username");
let lastname = sessionStorage.getItem("password");
let idvar = sessionStorage.getItem("id");

const payname = document.querySelector('#payname');
const payid = document.querySelector('#payid');
const current = document.querySelector('#date');

firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);

const date = new Date();

const month = date.getMonth() + 1 ; 
const today = date.getDate(); 
const year = date.getFullYear(); 

payname.innerHTML = firstname + " " + lastname;
payid.innerHTML = idvar;
current.innerHTML = month + "/" + today + "/"  + year ;