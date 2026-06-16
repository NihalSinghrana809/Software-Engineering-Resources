//IIFE (Immediately Invoked Function Expression) is a JavaScript function expression that executes immediately after being created, commonly used to create a private scope and avoid polluting the global namespace.
((name) => {
      console.log(`Hello ${name}`)
})("Nihal");