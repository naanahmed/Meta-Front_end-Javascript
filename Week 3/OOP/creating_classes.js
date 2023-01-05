class Bus{
    constructor(capacity, Citybus){
        this.capacity = capacity
        this.Citybus = Citybus
    }

    toggleType(){
        this.Citybus = !(this.Citybus)
    }
    CityBusStatus() {
        console.log('CityBus?', this.Citybus);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}
/*
var Sheger_Bus = new Bus(40, true)
console.log(Sheger_Bus)
Sheger_Bus.toggleType();
Sheger_Bus.CityBusStatus();
Sheger_Bus.getSelf()
Sheger_Bus.getPrototype()
*/

class High_Speed_Bus extends Bus{
    constructor(charge, highspeedOn, capacity, Citybus){
        super(capacity, Citybus)
        this.charge = charge
        this.highspeedOn = highspeedOn
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleType() {
        super.toggleType();
        super.CityBusStatus();
        console.log('Lights are 100% operational.');
    }
}

var AnbessaBus = new Bus(45, false);
var Public_bus = new High_Speed_Bus('electric', true)

//AnbessaBus.toggleType()
//AnbessaBus.CityBusStatus();
//Public_bus.toggleType()

AnbessaBus.getPrototype()
Public_bus.getPrototype()
console.log(High_Speed_Bus.prototype.__proto__)