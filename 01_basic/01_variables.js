// js is dynamically typed; cuz No need to declare types: You don’t specify variable types like int, string, or boolean.
//Types can change at runtime: A variable can hold a number, then later be assigned a string.

const accountId= 144553
let accountEmail = "yogeshg@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;

// accountId = 2// not allowed

accountEmail=" bhumica@gmail.com"
accountPassword ="2112121"
accountCity="bombay"

console.log(accountEmail);
console.table([accountEmail,accountId,accountPassword,accountCity])

/* prefer not to use var because of 
issue in block scope and functional scope*/
