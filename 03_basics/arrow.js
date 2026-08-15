/// this and arrow function in JS

const user = {
    name: "Nishant",
    price: 999,
    welcomemessage: function () {
        // console.log(`${this.name}, welcome to website `);
    }
}
// user.welcomemessage()
// user.name = "sam"
// user.welcomemessage()


// function chai() {
//     let username = "Nishant"
//     console.log(this.username);
// }
// chai()

// const chai = function () {
//         let username = "Nishant"
//         console.log(this.username);
        
// }

// const chai =  () => {
//         let username = "Nishant"
//         console.log(this.username);
        
// }
// chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

const addtwo = (num1, num2) => (num1 + num2)

console.log(addtwo(3, 4));

