// Javascript moves declaration to the top internally, but not the assignment. So the declaration of x is hoisted to the top, but the assignment of 5 to x is not. Therefore, when we try to log x before the assignment, it will output undefined instead of throwing an error.
console.log(x);
var x = 5;
// Using let and const will not hoist the declaration and will throw error.

