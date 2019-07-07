/*
// MODERN JAVASCRIPT : ES6 ==> PROTOTYPE INHERITANCE

// DEPENDENCIES :
// We must use the keyword "extents" Parent Class Name after that while creating Child Class.
// In ES5, we just use a function either that is 'CALL' , 'BIND' OR 'APPLY'
// Here (In ES6), we have to use keyword "super(parameters__of__parent__class)"

*/
// PARENT CLASS
class Person {
    // CONSTRUCTOR FUNCTION
    constructor(name,email,job) {
        this.name = name;
        this.email = email;
        this.job = job
    };
    // METHODS
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
class Student extends Person {
    constructor(name,email,job,id) {
       super(name,email,job);
        this.id = id;
    }
}
const student1 = new Student('Jack Sparrow','jack_sparrow@info.com','Student',154)
student1.info()

// TEACHER CLASS : CHILD CLASS
class Teacher extends Person {
    constructor(name,email,job,subject) {
        super(name,email,job);
        this.subject = subject;
    }
}
const teacher1 = new Teacher('Rasel Ahmed','rasel_ahmed07@gmail.com','Teacher','JavaScript');
teacher1.info()