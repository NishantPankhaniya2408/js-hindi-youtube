"use strict"; //treat all JS code as newer version

//alert (3 + 3); // we are using node.js not a browser so alert will not work

console.log(3 + 
    3); // code readability is important, so we can break the code into multiple lines

console.log("Nishant");
     
let name = "Nishant"
let age = 25
let isLoggedIn = true
let isloggedOut = null

// number => 2 to power of 53 
// bigint 
// string => "Nishant"
// boolean => true or false
//null => empty value
//undefined => value is not assigned
//symbol => unique value



//object => key value pair

console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isLoggedIn); // Output: boolean
console.log(typeof isloggedOut); // Output: object (this is a known quirk in JavaScript)
console.log(typeof undefinedVariable); // Output: undefined