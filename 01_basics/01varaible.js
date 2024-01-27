const accountID=8778
let accountEmail="aman@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState
console.log(accountID)
// accountID=2. connst can not be changed 
accountEmail="ac.gmail.com"
accountPassword="333"
accountCity="Dhanbad"

// another method to print all 
console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
/*

Perferred not use var because of issue in Block Scope and Functional Scope 

*/