const user = {
    name : "Rahul",
    address: {
        city:"Delhi"
    },
}
 const {name, address: {city}} = user;

 console.log(name);
 console.log(city);

