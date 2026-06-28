console.log("start");

setTimeout(()=> {
    console.log("TimeOut");
},0)

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");