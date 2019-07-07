
// MODERN JAVASCRIPT : MODULE SYSTEM
// keyword "export" and "import" are used to use module system in ES6

// For example : we'll use "Person Class" from "class.js"
// We've already used keyword "export" before the "Person Class"
// Now, we've to use keyword "import" here to get access to "Person Class"

// *** We must use { script type="module" } in script tag: to enable this functionality
// EXAMPLE: <script type="module" src="FILES_NAME.js"></script>

// IMPORT METHOD
import plus from './practice.js';
console.log(plus(10,10))


// EXPERIMENTAL IMPORT
import Person from './class.js';

// STUDENT CLASS : CHILD CLASS
class Student extends Person {
    constructor(name,email,job,id) {
       super(name,email,job);
        this.id = id;
    }
}
const studentOne = new Student ('Shaon Kabir','shaonbd188@gmail.com','Student',258)
studentOne.info(); // Method of Person Class