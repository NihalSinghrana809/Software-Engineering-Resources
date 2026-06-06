// Arithmetic Operators
console.log("Arithmetic Operators:");
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Assignment Operators
console.log("Assignment Operators:");
let x = 10;

x += 5;  // x = x + 5
x -= 2;  // x = x - 2
x *= 3;  // x = x * 3
x /= 2;  // x = x / 2

// Lose Equality Operator (==) vs Strict Equality Operator (===)
console.log("Equality Operators:");
console.log(5 == "5");  // It checks only value, not data type
console.log(5 === "5"); // It checks both value and data type

// Logical Operators
console.log("Logical Operators:")
console.log(true && false);
console.log(true || false);
console.log(!true);

// Increment and Decrement Operators
console.log("Increment and Decrement Operators:");
let count = 0;
count++; // Post-increment: increments count after using it
count--; // Post-decrement: decrements count after using it
++count; // Pre-increment: increments count before using it
--count; // Pre-decrement: decrements count before using it