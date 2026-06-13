// Default Parameters
function multiply(a, b = 1) {
      return a * b;
}
multiply(5);          // 5
multiply(5, 2);       // 10

function showAge(age = 18) {
      console.log(age);
}
showAge();            // 18
showAge(undefined);   // 18
showAge(25);          // 25