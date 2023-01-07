const accountForm = document.querySelector('.account-form');
const search = document.querySelector('.search-input');
const accounts = document.querySelector('.accounts');


const generateAccountDetails = ()=>{

    let  max = randomNumber(1,8);

    for (let index = 0; index < max; index++) {

        const box = document.createElement('box');
    const top = document.createElement('top');
    const bottom = document.createElement('bottom');

    box.classList.add('box');
    top.classList.add('top');
    bottom.classList.add('bottom');

    const img = document.createElement('img');
    img.setAttribute('src','../Customer/Media/Icon.jpg');

    const name = document.createElement('h3');
    name.innerHTML = "test";
    name.classList.add('name');

    const description = document.createElement('div');
    description.innerHTML = 'test';
    description.classList.add('description');

    bottom.appendChild(name);
    bottom.appendChild(description);

    top.appendChild(img);

    box.appendChild(top);
    box.appendChild(bottom);
    accounts.appendChild(box);  
    }
}

const fakeAccountDetails = () => {
    generateAccountDetails();
    search.value = "";
}

accountForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //event to show loading
    autoLoading(fakeAccountDetails);
});

