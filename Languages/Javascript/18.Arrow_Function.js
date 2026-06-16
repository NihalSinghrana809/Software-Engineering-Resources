// An Arrow function is a compact alternative to a traditional function expression in JavaScript, introduced in ES6 (ECMAScript 2015), which utilizes the fat arrow (=>) syntax. It simplifies code structure and handles the this
const add = (a, b) => {
      return a + b;
}
console.log(add(1, 2));

const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(materials.map((material) => material.length));

// Arrow functions do not have their own this. They inherit this from the surrounding scope.
const person = {
      name: "John",
      greet() {
            setTimeout(() => {
                  console.log(this.name);
            }, 1000);
      }
};
person.greet();
