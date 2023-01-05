var bird ={
    hasWings : true,
    canFly : true,
    hasFeathers : true
}

var eagle = Object.create(bird)

console.log(eagle.canFly)

var penguin = Object.create(bird)
penguin.canFly = false

console.log(penguin.canFly)
