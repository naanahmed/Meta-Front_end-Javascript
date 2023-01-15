const car = {
    speed: 200,
    color: "red"
}

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));


const car1 ={
    speed : 100,
    color : "blue"
}

for (key of Object.keys(car1)){
    console.log(key, ":", car[key] )
}