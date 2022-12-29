const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

button1.addEventListener('click', function(event) 
{   
    event.preventDefault();

    let price = "99";
    let package = "Classic";

    sessionStorage.setItem("package", package);
    sessionStorage.setItem("price", price);
    
    setTimeout(function()
    { 
        location.replace("Dashboard.html");
    }, 1000);
}, true);

button2.addEventListener('click', function(event) 
{   
    event.preventDefault();

    let price = "199";
    let package = "Junior";

    sessionStorage.setItem("package", package);
    sessionStorage.setItem("price", price);

    setTimeout(function()
    { 
        location.replace("Dashboard.html");
    }, 1000);
}, true);

button3.addEventListener('click', function(event) 
{   
    event.preventDefault();

    let price = "299";
    let package = "Senior";

    sessionStorage.setItem("package", package);
    sessionStorage.setItem("price", price);

    setTimeout(function()
    { 
        location.replace("Dashboard.html");
    }, 1000);
}, true);

button1.onclick = function()
{
    localStorage.setItem("button11", "Current Package");
    localStorage.setItem("button12", "current");
    localStorage.setItem("button21", "Upgrade Package");
    localStorage.setItem("button22", "upgrade");
    localStorage.setItem("button31", "Upgrade Package");
    localStorage.setItem("button32", "upgrade");
}
button2.onclick = function()
{
    localStorage.setItem("button11", "Upgrade Package");
    localStorage.setItem("button12", "upgrade");
    localStorage.setItem("button21", "Current Package");
    localStorage.setItem("button22", "current");
    localStorage.setItem("button31", "Upgrade Package");
    localStorage.setItem("button32", "upgrade");
}
button3.onclick = function()
{
    localStorage.setItem("button11", "Upgrade Package");
    localStorage.setItem("button12", "upgrade");
    localStorage.setItem("button21", "Upgrade Package");
    localStorage.setItem("button22", "upgrade");
    localStorage.setItem("button31", "Current Package");
    localStorage.setItem("button32", "current");
}

button1.innerHTML = localStorage.getItem("button11");
button1.className = localStorage.getItem("button12");
button2.innerHTML = localStorage.getItem("button21");
button2.className = localStorage.getItem("button22");
button3.innerHTML = localStorage.getItem("button31");
button3.className = localStorage.getItem("button32");