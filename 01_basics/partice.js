let x = 5
function add(n) {
    x = x + n;
    return x;
}
add(3);
console.log(add(3));

// ************************* Filter ************************//

let arr = [1, 2, 3, 4];
let result = arr.filter(n => n % 2 === 0);
 //result.push(6)
console.log(result.length);

// ************** Finding Missing Charcter *****************//

function findmissingcharcter(str) {
    for(let i = 0; i<str.length; i++)
       { let curr = str.charCodeAt(i);
         let next = str.charCodeAt(i + 1)

         if (next - curr>1) {
                return String.fromCharCode
                (curr+1)
         }
    }
    return "No Missing Code"
}

console.log(findmissingcharcter("abdef"))


// ******************* splice() Method ************************ //


const movies = ["Dhoom", "Kgf", "3 Idots", "26/11 Attack"];

movies.splice(1, 2, "Borders");
console.log(movies);


// **************** Slice and Splice Porgram *******************//

const mynum = [1, 2, 3, 4, 5, 6]
console.log("A ", mynum);

const mynum2 = mynum.slice(3, 6)
console.log(mynum2);
console.log("B ", mynum);


const mynum3 = mynum.splice(1, 2)
console.log( mynum3);
console.log("C ",mynum);

// ************************* Unshift and Pop *********************//

let n = [1, 2, 3]
n.unshift(0);
n.pop();
console.log(n.join('-'));




