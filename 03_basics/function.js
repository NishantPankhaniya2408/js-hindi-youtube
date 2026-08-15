// Function and Parameters in JS
// syntax
// function saymyname(){

// }
// saymyname()

// function addnum(num1, num2) {
//     console.log(num1 + num2);
// }
function addnum2(num1, num2) {
    let result = num1 + num2
    return result
}

const result = addnum2(3, 5)
// console.log("Result: ", result);
// addnum(3, 4)
// addnum(3, "4")
// addnum(3, "a")
// addnum(3, null)


function num1(num12, num23) {
    let result1 = num12 + num23
    return result
}
const result2 = num1(3, 5)
// console.log("Result: ", result);

function loginusername(username = "Nishant") {
    if (!username) {
        console.log("PLease Enter username");
        return
    }
    return `${username} just logged in`
}
loginusername("hitesh")
// console.log(loginusername("Nishant"));
// console.log(loginusername());

// Function with Object and Array in JS
// Rest Opertor is like a spread Op ertor
function calculateprice(val1, val2, ...num1){
    return num1
}
// console.log(calculateprice(200, 400, 500, 2000));


// Function Through Object //

const user = {
    username: "Nishant",
    price: 199
}
function handle(myobject) {
    // console.log(`username is ${myobject.username} and price ${myobject.price}`);
}
// handle(user)

// Function to Array //

const mynew = [200,400,100,600]

function secondvalue(getarray){
    return getarray[5]
}
// console.log(secondvalue(mynew));
// console.log(secondvalue([200,400,100,600,1000]));



