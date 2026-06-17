// The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
const arr = [1, 2, 3, 4, 5];
const numbers = [10, 20, 30, 40, 50];
const nested = [1, [2, 3], [4, [5, 6]]];
const fruits = ["Apple", "Banana", "Mango", "Apple"];


// Important Array methods
// 1. push() -> Add element at end
let a = [...arr];
a.push(6);
console.log("push:", a);

// 2. pop() -> Remove last element
a.pop();
console.log("pop:", a);

// 3. unshift() -> Add at beginning
a.unshift(0);
console.log("unshift:", a);

// 4. shift() -> Remove first element
a.shift();
console.log("shift:", a);

// 5. concat() -> Merge arrays
console.log("concat:", arr.concat(numbers));

// 6. join() -> Array to string
console.log("join:", fruits.join(" - "));

// 7. slice() -> Copy portion
console.log("slice:", arr.slice(1, 4));

// 8. splice() -> Add/Remove elements
let b = [...arr];
b.splice(2, 1, 100);
console.log("splice:", b);

// 9. indexOf()
console.log("indexOf:", fruits.indexOf("Apple"));

// 10. lastIndexOf()
console.log("lastIndexOf:", fruits.lastIndexOf("Apple"));

// 11. includes()
console.log("includes:", fruits.includes("Banana"));

// 12. at()
console.log("at:", arr.at(-1));

// 13. reverse()
console.log("reverse:", [...arr].reverse());

// 14. sort()
const nums = [40, 5, 100, 2];
console.log("sort:", [...nums].sort((a, b) => a - b));

// 15. toSorted() (Doesn't modify original)
console.log("toSorted:", nums.toSorted((a, b) => a - b));

// 16. map()
console.log("map:", arr.map(x => x * 2));

// 17. filter()
console.log("filter:", arr.filter(x => x % 2 === 0));

// 18. reduce()
console.log("reduce:", arr.reduce((sum, x) => sum + x, 0));

// 19. reduceRight()
console.log("reduceRight:", ["A", "B", "C"].reduceRight((a, b) => a + b));

// 20. forEach()
console.log("forEach:");
arr.forEach((x, i) => console.log(i, x));

// 21. find()
console.log("find:", arr.find(x => x > 3));

// 22. findIndex()
console.log("findIndex:", arr.findIndex(x => x > 3));

// 23. some()
console.log("some:", arr.some(x => x > 4));

// 24. every()
console.log("every:", arr.every(x => x > 0));

// 25. flat()
console.log("flat:", nested.flat(2));

// 26. flatMap()
console.log("flatMap:", arr.flatMap(x => [x, x * 2]));

// 27. fill()
let fillArr = new Array(5).fill(0);
console.log("fill:", fillArr);

// 28. Array.from()
console.log("Array.from:", Array.from("Hello"));

// 29. Array.of()
console.log("Array.of:", Array.of(10, 20, 30));

// 30. keys()
console.log("keys:");
for (let key of arr.keys()) {
      console.log(key);
}

// 31. values()
console.log("values:");
for (let value of arr.values()) {
      console.log(value);
}

// 32. entries()
console.log("entries:");
for (let [index, value] of arr.entries()) {
      console.log(index, value);
}

// 33. copyWithin()
let copy = [1, 2, 3, 4, 5];
copy.copyWithin(0, 3);
console.log("copyWithin:", copy);

// 34. toReversed()
console.log("toReversed:", arr.toReversed());

// 35. toSpliced()
console.log("toSpliced:", arr.toSpliced(2, 1, 100));

// 36. with()
console.log("with:", arr.with(1, 99));

// 37. findLast()
console.log("findLast:", [1, 2, 3, 4, 5, 6].findLast(x => x % 2 === 0));

// 38. findLastIndex()
console.log("findLastIndex:", [1, 2, 3, 4, 5, 6].findLastIndex(x => x % 2 === 0));

// 39. isArray()
console.log("isArray:", Array.isArray(arr));

// 40. length
console.log("length:", arr.length);