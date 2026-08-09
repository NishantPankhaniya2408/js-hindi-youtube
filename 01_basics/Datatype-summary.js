// Primitive Datatype

// 7 Type: String, Number, Boolean, null, Undefined, Symbol, BigInt

const value = 100
const value2 = 100.3

const LoggedIn = false
const outsidetemp = null
let useremail;

const id = Symbol ('123')
const refid = Symbol ('123')
console.log(id == refid);

const bigNumber = 34754575457n

// Reference Datatype or Non Primitive Datatype

// Array, Object, Functions

 const heros = ["Virat", "Rohit","Rahul"];
 let MyObj = {
    name: "nishant",
    age: 22,
 }
 const myFunction = function () {
    console.log("Hello World");
 }

 console.log(typeof myFunction);
 console.log(typeof MyObj);
 console.log(typeof heros);
 console.log(typeof bigNumber);
 console.log(typeof refid);
 console.log(typeof id);
 console.log(typeof useremail);
 console.log(typeof LoggedIn);
<<<<<<< HEAD
 console.log(typeof outsidetemp)
 console.log(typeof value2);
 console.log(typeof value);


 //************************************************************ */


 // Stack (Primitive), Heap(Non-Primitive)


 let studname = "Virat"

 let studname1 = studname
 anothername = "Rohit"
 console.log(studname1);
 console.log(anothername);
 

 let userOne = {
    email: "abc@gmail.com",
    pass: 2503
 }
 
 let userTwo = userOne

 userTwo.email = "xyz@gmail.com"

 console.log(userOne.email);
console.log(userTwo.email);

 
=======
 console.log(typeof outsidetemp);
 console.log(typeof value2)
  console.log(typeof value);



>>>>>>> 7a89bb58a1a90a7e09ee9b56a2abd43c5a479238





