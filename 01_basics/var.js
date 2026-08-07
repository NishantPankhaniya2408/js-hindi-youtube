const accountId = 1234567890
let accountName = "Nishant"
var accountBalance = 1000
cityname = "New York" // Implicitly declared variable (not recommended)

// const accountid = '0987654321';  Reassigning value to a const variable (will throw an error)
accountName = "John Doe"
accountBalance = 2000 // Reassigning value to a var variable (allowed)
cityname = "Los Angeles"// Reassigning value to an implicitly declared variable (allowed)
console.table([accountName, accountBalance, cityname]); // Output: 1234567889 
