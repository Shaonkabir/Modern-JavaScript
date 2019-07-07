// PROMISE 

// Basically we don't have to create promise. We just have to work with it.
// We'll get Promise from anywhere ( Most of the time, from API) 
// When we'll work with database and server, we'll get promises which we've to handle.

// Common Syntax of Promise:
// From every promise, we'll get 3 Method : every methods take callback function as params.
// .then() // If everything is fine, this block will be executed
// .catch() // if any error occour, this block will be executed
// .finally() // This block will be executed everytime if it is written.



// IMPORTING OBJECT FROM LIBRARY FUNCTION
import {obj} from './library_function.js';

// CREATING A NEW PROMISE
const myPromise = new Promise((resolve,rejects) => resolve(obj))


// PROMISE HANDLING
myPromise
    .then(res => console.log(res))
    .catch(err => console.log(err))
    .finally(information => console.log(`I'll executed everytime......`))