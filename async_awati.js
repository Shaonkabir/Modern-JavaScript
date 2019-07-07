// Async and await : Concept of Asynchronus JavaScript


// Selecting Element to display output on Browser
const button = document.querySelector('.boxed-btn');
const output = document.querySelector('.output');


// Fetch API : Traditional way
// fetch('http://localhost:3000/user_list')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach(user => {
//             console.log(user.name)
//         });
//     })
//     .catch(err => console.log(err))

 
async function recoverData() {
    const res = await fetch('http://localhost:3000/user_list')
    const data = await res.json() 
    data.forEach(user => {
        console.log(user.email)
    })
   
    // console.log(data)
}


button.addEventListener('click' , recoverData)