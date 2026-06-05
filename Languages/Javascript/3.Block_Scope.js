// let is block-scoped, meaning it is only accessible within the block it is defined in
{
      let age = 18;
      console.log(age);
}
console.log(age); // Error: age is not defined

// var is function-scoped, not block-scoped
{
      var age = 18;
      console.log(age);
}
console.log(age); // Output: 18
