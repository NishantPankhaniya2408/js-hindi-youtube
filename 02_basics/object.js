// singleton = Singleton is not use by literals
// Singleton is made by construter
// The main parts of JS is Object and its Events
// In JavaScript their are two types of object Declartion by literals and construter 


// object literals syntax
   // const jsuser = {}

    // object Construter syntax
    // const jsuser = Object.create
    // const jsuser = {
    // Keys are define in JS<------- name: "Nishant"; -----> Values are Define in JS
    // }
const js1 = Symbol("key1")
const jsuser = {
    name: "Nishant",
    age: 18,
    [js1]: "myKey1",
    location: "Rajkot",
    email: "abc@gmail.com",
    isloggedin: false,
    lastloggedIndays: ["Monday", "Saturday"],
    ["full name"]: "Nishant Pankhaniya",
}

console.log(jsuser.email);
console.log(js1["full name"]);
console.log(jsuser);
console.log(jsuser["email"]);
// console.log(typeof jsuser.js1);


jsuser.email = "xyz@gmail.com"
// Object.freeze(jsuser)
// jsuser.email = "nishu@gmail.com"
// console.log(jsuser);

jsuser.greeting = function() {
    console.log("Hello");
}

jsuser.greetingtwo = function() {
    console.log(`Hello JS User, ${this.name}` );
    
}
console.log(jsuser.greeting);
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());

