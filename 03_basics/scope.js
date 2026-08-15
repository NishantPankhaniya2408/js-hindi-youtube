//Global Scope and Local Scope in JS 
//var c = 300  ----> global scope
// if(true){
        // block scope
//}

// var c = 300 
let a = 200
if(true){
    let a = 10
    const b = 20
    console.log("Inner: ", a );
    
}
console.log(a);

// Scope Level and Mini Hosting in JS


function one() {
    const username = "Nishant"
    function two() {
        const website = "youtube"
        console.log(username);        
    }
    //console.log(website);
    // two()
}
one()


if (true) {
    const username = "Nishant"
    if (username === "Nishant") {
        const website = " youtube"
        console.log(username + website);
    } 
    // console.log(website);
}
// console.log(username);



// *********************** Intersting ******************** //
console.log(addone(5))
function addone(num) {
    return num + 1    
}

// addtwo(5)
const addtwo = function (num) {
    // return num + 2   
}