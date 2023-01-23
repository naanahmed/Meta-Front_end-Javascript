const car1 = {
    speed: 100,
    color: 'black'
}
const car2 = {...car1}

car1.speed = 200

console.log(car1.speed, car2.speed)

//
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1)
console.log(fruits2)