// Beginner mistake: Sequential when you could be parallel
async function slowFetch() {
      const user = await fetchUser(id);      // 200ms
      const posts = await fetchPosts(id);    // 200ms
      // Total: 400ms — WASTEFUL
}

// Senior move: Parallel execution
async function fastFetch() {
      const [user, posts] = await Promise.all([
            fetchUser(id),
            fetchPosts(id)
      ]);
      // Total: ~200ms
}

// Loading users asynchronously
async function loadUsers() {
      const response = await fetch("https://api.example.com/users");
      const users = await response.json();
      console.log(users);
}

// Async patterns in JS evolved from callbacks → promises → async/await.
