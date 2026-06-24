const users = [
 {id:1,name:"Amit"},
 {id:2,name:"Rahul"},
 {id:3,name:"Vikas"}
];

const result = users.find((e) => e.id===2);

console.log(result);
