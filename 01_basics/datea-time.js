//Dates
 
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(myDate.getTimezoneOffset());
// console.log(myDate.getHours());
// console.log(myDate.setUTCMonth());

let my = new Date(2026, 7, 10, 5, 3)
// console.log(my.toDateString());
// console.log(my.toLocaleDateString());
// console.log(my.toLocaleString());
// console.log(my.toLocaleTimeString());


let myDated = new Date("10-08-2026")

console.log(myDated.toLocaleString());


let Timestamp  = Date.now()

console.log(Timestamp);
console.log(myDated.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

console.log(my.getMonth());
console.log(my.getTime());

Timestamp.toLocaleString('default', {
    dateStyle: "full",
    weekday: "narrow"
})










