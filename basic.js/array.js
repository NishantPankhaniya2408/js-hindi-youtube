// JavaScript array is an object that represents a collection of similar type of elements.
// for.. of Loop is used to iterate over the values of an iterable object like an array, string, map, set, etc.
let furits = ["apple", "banana", "mango", "grapes"];
// for (item of furits){
//     console.log(item);
// }

// for.. in loop is used to iterate over the enumerable properties of an object.
// for (item in furits){
//     console.log(item);
// }

// forEach() method executes a provided function once for each array element.
// const Myeach = furits.forEach((item, index, arr)=> {
//     // console.log(`${item} is present at index ${index}`);
//     // console.log(arr);
// return `${item} is present at index ${index}`;
// });
// console.log(Myeach); // undefined

// map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// const newFruits = furits.map((item, index, arr)=> {
//     console.log(`${item} is present at index ${index}`);
//     console.log(arr);
//     return `${item} is present at index ${index}`;
// });

// console.log(newFruits);
// console.log(furits); // original array is not changed