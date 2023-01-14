const car ={
    automatic : true,
    steering : true,
    speed : 'slow'
}

const sportsCar = Object.create(car);
sportsCar.speed = 'fast';
console.log('The sportsCar object: ', sportsCar);

for (prop in sportsCar){
    console.log(prop)
}

for (prop of Object.keys(sportsCar)){
    console.log(prop)
}