"use strict"; //for all JS code for newer version.

// alter(3 + 3); This will not work because we are using nodejs not brower 

let name="aman"
let age=20
let isLoogedIN=false
let state

// Data types-->
// number =>range 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol=>unquie


// object

// console.log(typeof "aman");
// console.log(typeof age);
// console.log(typeof 18);
// console.log(typeof isLoogedIN);
// console.log(state);
// console.log(typeof null); // null type is object
// console.log(typeof undefined); // undefined type is undefined




/**************************************   SUMMERY OF DATATYPE   ************************************************ */

// There are two Datatypes -:

// 1.Primitive 


// 7 types: String, Number, Boolean, null, undefined, symbol, Bigint

const score = 100 // Number
const score1 = 10.2 // Number


const score2="Good" // String


const score3=true // Boolean


const temp=null // Null


let userEmail //undefined in this value


const id=Symbol('123') // symbol
const anotherId=Symbol('123') //symbol
// console.log(id===anotherId); // This will return false


const bigNumber = 3456789867776666666n // add n at last to make it bigInt



// typeof datatypes of  primitive

console.log(typeof score); // result = number 
console.log(typeof score2); // result = string 
console.log(typeof score3); // result = boolean
console.log(typeof temp); // result = object -> important **
console.log(typeof userEmail); // result = undefined
console.log(typeof id); // result = symbol
console.log(typeof bigNumber); // result = bigint



// 2.Reference (Non pirmitive)


// Array, object, Functions 

const heroes = ["saktiman", "naagraj", "doga"]


let myobj = {
    name:"aman",
    age:18,
}


const myfunction = function(){
console.log("Hello world! ");
}



// typeof datatypes of non primitive

console.log(typeof heroes) // result = object
console.log(typeof myobj) // result = object
console.log(typeof myfunction) // result = function ->important **

