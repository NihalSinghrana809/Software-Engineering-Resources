// Symbol Declaration
const id = Symbol("id");
// Object Literals
const User = {
      [id]: 0o1,
      name: "Nihal Singh Rana",
      age: 20,
      location: "Khatima",
      email: "nihalsinghrana809@gmail.com",
      isLoggedIn: false,
      lastLoginDays: ["Monday", "Tuesday"],
}
for (const key in User) {
      console.log(`${key}: ${User[key]}`);
}

// Object to JSON
console.log(JSON.stringify(User,null,2));
