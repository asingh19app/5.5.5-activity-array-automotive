//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js").Vehicle 

class Car extends VehicleModule {
    constructor(make,model,year,color,mileage){
        super(make,model,year,color,mileage)
        this.maxiumPassenger = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maxiumSpeed =160
        this.fuel = 10
        this.scheduleService = false

}

loadPassenger(num){
    if(num <= this.maxiumPassenger){
        console.log("The" + " " + this.make+ " " + this.model+ " "+ "can fit" +" " + num + " " + "people in the car")
    }
    else{
        console.log("The" + " " + this.make+ " " + this.model+ " "+ "cannot fit" + " " + num + " " + "people in the car")
    }
}

start(fuel){
    if(fuel >= this.fuel) {
        console.log('Engine on')
    }
    else {
        console.log('Engine off')
    }
}
checkService(mileage) {
    if(mileage > this.mileage) {            
        console.log('Maintainence needed, mileage has exceeded 30000')                      
    }
    else {
        console.log('Maintainence is up to date')
    }
}

}
//this shows how to call from this module...
let myCar = new Car("Mecury", "Sedan", "1965", "color", 30000);
console.log(myCar)
myCar.loadPassenger(10)
myCar.loadPassenger(3)
myCar.start(8)
myCar.start(10)
myCar.checkService(35000)
myCar.checkService(28000)
