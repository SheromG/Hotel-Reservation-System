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

