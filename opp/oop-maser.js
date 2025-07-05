let car = {
    make: "toyota", 
    mode: "carmy",
    year: 2020,
start: function () { 
    return `${this.make} car got started in ${this.year} `
},
};
console.log(car.start());

function person (name, age ) {
this.name = name 
this.age= age
}
let jon = new person ("Johon Done", 28)

console.log(jon.name, jon.age);


class vehicle {
    constructor (make , model){
this.make = make 
this.model = model 
    }
    start() {
        return `${this.model} is a car from ${this.make}`
    }
}
class car extends vehicle {
drive() {
    return ` ${this.make} is a an inheritance example`
}
}
let myCar = new car ("Toyota", "corolla" )
console.log(myCar.);
