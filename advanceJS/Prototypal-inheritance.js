function person(name) {
    this.name= name ;
}
person.prototype.greet = function () {
    console.log(`Hellow my name is ${this.name}`);
    
};

let kamal  = new person ("kamal");
kamal.greet();
