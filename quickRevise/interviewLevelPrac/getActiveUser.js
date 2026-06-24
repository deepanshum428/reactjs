const users = [
 {name:"Amit", active:true},
 {name:"Rahul", active:false},
 {name:"Vikas", active:true}
];

const result = users.filter((e)=> e.active === true);

console.log(result);
