/* This is NOT just async — understand the execution order
Why? Call Stack → Microtask Queue → Macrotask Queue
Call Stack first → executes synchronous code immediately.
Microtasks next → promises are prioritized before timers.
Macrotasks last → timers, I/O, etc. run after microtasks.*/
console.log("Start");
setTimeout(() => {
      console.log("Timeout 1");
}, 0);
Promise.resolve().then(() => {
      console.log("Promise 1");
});
Promise.resolve().then(() => {
      setTimeout(() => {
            console.log("Timeout 2");
      }, 0);
});
console.log("End");

/*The event loop always clears the Call Stack → Microtask Queue → Macrotask Queue in that order. That’s why promises resolve before setTimeout, even with 0ms.*/