function preson(name, age) {
   this.name = name 
   this.age = age
} 

function Car(make, model){

   this.make = make;
   this.model= model;
}
let myCar = new Car("Toyota", "charmy");
// console.log(myCar);

function tea(type){
   this.type = type;
   this.describe = function(){
      return `this is a cuppp of ${this.type}`;
   }
}
let lemonTea = new tea("lemon Tea");
console.log(lemonTea.describe());



function Animal (speacies){
this.speacies = speacies;
}
Animal.prototype.sound = function(){
   return `${this.speacies} make sound`;
}
let dog = new Animal ("Dog");
