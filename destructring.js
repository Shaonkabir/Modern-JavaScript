// Modern JavaScript / ES6 

// Destructrings : De + Structuring : Mostly used for Objects


"use strict"; // to avoid bad practice


const obj = {
	name: 'Shaon Kabir',
	email: 'shaonkabir98@gmail.com',
	phoneNumber: +8801916380678,
	bloodGroup: 'A+(ve)',
	address: {
		village: 'Baganchara College Road',
		upozila: 'Sharsha',
		dist: 'Jashore',
		div: 'Khulna',
		country: 'Bangladesh'
	},

	info() {
		console.log(`Name : ${this.name}. Email : ${this.email} .Address :${this.address.village}, ${this.address.upozila}, ${this.address.dist}, ${this.address.country}`);
	}
}

obj.info();

// Destructuring:
let {name,email,phoneNumber,bloodGroup,address} = obj;
console.log(address);


// Destructring Function

/*
// Syntax : 
function functionName( {Arguments} ) {
	// Code
}
functionName( {Parameters} ); */


// function Arguments and Parameters should be wrapped in a Carley Brace. 
function infoFunction({name,email}) {
	console.log(`Hello ${name}, Your email is  ${email}`);
}

infoFunction({email , name})

// Another Function:

function biodata({name,email,phoneNumber,bloodGroup}) {
	console.log(`Name : ${name} . Email : ${email} . Phone number : ${phoneNumber} and Blood Group : ${bloodGroup}`)
}

biodata({name,phoneNumber,bloodGroup,email});

