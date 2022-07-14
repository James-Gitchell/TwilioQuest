function calculateMass(str){
let count = str.reduce((a,b) => a + b.length, 0)
 console.log(count);

return count;
}
calculateMass(["stringsOne", "two", "threeeBees"])