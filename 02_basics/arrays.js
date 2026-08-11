const marvel_heros = ["ironmman", "thor", "hulk"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_num = [1, 2, 3, [4, 5, 6], 7, [6, 7], [4, 5]]
// console.log(another_num.flat());


// console.log(Array.isArray("Nishant"));
// console.log(Array.from("Nishant Pankhaniya"));

// console.log(Array.from({name: "Nishant"})); // It throw the empty array 

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));

