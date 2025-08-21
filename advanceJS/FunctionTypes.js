function greet(name, age) {
    return `Helllow ${name}! you are ${age} years old.`
}
console.log(greet("jubair", 22))


// let text = "The temperature is " + toCelsius(77) + " Celsius.";
// document.getElementById("demo").innerHTML = text;

// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// } 
// create an object 
const person = {};
// add properties  to the person object
person.firstNaame = "jubair";
person.lastName = "khan";
person.age = 21;
person.eyeColor = "brown";
console.log(person.firstNaame + " "+ person.lastName);

function add(a, b) { // function declaration 
    const result = a + b;
    return result;
}
const sum = add(20, 4)

// ----------- arrow function  


const add2 = (a, b) => a + b;
console.log(add2(5, 53));
