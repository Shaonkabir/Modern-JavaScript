// IIFE : Immediately Invoked Function Expression
// No Need to call the function sepharately .
// We can store the function to a variable to get refferance of it.
// Basically, JavaScript Module System are written using IIFE

// OUR MAIN ARRAY
let num = [10,20,50,1,3,5,7,6,9,108,95,11,25];

// BUBBLE SORT :
const bubbleSortFunction =(function bubbleSort(num){
    for(let i = 0; i <num.length; i++) {
        for(let j = 0; j <num.length; j++) {
            if(num[j] > num[j+1]) {
                [num[j] , num[j+1]] = [num[j+1] , num[j]]
            }
        }
    }
    return num;
})(num)
console.log(num);

// SORT FUNCTION USING ARROW FUNCTION WITH 'sort' METHOD
const sort = num.sort((a,b) => (a>b) ? 1 : -1) // Ternary Operator
console.log(sort)

// FILTER FUNCTION:
const filterResult = (function filterFunction(num) {
    let filterData = [];
    for(let i = 0; i <num.length; i++) {
        if(num[i] % 2 == 0) {
            filterData.push(num[i])
        }
    }
    return filterData;
})(num)
console.log(filterResult)

// FILTER FUNCTION USING ARROW FUNCTION WITH 'filter' METHOD
const filter = num.filter(number => number % 2 == 0);
console.log(filter)


// MAP FUNCTION
// Add 5 to each item of this array
const mapedResult = (function mapFunciton(num) {
    let mapData = [];
    for(let i =0; i <num.length; i++) {
        if(num[i]) {
            mapData.push(num[i] + 5);
        }
    }
    return mapData;
})(num)
console.log(mapedResult)

// MAP FUNCTION USING ARROW FUNCTION WITH 'map' METHOD
const map = num.map(number => number + 5);
console.log(map)

// REDUCE FUNCTION
const reduceResult = (function reduceFunction(num){
    let total = 0;
    for(let i = 0; i <num.length; i++) {
        total += num[i]
    }
    return total
})(num)
console.log(reduceResult);

// REDUCE FUNCTION USING ARROW FUNCTION WITH 'reduce' METHOD
const reduce = num.reduce((value,number) => value += number ,0);
console.log(reduce)


// FIND FUNCTION
const findResult = (function findFunction(num) {
    let findData = [];
    for(let i = 0; i <num.length; i++) {
        if(num[i] == 108) {
            findData.push(num[i])
        }
    }
    return findData.toString();
})(num)
console.log(findResult)

// FIND FUNCTION USING ARROW FUNCTION WITH 'find' METHOD
const find = num.find(number => number == 108);
console.log(find)


// FOR EXPORTING : BUBBLE SORT FUNCTION IS NEEDED :
export function sortingFunction(num) {
    for(let i = 0; i <num.length; i++) {
        for(let j = 0; j <num.length; j++) {
            if(num[j] > num[j+1]) {
                [num[j] , num[j+1]] = [num[j+1] , num[j]]
            }
        }
    }
    return num;
}