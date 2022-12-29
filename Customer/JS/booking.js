const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

button1.addEventListener('click', function(event) 
{   
    event.preventDefault();
    
    button1.innerHTML = "Current Package";
    button1.className =  "current"
    button2.innerHTML = "Upgrade Package";
    button2.className =  "upgrade"
    button3.innerHTML = "Upgrade Package";
    button3.className =  "upgrade"

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

    button2.innerHTML = "Current Package";
    button2.className =  "current"
    button1.innerHTML = "Upgrade Package";
    button1.className =  "upgrade"
    button3.innerHTML = "Upgrade Package";
    button3.className =  "upgrade"

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

    button3.innerHTML = "Current Package";
    button3.className =  "current"
    button1.innerHTML = "Upgrade Package";
    button1.className =  "upgrade"
    button2.innerHTML = "Upgrade Package";
    button2.className =  "upgrade"

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