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