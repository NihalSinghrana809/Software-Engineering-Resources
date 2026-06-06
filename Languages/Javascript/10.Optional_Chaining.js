// Instead of throwing an error when trying to access a property of an undefined or null object, optional chaining allows you to safely access nested properties without having to check if each reference in the chain is valid.
const user = {
      name: "Nihal"
};
console.log(user.address?.city);
