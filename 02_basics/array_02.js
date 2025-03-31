const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// yeha per array k andar array aa jata hai.

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
//  concate new array banata hai merge karke

const all_new_heros = [...marvel_heros, ...dc_heros]
// yeh spread karde aur just same output dega like concate but we use this more.
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// yeh per infinity ki jagah depth bhi dal sakte hai 
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// from array bana deta hai
// console.log(Array.from({name: "hitesh"})) // interesting kyuki empty deta hai

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
// yeh array me convert kardega like [ 100,200,300]