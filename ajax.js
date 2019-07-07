// AJAX = Asynchronous JavaScript XML

// FOR TEST OUR AJAX:
const button = document.querySelector('.boxed-btn');
const output = document.querySelector('.output');
button.addEventListener('click', (e) => {
    output.style.padding = '40px'
    button.innerHTML = "Thank you"
    const h1 = document.querySelector('h1');
    h1.innerHTML = "Asynchronous JavaScript XML (AJAX)";
    h1.style.fontVariant = 'normal'
})


// 3 METHODS FOR WORKING WITH AJAX:

// XMLHttpRequest:
// We'll get data using xml.response
const URL = 'http://localhost:3000/user';

// button.addEventListener('click' , (e) => {
//     const xml = new XMLHttpRequest();
//     xml.open('GET',URL,true)
//     xml.onreadystatechange = () => {
//         console.log(xml.response)
//     }
//     xml.send();
// })


// Fetch API
button.addEventListener('click' , (e) => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        data.forEach(user => {
            output.innerHTML = `${output.innerHTML} </br> Name : ${user.name}. Email: ${user.email}. Phone Number : ${user.phone}`;
        });
    })
    .catch(err => console.log(err))
    .finally(information => console.log(`Ajax is working Behind`))
});


// Using 'Axios' Library : Third Party NPM Package
// import axios from 'axios' // FIRST WE'VE TO INSTALL "AXIOS" TO USE IN OUT PROJECT
// axios.METHOD_NAME(URL)
//     .then()
//     .catch(err => console.log(err))