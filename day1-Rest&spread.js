let numbers = [34,23,43,12]

console.log("without spread: ",numbers)
console.log("with spread operator:", ...numbers)

//rest and spread operator(...)
//merging two arrays
let maxnum=[789,678]
let mergedArr= [...numbers, ...maxnum]
console.log("merged array: ", mergedArr)

//rest example 
let add = (...values)=>{
    let res = values.reduce(
        (accumulator,ele)=>{
            return accumulator + ele
        },
        0//initial value of accumulator
    )
    console.log("add result: ", res)
}
add(...numbers)
add(34,56,23,1,2,3,4,5,6)  

let obj1 = {
    name:"Abijal",
    age:23
}
let obj2 ={
    college:"Shikshyalaya College",
    favsub:"React"
}
let mergedObj = {...obj1, ...obj2}
console.log("merged obj: ", mergedObj)


// ===== SPREAD OPERATOR (...) =====
// Expands an array/object into individual elements

// 1. Spread in arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

const copyArr = [...arr1];
console.log(copyArr); // [1, 2, 3] (shallow copy)

// 2. Spread in objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

const updatedObj = { ...obj1, b: 99 }; // override a property
console.log(updatedObj); // { a: 1, b: 99 }

// 3. Spread in function calls
function sum(x, y, z) {
  return x + y + z;
}
const nums = [1, 2, 3];
console.log(sum(...nums)); // 6

// 4. Spread with strings
console.log([...'hello']); // ['h', 'e', 'l', 'l', 'o']


// ===== REST OPERATOR (...) =====
// Collects multiple elements into a single array/object

// 1. Rest in function parameters
function sumAll(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

// 2. Rest with regular parameters
function introduce(first, second, ...others) {
  console.log(first, second, others);
}
introduce('Alice', 'Bob', 'Charlie', 'Dave');
// Alice Bob ['Charlie', 'Dave']

// 3. Rest in array destructuring
const [head, ...tail] = [10, 20, 30, 40];
console.log(head); // 10
console.log(tail); // [20, 30, 40]

// 4. Rest in object destructuring
const { name, ...rest } = { name: 'Eve', age: 25, city: 'NYC' };
console.log(name); // Eve
console.log(rest); // { age: 25, city: 'NYC' }