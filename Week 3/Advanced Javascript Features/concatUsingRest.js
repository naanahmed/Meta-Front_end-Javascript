//join arrays
let veggies = ['tomato','onion','potato','cabbage','carrot']
const fruits = ['banana','mango','strawberry','orange','papaya']

const fruitsAndVeggies = [...fruits,...veggies]

console.log(veggies)
console.log(fruitsAndVeggies)

//join objects
const person = {
    name : 'Naan'
}
const personCar = {
    car_type : 'Mustang'
}

const personsHouse = {
    house_location : 'Gabriel'
}

const person_profile = {...person, ...personCar,...personsHouse}
console.log(person_profile)

//add new members to arrays

veggies = [...veggies, 'pepper', 'beetroot'];
console.log(veggies);