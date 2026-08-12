// This used by singleton and construtor using object
// non singleton
// const tinderuser = new.Object()
// // // singleton object
// // const tinder = {

// // }
// // console.log(tinderuser());

const tinderuser = {
    id: "123abc",
    name: "sam",
    isLogin: false
}
// console.log(tinderuser);

const  regularuser = {
    email: "abc@gmail.com",
    fullname: {
        usernamefullname: {
            firstname: "Nishant",
            lastname: "Pankhaniya"
        }
    }
}
// console.log(regularuser.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Array of an Object //

const users = [ {
    id: '1',
    email: "abc@gmail.com"
},
{
    id: '2',
    email: "xyz@gmail.com"
},
{
    id: '3',
    email: "nishu@gmail.com"
}
]
// console.log(users[1].id);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
// console.log(Object.getPrototypeOf(tinderuser));
// console.log(Object.getOwnPropertyNames(tinderuser));

// To check the values is there or not in object the method own is used //

// console.log(tinderuser.hasOwnProperty('i'));


// Obejct de-structure and JSON Inro //

const course = {
    coursename: "Html",
    price: 200,
    courseteacher: "Nishant Pankhaniya" 
}

const {courseteacher: teacher} = course
// console.log(courseteacher)
console.log(teacher)

// API Intro And Syntax //

{
    "name": "Nishant",
    "coursename": "html",
    "price": "free"
}





