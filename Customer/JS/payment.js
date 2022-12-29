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

const package = document.querySelector("package");
const money1 = document.querySelector("money1");
const money2 = document.querySelector("money2");
const total = document.querySelector("total");

let paypackage = sessionStorage.getItem("package");
let paytotal = sessionStorage.getItem("price");

let cost = parseFloat(paytotal * 0.8);
let tax = parseFloat(paytotal * 0.2);

package.innerHTML = paypackage + " ";
money1.innerHTML = cost.toFixed(2);
money2.innerHTML = tax.toFixed(2);
total.innerHTML = paytotal;