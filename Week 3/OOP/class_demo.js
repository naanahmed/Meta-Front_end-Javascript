class Car {
    constructor(color, speed){
        this.color = color
        this.speed = speed
    }

    description(){
        console.log ('This car is ' + this.color + ' and its speed is ' + this.speed + 'km/h.')
    }
}

const car1 = new Car('red', 120)
const car2 = new Car('black', 150)

car1.description()
car2.description()