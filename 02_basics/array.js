// Array

const arr = [1, 2, 3, 4]
const heros = ["bheem", "ben10", "krishna"]
const myarr = new Array(0, 1, 2, 3, 4, 5)
// console.log(arr[5]);

// // Array Methods

// myarr.push(8)
// myarr.pop()
// myarr.unshift(8)

const newarr = myarr.join()
// console.log(myarr);
// console.log(typeof newarr);

// Slice and Splice

console.log("A ", myarr);

const myn1 = myarr.slice(1, 5)
console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1, 3)

console.log("C ", myarr);
console.log(myn2);



