const arr = [10,50,20,80,40];

const result = arr.reduce((acc, current) => {
    if(acc > current) {
        return acc;
    } else {
        return current;
    }
},10 )

console.log(result);