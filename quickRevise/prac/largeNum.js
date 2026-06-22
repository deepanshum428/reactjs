function largestNumber(...num) {
    let numbers = [...num];
    let largest = numbers[0]
    for(let i=0; i<num.length; i++) {
        if(numbers[i]> largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

console.log(largestNumber(12, 23, 45, 34, 22, 22));
