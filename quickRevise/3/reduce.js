const nums = [1, 2, 3, 4];

const sum = nums.reduce((acc, current, index, value )=> {
    return acc + current;
}, 0)

console.log(sum);
