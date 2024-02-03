const marvel_heroes = ["Ironman", "Thor", "Spiderman"]
const dc_heroes = ["Flash", "Superman", "Batman"]

// push method 

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);  // [ 'Ironman', 'Thor', 'Spiderman', [ 'Flash', 'Superman', 'Batman' ] ]
// it will take dc heroes as single data and then ush data ke andar further data hai
// console.log(marvel_heroes[3][0]); // Flash



// concat method ==> Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// const allherores = marvel_heroes.concat(dc_heroes)
// console.log(allherores); // [ 'Ironman', 'Thor', 'Spiderman', 'Flash', 'Superman', 'Batman' ]



// spread ==> same as concat method here we can add as many array by ..., we use mostly this method


const allherores = [...marvel_heroes,...dc_heroes]
// console.log(allherores); // [ 'Ironman', 'Thor', 'Spiderman', 'Flash', 'Superman', 'Batman' ]


//FLAT Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// const another_Array = [1,2,3,[4,5,6],7,[7,8,[1,[2,3],4]]]
// const real_another_Array = another_Array.flat(Infinity)
// console.log(real_another_Array); // [  1, 2, 3, 4, 5, 6,7, 7, 8, 1, 2, 3,4]


console.log(Array.isArray("aman")); // It will check if element is array or not .In this it will return false

console.log(Array.from("aman"));//Creates an array from an iterable object. // [ 'a', 'm', 'a', 'n' ]

console.log(Array.from({name:"aman"})); //It will create empty array you have tell if you want to create a array or keys or value. // []
    
  
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));//Returns a new array from a set of elements. // [ 100, 200, 300 ]
