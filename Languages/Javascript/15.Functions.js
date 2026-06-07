// Reusable blocks of code that perform a specific task
function fibbonacci(n) {
      if (n <= 1) {
            return n;
      }
      return fibbonacci(n - 1) + fibbonacci(n - 2);
}
console.log("Fibbonacci of 10:", fibbonacci(10));

// Return statement is important to get the result back from the function
function add(a, b) {
      console.log(a + b);
}
let result = add(10, 20);
console.log(result); // Undefined

