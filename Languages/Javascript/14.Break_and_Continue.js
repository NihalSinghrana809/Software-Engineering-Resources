// Break Statement
for (let i = 0; i < 10; i++) {
      if (i === 5) {
            console.log("Stopping the loop at i =", i);
            break; // Exiting the loop when i is 5
      }
}

// Continue Statement
for (let i = 0; i < 10; i++) {
      if (i % 2 === 0) {
            continue; // Skipping the rest of loop for even numbers
      }
      console.log("Odd number:", i);
}