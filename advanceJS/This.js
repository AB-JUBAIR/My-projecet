const Person = {
    name: "kamal",
    greet() {
        console.log(`hi , i am ${this.name}`);
        
    },
};

Person.greet();
const greetfunction = Person.greet
greetfunction();


const boundGreet = Person.greet.bind({name: "jubair"})
boundGreet();

// Bind, call and apply 

// programming hero
class Person1 {
    constructor (name, age)
    {
        this.name = name;
        this.age = age;
    }
    sleep (){
        console.log(`Sleeping now ${this.name}`);
    }
}
const badam = new Person1('Badam', 23)
console.log(badam);
badam.sleep()
