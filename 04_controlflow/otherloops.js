// High order array loop in JS

// (for of) loop 

const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
    
// }

// const greeting = "Hello World!!"
// for (const greet of greeting) {
//     console.log(`Each Char is ${greet}`);
    
// }

// Map remove duplicate element from array, object etc in JS

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United State of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// console.log(map);
// for (const [key, value] of map) {
//     console.log(key, ':-', value);
    
// }

// for in loop with JS //

const myObject = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"   
}
for (const key in myObject) {
    console.log(key)
    }

for (const key in myObject) {
    console.log(`${key} is also call ${myObject[key]}`);
    
}    

// const programming = ["js","rb","py","java","cpp"]

// for (const key in programming) {
//     console.log(programming[key]);
    
// }