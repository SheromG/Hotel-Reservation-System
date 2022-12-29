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
    sessionStorage.setItem("button11", "Current Package");
    sessionStorage.setItem("button12", "current");
    sessionStorage.setItem("button21", "Upgrade Package");
    sessionStorage.setItem("button22", "upgrade");
    sessionStorage.setItem("button31", "Upgrade Package");
    sessionStorage.setItem("button32", "upgrade");
}
button2.onclick = function()
{
    sessionStorage.setItem("button11", "Upgrade Package");
    sessionStorage.setItem("button12", "upgrade");
    sessionStorage.setItem("button21", "Current Package");
    sessionStorage.setItem("button22", "current");
    sessionStorage.setItem("button31", "Upgrade Package");
    sessionStorage.setItem("button32", "upgrade");
}
button3.onclick = function()
{
    sessionStorage.setItem("button11", "Upgrade Package");
    sessionStorage.setItem("button12", "upgrade");
    sessionStorage.setItem("button21", "Upgrade Package");
    sessionStorage.setItem("button22", "upgrade");
    sessionStorage.setItem("button31", "Current Package");
    sessionStorage.setItem("button32", "current");
}

button1.innerHTML = sessionStorage.getItem("button11");
button1.className = sessionStorage.getItem("button12");
button2.innerHTML = sessionStorage.getItem("button21");
button2.className = sessionStorage.getItem("button22");
button3.innerHTML = sessionStorage.getItem("button31");
button3.className = sessionStorage.getItem("button32");
