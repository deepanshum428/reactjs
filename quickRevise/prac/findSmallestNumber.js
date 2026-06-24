const arr = [10,50,20,80,40];

const result = arr.reduce((acc, current) => {
    return acc < current ? acc : current;
}, 10)

console.log(result);
