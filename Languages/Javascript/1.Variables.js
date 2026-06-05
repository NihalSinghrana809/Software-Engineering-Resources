// Javascript provide 3 types of variables to store data
// let - used where the value may change later
let age = 18;
age = 21;
console.log(age);

// const - used where the value will not change later
const pi = 3.14;
console.log(pi);

// var - used in older versions of Javascript, but not recommended for use in modern code
var a = 10;
var a = 20; // Allowed

let b = 10;
// let b = 20; ❌ Error

const c = 10;
// c = 20; ❌ Error
console.log(a + b + c);