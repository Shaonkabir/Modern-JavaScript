// DEFAULT PARAMETERS
// WE CAN EASILY PASS VALUE WITH PAREAMETERS AS DEFAULT

function add(a,b) {
	return a + b; 
}
const result = add(10,15) 
console.log(`Result is : ${result}`); // Expected Result = 25

// But if we pass only one value as parameters, 
const anotherResult = add(10)
console.log(`Result is : ${result}`); // Output : NaN

// To solve this Problem , we'll use Default Parameters.
function times(a = 10, b = 5) {
	return a * b;
}
const resultOfTimes = add(3,6);
console.log(`Result is : ${resultOfTimes}`); // Expected Result = 18
// if we pass one value as parameters,
const anotherResultOfTimes = times(5);
console.log(`Result is : ${anotherResultOfTimes}`); // Output : 25

// antoher Example :
function greetings(name = 'Anonymous') {
	console.log(`Hello ${name}, How are you today ? `)
}
greetings('Shaon Kabir')


// REST PARAMETERS......
// We can easily pass unlimited value as parameters,
// Rest Parameters is an Array which store all value
// and make actions as written

function calculator(...number) {
	let data = 0;
	for(let i =0; i <number.length; i++) {
		data += number[i]
	}
	return data;
}
const Result = calculator(10,20,-50,30,40)
console.log(Result); // (10 + 20 +30 +40) - 50 = 50


// SPREED OPERATOR [MOST IMPORTANT CONCEPT]

// console.clear() // TO PREVENT EXECUTIONG PREVIOUS CODES

// IMPORTING SOME DATA FORM OUR LIBRARY FUNCTION
import {country,travers,obj} from './library_function.js';

// ARRAY TRAVERS : IT WORKS LIKE 'forEach' METHOD
// const traversRes = travers(country,(element,index) => {
// 	console.log(`Element is : ${element}. Index is : ${index}`)
// });

// TO COPY AN ARRAY WE CAN USE SPREED OPERATOR : IT WORKS LIKE 'slice()' METHOD
const countryData = [...country]; // works like 'push()' method
// countryData[0] = 'Unknown Country' // it won't change elements of main array.
// console.log(countryData === country) // IT RETURN 'FALSE'
// const newArr = country.slice(0); // coping array 
// console.log(newArr === country) // IT RETURN 'FALSE'


// We've just imported an object from our library function.
console.dir(obj) // our main object which is imported .
// creating new objects and import data from main objects using "SPREED OPERATOR"
const newObject = {
	...obj,
	email: 'shaonbd188@gmail.com',
	phone:'01916380678',
	address: {
		...obj.address,
		village: 'Baganchra College Road',
		postCode: '7433' // to add completely new property
	},
	skills: [
		...obj.skills,'jQuery','React.js','Node.js'	// to add item to an existing array
	]
}
console.dir(newObject)