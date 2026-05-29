// Arrow function is a concise way to write functions in JavaScript. It was introduced in ES6 (ECMAScript 2015) and provides a shorter syntax compared to traditional function expressions.It is used when function is called only once or when we want to write a simple function without the need for a name.
const square = (x) => x * x;
console.log(square(5));

// If the function has only one parameter, you can omit the parentheses around the parameter. If the function body consists of a single expression, you can omit the curly braces and the 'return' keyword. The value of that expression will be returned automatically.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

// Arrow functions do not have their own 'this' context. Instead, they inherit 'this' from the surrounding scope. This makes them particularly useful in situations where you want to preserve the context of 'this', such as in event handlers or when working with methods that require a specific 'this' value.
function Counter() {
      this.count = 0;
      setInterval(() => {
            this.count++;
            console.log(this.count);
      }, 1000);
}
new Counter();

// Here,below, we are using an arrow function as an event handler for a button click. The arrow function allows us to access the 'this' context of the surrounding scope, which is the global object in this case. When the button is clicked, it will log "Button clicked!" to the console.
document.querySelector("#btn").addEventListener("click", () => {
      console.log("Button clicked!");
});

// Using arrow functions with array methods like sort can make the code more concise and easier to read. 
const arr = [9, 2, 7, 1];
arr.sort((a, b) => a - b);
console.log(arr);
