// The Array object, as with arrays in other programming languages, 
// enables storing a collection of multiple items under a single variable name, 
// and has members for performing common array operations.

const myArray = [0,1,2,3,4,5]
// console.log(myArray[1]);

// JavaScript arrays are resizable and can contain a mix of different data types.
// const myArray1 = [0,"aman",true,2,"hello"]
// console.log(myArray1[1]);


// Array Methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()


// myArray.unshift(9) // it adds element on the first place(0)
// myArray.shift() // it remove the first elemnt


// console.log(myArray.includes(9)); // result = false
// console.log(myArray.indexOf(9));// -1 


// const newArray = myArray.join() // Adds all the elements of an array into a string
// console.log(typeof newArray); // string 


// slice, splice

// The splice() method returns the removed item(s) in an array and slice() method returns the selected element(s) in an array, 
// as a new array object. The splice() method changes the original array and slice() method doesn't change the original array.

console.log("A",myArray);
const myn1 = myArray.slice(1,4) // it choose from 1 index to 4-1 index. Here 1 2 3 will print
console.log(myn1);
console.log("B",myArray); // orginal array is not change after slice operation 


const myn2 = myArray.splice(1,4) // it choose from 1 index to 4 index. Here 1 2 3 4 will print
console.log(myn2);
console.log("c",myArray); // orginal array is change the remaing element which donot splice are left in orginal here [0,5]

