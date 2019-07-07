/**********************
// DOCUMENTATION :

// MY LIBRARY FUNCITON

// MOST USED AND IMPORTANT EVERYTING IS WRITTEN BELOW TO USE AGAIN:
// ALMOST EVERYTING ARE WRITTEN WITHOUT JAVASCIRPT BUIDIN METHODS.
// APPROXIMATELY, ALL OF THESE ARE WRITTEN IN PURE FUNCTION.
// THIS IS CREATED ONLY FOR ENTERTAINMENT AND EXPERIMENTAL WORK:

***********************/

// FUNCTIONS
// OUR MAIN ARRAY TO CREATE FUNCTIONS
"use strict"; // TO AVOID BAD PRACTICE / BAD CODE SMELL

let num = [10,20,50,1,3,5,7,6,9,108,95,11,25];

// TRAVERS FUNCTION : ALTERNATIVE OF 'forEach' FUNCTION
export function travers(num,callback) {
    let traversData = []
    for(let i = 0; i <num.length; i++) {
        if(num[i]) {
            traversData.push(callback(num[i],i,num))
        }
    }
    return traversData;
}

// BUBBLE SORT :
export function bubbleSort(num){
    for(let i = 0; i <num.length; i++) {
        for(let j = 0; j <num.length; j++) {
            if(num[j] > num[j+1]) {
                [num[j] , num[j+1]] = [num[j+1] , num[j]]
            }
        }
    }
    return num;
}
// FILTER FUNCTION:
export function filterFunction(num) {
    let filterData = [];
    for(let i = 0; i <num.length; i++) {
        if(num[i] % 2 == 0) {
            filterData.push(num[i])
        }
    }
    return filterData;
}
// MAP FUNCTION
// Add 5 to each item of this array
export function mapFunciton(num) {
    let mapData = [];
    for(let i =0; i <num.length; i++) {
        if(num[i]) {
            mapData.push(num[i] + 5);
        }
    }
    return mapData;
}
// REDUCE FUNCTION
export function reduceFunction(num){
    let total = 0;
    for(let i = 0; i <num.length; i++) {
        total += num[i]
    }
    return total
}
// FIND FUNCTION
export function findFunction(num) {
    let findData = [];
    for(let i = 0; i <num.length; i++) {
        if(num[i] == 108) {
            findData.push(num[i])
        }
    }
    return findData.toString();
}


// CALCULATOR => PLUS FUNCTION

export function plus(...num) {
    let total = 0;
    for(let i = 0; i <num.length; i++) {
        total += num[i]
    }
    return total;
}
export function multiply(...num) {
    let total = 1;
    for(let i = 0; i <num.length; i++) {
        total *= num[i]
    }
    return total;
}



// PROTOTYPE INHERIATANCE:
// PARENT CLASS
export class Person {
    constructor(name,email,job) {
        this.name = name;
        this.email = email;
        this.job = job
    };
    
    info() {
        // CONDITION CHECKING IF JOB == 'STUDENT' OR 'TEACHER'
        if(this.job === 'Student') {
            console.log(`${this.name} is a ${this.job} and email is : ${this.email} . Id is : ${this.id}`)
        } else if(this.job === 'Teacher') {
            console.log(`${this.name} is a ${this.job} and email is : ${this.email} . Subject is '${this.subject}'`)
        } else {
            console.log(`No data found on database`)
        }
    };
}

// STUDENT CLASS : CHILD CLASS
export class Student extends Person {
    constructor(name,email,job,id) {
       super(name,email,job);
        this.id = id;
    }
}
// const student1 = new Student('Jack Sparrow','jack_sparrow@info.com','Student',154)
// student1.info()

// TEACHER CLASS : CHILD CLASS
export class Teacher extends Person {
    constructor(name,email,job,subject) {
        super(name,email,job);
        this.subject = subject;
    }
}
// const teacher1 = new Teacher('Rasel Ahmed','rasel_ahmed07@gmail.com','Teacher','JavaScript');
// teacher1.info()




// ARRAY FOR USING AGAIN:
export const country = [
	'Bangladesh',
	'Korea',
	'Japan',
	'Norway',
	'Lima',
	'Polland',
	'Finland',
	'Canada',
	'Holland',
	'Zordan',
	'Denmark',
	'Malaysia',
	'America',
	'Venizuela',
	'Garman',
	'England',
	'Italy',
	'Opera'
];

// OBJECTS:
export const obj = {
    name: 'Shaon Kabir',
    email: 'shaonkabir98@gmail.com',
    occupation: 'Student',
    skills : ['HTML','CSS','JavaScript','Bootstrap','Version Control(Git)'],
    address: {
		village: 'Baganchara',
		dis: 'Jashore',
		div: 'Khulna',
		country: 'Bangladesh'
	}
}