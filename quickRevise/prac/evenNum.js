const evenNum = () => {
    let evenNumber = [];
    for(let i = 2; i<=100; i++){
        if(i%2 == 0) {
            evenNumber.push(i);
        }
    }
    return evenNumber;
}

console.log(evenNum());
