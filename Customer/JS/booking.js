const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

button1.addEventListener('click', function(event) 
{   
    button1.innerHTML = "Current Package";
    button1.className =  "current"
    button2.innerHTML = "Upgrade Package";
    button2.className =  "upgrade"
    button3.innerHTML = "Upgrade Package";
    button3.className =  "upgrade"
}, false);

button2.addEventListener('click', function(event) 
{   
    button2.innerHTML = "Current Package";
    button2.className =  "current"
    button1.innerHTML = "Upgrade Package";
    button1.className =  "upgrade"
    button3.innerHTML = "Upgrade Package";
    button3.className =  "upgrade"
}, false);

button3.addEventListener('click', function(event) 
{   
    button3.innerHTML = "Current Package";
    button3.className =  "current"
    button1.innerHTML = "Upgrade Package";
    button1.className =  "upgrade"
    button2.innerHTML = "Upgrade Package";
    button2.className =  "upgrade"
}, false);
