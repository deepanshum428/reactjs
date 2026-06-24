const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Rahul" }
];

const user = users.find(u => u.id === 2);

console.log(user);