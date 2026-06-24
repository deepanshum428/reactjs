const cart = [
 {name:"Laptop", price:50000},
 {name:"Mouse", price:1000},
 {name:"Keyboard", price:2000}
];

const result = cart.reduce((acc, curr) => acc + curr.price ,0);

console.log(result);
