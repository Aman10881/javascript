const score = 400
//console.log(score); // 400

const balance = new Number(400)
//console.log(balance); // [Number: 400]

//console.log(balance.toString().length); // 3
//console.log(balance.toFixed(2));// 400.00 Number of digits after the decimal point. Must be in the range 0 - 20, inclusive. Returns a string representing a number in fixed-point notation.

const othernumber=123.88
//console.log(othernumber.toPrecision()); // 123.9


const hundered=1000000
//console.log(hundered.toLocaleString()); // 1,000,000
//console.log(hundered.toLocaleString('en-IN')); // 10,00,000 this convert to indian type



//++++++++++++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math); //Object [Math] {}   (typeof = object)
// console.log(Math.abs(-5)); // 5
// console.log(Math.round(4.2)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.ceil(4.01));  // 5
// console.log(Math.min(3,6,9,10)); // 3   Find minum value in array 
// console.log(Math.max(3,6,9,10)); // 10  Find maxium value in array


// console.log(Math.random()); // Returns a pseudorandom number between 0 and 1.
// console.log(Math.floor(Math.random()*10 +1 ));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1 ))+min);

