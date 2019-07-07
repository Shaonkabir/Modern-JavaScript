/*
// MODERN JAVASCRIPT : ES6 ==> CLASS
// Object Orientent JavaScript Concept: Class

// In ES5, we can't create Class using keyword "Class"
// But in ES6, this is petty simple and cool thing to use

// PROBLEMS OF USING MODERN JAVASCRIPT / ES6 - CLASS
 * We can't declear any variable inside the class.
 * we just have to use either ' ; ' or nothing . But can't use ' , ' instead of that.

*/
// MAIN CLASS / PARENT CLASS
class Person {
    // CONSTRUCTOR FUNCTION
    constructor(name,email,job) {
        this.name = name;
        this.email = email;
        this.job = job
    };
    // METHODS
    info() {
        console.log(`${this.name} is a ${this.job} and email is : ${this.email}.`)
    };
}

// const person1 = new Person('Shaon kabir' , 'shaonkabir98@gmail.com' ,'Student')
// person1.info()


// EXPORTING FOR MODULE.JS PAGES USES:
export default Person;