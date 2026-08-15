// Falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values
// "0", 'false', " ", [], {}, function{}

// const useremail = []
// if (useremail.length === 0 ) {
//     console.log("Array is there");
// }else{
//     console.log("Array is not there");
    
// }


// const emptyobject = {};

// if (Object.keys(emptyobject).length == 0) {
//     console.log("Object is emptys");
// }

// false == 0
// true

// false == ''
// true

// 0 == ''
// true

// Nullish Coalecing Operator (??) : null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
// console.log(val1);


// Ternary Operator
// Condition ? true : false

// const iceprice = 200
// iceprice <= 80 ? console.log("less than 80") : console.log("more than 80");

