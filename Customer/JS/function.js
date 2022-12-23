function signin()
{
    location.replace("Customer/Webpages/Dashboard.html")
}
function signup()
{
    location.replace("index.html")
}
function load() 
{
    const name = document.querySelector('#name');

    name.innerHTML = sessionStorage.getItem("username");
    let lastname = sessionStorage.getItem("password");

    
    name.innerHTML = name.innerHTML + " " + lastname;
}