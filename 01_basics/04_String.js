const name="aman"
const repocount=10;

// console.log(name+repocount+"value"); Donot use this way 

console.log(`Hello my name is ${name} and my repo count is ${repocount} and ${" value"}`); // use this way always 

// Another way to Declare the string by creating object

const gameName = new String('Aman-Mj-com') // here in the contruct we given the name
// console.log(typeof gameName); -->object

console.log(gameName[0]);
console.log(gameName.__proto__); // {}


console.log(gameName.length); // 6
console.log(gameName.toUpperCase()); // AMANMJ
console.log(gameName.charAt(3)); // n
console.log(gameName.indexOf('n')); // 3 and if any value not find then it will return -1;

const newString = gameName.substring(0,4)
console.log(newString); // Aman

const anotherString = gameName.slice(-7,4); //Aman minus means string start with reverse 
const anotherString2 = gameName.slice(-3); //-Mj
console.log(anotherString);
console.log(anotherString2);

const newStringOne = "  Aman "
console.log(newStringOne);
console.log(newStringOne.trim());//Removes the leading and trailing white space and line terminator characters from a string.

const url = "https.//aman%20mishra.hhh"

console.log(url.replace('%20','-')); // https.//aman-mishra.hhh

console.log(url.includes('aman')); // true

console.log(gameName.split('-')); // [ 'Aman', 'Mj', 'com' ]