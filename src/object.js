let user = {
    "name": "alise",
    "age": 30,
    "likes birds": true,
    "nope": undefined,
}

console.log(user.name);
console.log(user["age"]);
console.log(user["likes birds"]);

// undefined value
console.log(user.nope);
console.log("nope" in user);

for(let key in user){
    alert(key);
    alert(user[key]);
}