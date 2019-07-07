// PRACTICE FILES FOR MODERN JAVASCRIPT:

// IMPORTING DATA FROM 'library_function.js'
// 'library_function' HAS BEEN STORED SOME IMPORTANT FILES WHICH I NEED EVEYTIME ARE CREATED WITH PURE FUNCTIONAL WAY.
import {reduceFunction , bubbleSort, plus,multiply,travers} from './library_function.js';

const arr = [10,50,1,3,5,6,7,9];

// count total value of this array:
const total = reduceFunction(arr);
console.log(`Total value is : ${total}`)

// Sort this array from small to big
const sort = bubbleSort(arr)
console.log(sort)

// count total value :
const value = plus(10,10,20,40,20);
console.log(value)

// multiply and get total value:
const multiplyResult = multiply(2,2,10,2)
console.log(multiplyResult)

// travers number array:
travers(arr ,(e,i) => console.log(`Element is : ${e} and Index number is: ${i}`));